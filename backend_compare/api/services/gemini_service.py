import google.generativeai as genai
import logging
import json
import os
import base64
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)


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

    prompt = os.environ.get("PROMPT")

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