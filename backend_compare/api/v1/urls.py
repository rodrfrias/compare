# api/v1/urls.py
from django.urls import path
from .views.document_views import SanitizePDFView # <--- Importas tu archivo

urlpatterns = [
    # Aquí es donde el 404 se resuelve
    path('sanitize-pdf/', SanitizePDFView.as_view(), name='sanitize-pdf'),
]