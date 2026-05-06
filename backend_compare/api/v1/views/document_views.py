
from dotenv import load_dotenv #Importamos la funcion para cargar variables desde un archivo
from django.http import JsonResponse #Importa la clase para enviar respuestas en formato JSON al cliente
from django.views import View #Importa la clase base de Django para crear vistas basadas en clases.
from django.utils.decorators import method_decorator #Herramienta para aplicar "decoradores" (modificadores) a los métodos de una clase.
from django.views.decorators.csrf import csrf_exempt #Importa un decorador que desactiva la protección CSRF (necesario si estás probando la API desde herramientas externas como Postman sin tokens de sesión).
from api.services.pdf_service import sanitize_pdf#Importa tu lógica personalizada para limpiar o procesar el archivo PDF.
import logging #Librería estándar para registrar errores o eventos en la consola/archivos.
from api.services.gemini_service import enviar_pdf_a_gemini #Importa la función que conecta con la Inteligencia Artificial.

#Ejecuta la carga de las variables de entorno para que estén disponibles en el código.
load_dotenv()

logger = logging.getLogger(__name__)
# Límite de 500 MB
MAX_UPLOAD_BYTES = 200 * 1024 * 1024 # Ajuste según plan de usuario.


#AAplica la exención de CSRF a todos los métodos de la clase.
@method_decorator(csrf_exempt, name="dispatch")
class PdfExtraccionDatosView(View): #Define tu clase controladora
    
    # Indica que esta URL solo aceptará peticiones de tipo POST
    http_method_names = ["post"]

    def post(self, request):
        pdf_file = request.FILES.get("pdf")

        if not pdf_file:
            return JsonResponse({"error": "Campo 'pdf' requerido."}, status=400)

        if pdf_file.size > MAX_UPLOAD_BYTES:
            return JsonResponse({"error": "Archivo demasiado grande."}, status=413)

        try:
            # 1.Convierte el archivo cargado en memoria en una cadena de bytes pura para poder procesarlo.
            file_bytes = pdf_file.read()
            
            # 2. Ejecutamos tu lógica de sanitización (sin imágenes)
            result = sanitize_pdf(file_bytes)
            if not result.success:
                return JsonResponse({"error": result.error}, status=422)

            # 3. Envía el contenido ya limpio a la IA de Google para extraer los datos comerciales
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
