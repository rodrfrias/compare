import logging
import json
import google.generativeai as genai
from dotenv import load_dotenv
import os
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from api.services.pdf_service import sanitize_pdf
import base64

# Cargamos las variables de entorno al iniciar
load_dotenv()

logger = logging.getLogger(__name__)

# Límite de 500 MB
MAX_UPLOAD_BYTES = 200 * 1024 * 1024 # Ajuste según plan de usuario.

@method_decorator(csrf_exempt, name="dispatch")
class SanitizePDFView(View):
    http_method_names = ["post"]

    def post(self, request):
        pdf_file = request.FILES.get("pdf")

        if not pdf_file:
            return JsonResponse({"error": "Campo 'pdf' requerido."}, status=400)

        if pdf_file.size > MAX_UPLOAD_BYTES:
            return JsonResponse({"error": "Archivo demasiado grande."}, status=413)

        try:
            # 1. Leemos el archivo original
            file_bytes = pdf_file.read()
            
            # 2. Ejecutamos tu lógica de sanitización (sin imágenes)
            result = sanitize_pdf(file_bytes)
            if not result.success:
                return JsonResponse({"error": result.error}, status=422)

            # 3. Enviamos el PDF sanitizado (bytes) directamente a la IA
            ai_json_response = enviar_pdf_a_gemini(
                result.clean_pdf_bytes, 
                pdf_file.name
            )

            if ai_json_response:
                return JsonResponse(ai_json_response, safe=False, status=200)
            else:
                return JsonResponse({"error": "Error al procesar con IA."}, status=500)

        except Exception as exc:
            logger.error("Error en SanitizePDFView: %s", exc)
            return JsonResponse({"error": "Error interno."}, status=500)

# --- Función de Servicio para Gemini ---

def enviar_pdf_a_gemini(pdf_bytes, file_name):
    """
    Envía el contenido binario del PDF sanitizado a Gemini.
    """
    api_key = os.environ.get("GEMINI_API_KEY")
    
    if not api_key:
        logger.error("GEMINI_API_KEY no configurada en el entorno.")
        return None

    genai.configure(api_key=api_key)
    
    # Configuramos el modelo para que la respuesta sea un JSON válido
    generation_config = {
        "temperature": 0.1, # Baja temperatura para mayor precisión en datos
        "response_mime_type": "application/json",
    }

    model = genai.GenerativeModel(
    model_name='models/gemini-2.5-flash', # Actualizado a la versión disponible en 2026
    generation_config=generation_config
    )

    prompt = """
    Contexto: Eres un experto en extracción de datos comerciales y análisis de catálogos de proveedores para el mercado de consumo masivo (Argentina). Tu objetivo es transformar el texto de catálogos, listas de precios o folletos en datos estructurados (JSON) altamente normalizados.

    Tarea: Analiza el documento provisto y genera un JSON siguiendo estrictamente las reglas de negocio detalladas.

    1. Identificación del Proveedor y Tipo de Comercio:

    Extrae: nombre, CUIT, condicion_iva, email, telefono, direccion, localidad, provincia y código postal.

    Determina tipo_comercio: "MAYORISTA" (si hay CUIT/precios netos) o "MINORISTA" (precios finales/ofertas al público).

    Regla de Ausencia: Si un dato no está explícito, coloca obligatoriamente "-".

    2. Normalización de Productos y Nomenclatura:

    Estandariza los nombres para evitar duplicidad semántica.

    Formato: [Nombre del Producto] [Variante/Sabor] [Marca].

    Normaliza unidades: Asegura consistencia (ej: "500ml" en lugar de "0.5L").

    3. Lógica de Precios y IVA (Cálculo Unitario Crítico):

    Precio Unitario Neto: Debes devolver siempre el precio por UNIDAD INDIVIDUAL.

    Regla de División: Si el producto viene en pack, caja o kit (ej: "Pack x6", "Kit 30un"), DEBES dividir el precio total por la cantidad de unidades y colocar el resultado en precio_unitario_neto.

    Regla de IVA (Numérica): * Si el IVA está discriminado (Mayorista), coloca el valor flotante correspondiente (21.0, 10.5, etc.).

    IMPORTANTE: Si el documento indica "IVA incluido", "Precio Final" o es un catálogo MINORISTA, coloca obligatoriamente el valor 0.0 en la propiedad iva.

    Nota: Yerba, Aceite y Harina suelen tributar 10.5% en facturas mayoristas.

    {
    "proveedor": {
        "nombre": "string",
        "cuit": "string",
        "condicion_iva": "string",
        "email": "string",
        "telefono": "string",
        "direccion": "string",
        "localidad": "string",
        "provincia": "string",
        "cp": "string",
        "tipo_comercio": "MAYORISTA | MINORISTA"
    },
    "productos": [
        {
        "categoria": "string",
        "nombre_normalizado": "string",
        "marca": "string",
        "modelo": "string",
        "presentacion": "string",
        "precio_unitario_neto": float,
        "iva": float
        }
    ]
    }
    """

    try:
        # Paso 2: Convertir los bytes a texto Base64
        pdf_base64 = base64.b64encode(pdf_bytes).decode("utf-8")

        response = model.generate_content([
            prompt,
            {
                "mime_type": "application/pdf",
                "data": pdf_base64  # <--- Ahora le enviamos el "texto" de la foto
            }
        ])
        
        return json.loads(response.text)
    except Exception as e:
        logger.error(f"Error en API Gemini: {e}")
        return None