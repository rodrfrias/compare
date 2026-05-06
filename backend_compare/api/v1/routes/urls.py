# api/v1/routes/urls.py
from django.urls import path
from api.v1.views.document_views import PdfExtraccionDatosView

urlpatterns = [
    path('upload-pdf/', PdfExtraccionDatosView.as_view(), name='upload-pdf'),
]