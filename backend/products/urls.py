from django.urls import path
from .views import (
    ProductListAPIView, 
    ConsultationRequestCreateView, 
    ConsultationRequestListView,
    mark_consultation_processed,
    api_root, 
    health_check
)

urlpatterns = [
    path('', api_root),  # Root welcome page
    path('api/products/', ProductListAPIView.as_view(), name='product-list'),
    path('api/consultations/', ConsultationRequestCreateView.as_view(), name='consultation-create'),
    path('api/consultations/list/', ConsultationRequestListView.as_view(), name='consultation-list'),
    path('api/consultations/<int:pk>/process/', mark_consultation_processed, name='consultation-process'),
    path('health/', health_check, name='health-check'),
] 