"""
views.py  (app: supplier_docs)
-------------------------------
Expone el endpoint POST /api/supplier-docs/sanitize/

Recibe un PDF via multipart/form-data (campo "pdf") y devuelve
el PDF sanitizado como descarga, junto con metadata en los headers.

Integración en urls.py:
    from django.urls import path
    from supplier_docs.views import SanitizePDFView

    urlpatterns = [
        path("api/supplier-docs/sanitize/", SanitizePDFView.as_view()),
    ]
"""

import logging
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from api.services.pdf_service import sanitize_pdf, SanitizationResult

logger = logging.getLogger(__name__)

MAX_UPLOAD_BYTES = 500 * 1024 * 1024  # 500 MB — ajustable según plan del usuario


@method_decorator(csrf_exempt, name="dispatch")
class SanitizePDFView(View):
    """
    POST /api/supplier-docs/sanitize/

    Body (multipart/form-data):
        pdf: archivo PDF del proveedor

    Respuesta exitosa (200):
        Content-Type: application/pdf
        X-Original-Size, X-Clean-Size, X-Reduction-Percent,
        X-Pages-Processed, X-Images-Removed  (para debug / logs del frontend)
        Body: bytes del PDF sanitizado

    Respuesta de error (400 / 413 / 500):
        Content-Type: application/json
        Body: { "error": "descripción" }
    """

    http_method_names = ["post"]

    def post(self, request):
        pdf_file = request.FILES.get("pdf")

        # --- Validaciones de entrada ---
        if not pdf_file:
            return JsonResponse(
                {"error": "Campo 'pdf' requerido (multipart/form-data)."},
                status=400,
            )

        if not pdf_file.name.lower().endswith(".pdf"):
            return JsonResponse(
                {"error": "El archivo debe tener extensión .pdf"},
                status=400,
            )

        if pdf_file.size > MAX_UPLOAD_BYTES:
            return JsonResponse(
                {
                    "error": (
                        f"El archivo supera el límite de "
                        f"{MAX_UPLOAD_BYTES // (1024*1024)} MB."
                    )
                },
                status=413,
            )

        # --- Sanitización ---
        try:
            file_bytes = pdf_file.read()
        except Exception as exc:
            logger.error("Error al leer el archivo subido: %s", exc)
            return JsonResponse({"error": "No se pudo leer el archivo."}, status=500)

        result = sanitize_pdf(file_bytes)

        if not result.success:
            return JsonResponse({"error": result.error}, status=422)

        # --- Respuesta ---
        response = HttpResponse(
            result.clean_pdf_bytes,
            content_type="application/pdf",
        )
        response["Content-Disposition"] = (
            f'attachment; filename="sanitized_{pdf_file.name}"'
        )

        # Headers informativos (útiles para logging en el frontend)
        response["X-Original-Size"] = result.original_size_bytes
        response["X-Clean-Size"] = result.clean_size_bytes
        response["X-Reduction-Percent"] = f"{result.reduction_percent:.1f}"
        response["X-Pages-Processed"] = result.pages_processed
        response["X-Images-Removed"] = result.images_removed

        return response