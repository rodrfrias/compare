"""
pdf_service.py
--------------
Servicio de sanitización de PDFs para Compare.ia.

Responsabilidad única: recibir un PDF (posiblemente pesado por imágenes)
y devolver un PDF limpio que contiene únicamente texto, listo para ser
procesado por la IA sin malgastar tokens ni tiempo de lectura.

Uso desde Django:
    from api.services.pdf_service import sanitize_pdf, SanitizationResult

    with open("lista_proveedor.pdf", "rb") as f:
        result = sanitize_pdf(f.read())

    if result.success:
        clean_bytes = result.clean_pdf_bytes
        print(f"Reducción: {result.reduction_percent:.1f}%")
    else:
        print(f"Error: {result.error}")
"""

import fitz  # PyMuPDF
import logging
from dataclasses import dataclass
from typing import Optional

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Resultado tipado — nunca lanzamos excepciones al llamador
# ---------------------------------------------------------------------------

@dataclass
class SanitizationResult:
    success: bool
    clean_pdf_bytes: Optional[bytes] = None
    original_size_bytes: int = 0
    clean_size_bytes: int = 0
    pages_processed: int = 0
    images_removed: int = 0
    error: Optional[str] = None

    @property
    def reduction_bytes(self) -> int:
        return self.original_size_bytes - self.clean_size_bytes

    @property
    def reduction_percent(self) -> float:
        if self.original_size_bytes == 0:
            return 0.0
        return (self.reduction_bytes / self.original_size_bytes) * 100


# ---------------------------------------------------------------------------
# Función principal
# ---------------------------------------------------------------------------

def sanitize_pdf(file_bytes: bytes) -> SanitizationResult:
    """
    Recibe los bytes de un PDF y devuelve un SanitizationResult.

    Proceso:
      1. Abre el PDF en memoria (sin escribir en disco).
      2. Por cada página, elimina todos los objetos de imagen embebidos.
      3. Limpia el stream de contenido de la página (clean_contents).
      4. Serializa el PDF resultante a bytes y mide la reducción.

    No lanza excepciones: cualquier error queda capturado en result.error.
    """
    original_size = len(file_bytes)

    try:
        src = fitz.open(stream=file_bytes, filetype="pdf")
    except Exception as exc:
        logger.error("No se pudo abrir el PDF: %s", exc)
        return SanitizationResult(
            success=False,
            original_size_bytes=original_size,
            error="Archivo inválido o corrupto: {}".format(exc),
        )

    total_images_removed = 0
    out = fitz.open()

    try:
        for page_index in range(len(src)):
            page = src[page_index]

            # Paso 1: eliminar imágenes embebidas en la página
            images_on_page = page.get_images(full=True)
            for img_info in images_on_page:
                xref = img_info[0]
                try:
                    page.delete_image(xref)
                    total_images_removed += 1
                except Exception as exc:
                    # Algunas imágenes compartidas entre páginas no se pueden
                    # eliminar individualmente — se ignoran sin fallar.
                    logger.debug(
                        "No se pudo eliminar imagen xref=%s en página %s: %s",
                        xref, page_index, exc,
                    )

            # Paso 2: limpiar el stream de contenido (elimina referencias
            # a recursos gráficos que hayan quedado huérfanos)
            page.clean_contents()

            # Paso 3: copiar la página limpia al documento de salida
            out.insert_pdf(src, from_page=page_index, to_page=page_index)

        clean_bytes = out.write(
            deflate=True,        # comprime streams de contenido
            deflate_images=True, # comprime imágenes residuales si quedan
            deflate_fonts=True,  # comprime fuentes embebidas
            garbage=4,           # elimina objetos huérfanos (nivel máximo)
            clean=True,          # normaliza el contenido de las páginas
        )

        logger.info(
            "PDF sanitizado: %d páginas, %d imágenes eliminadas, "
            "%.1f%% de reducción (%d → %d bytes)",
            len(src),
            total_images_removed,
            ((original_size - len(clean_bytes)) / original_size * 100) if original_size else 0,
            original_size,
            len(clean_bytes),
        )

        return SanitizationResult(
            success=True,
            clean_pdf_bytes=clean_bytes,
            original_size_bytes=original_size,
            clean_size_bytes=len(clean_bytes),
            pages_processed=len(src),
            images_removed=total_images_removed,
        )

    except Exception as exc:
        logger.error("Error durante la sanitización: %s", exc)
        return SanitizationResult(
            success=False,
            original_size_bytes=original_size,
            error=str(exc),
        )

    finally:
        src.close()
        out.close()