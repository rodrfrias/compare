# api/urls.py
from django.urls import path, include

urlpatterns = [
    # Si quieres que la URL sea /api/supplier-docs/... (sin el v1)
    # usa un prefijo vacío:
    path('v1/', include('api.v1.urls')),
]