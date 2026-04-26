# api/v1/routes/urls.py
from django.urls import path
from api.v1.views.document_views import SanitizePDFView

urlpatterns = [
    path('upload-pdf/', SanitizePDFView.as_view(), name='upload-pdf'),
]