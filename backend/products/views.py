from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Product, ConsultationRequest
from .serializers import ProductSerializer, ConsultationRequestSerializer
from .services import send_consultation_notification, send_consultation_update
from django.http import HttpResponse, JsonResponse
from django.utils import timezone
import json

# Create your views here.

class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ConsultationRequestCreateView(generics.CreateAPIView):
    queryset = ConsultationRequest.objects.all()
    serializer_class = ConsultationRequestSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            consultation = serializer.save()
            
            send_consultation_notification(consultation)
            
            return Response({
                'success': True,
                'message': 'Thank you for your inquiry. Our team will review it and respond as soon as possible.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            'success': False,
            'message': 'Please check your input and try again.',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class ConsultationRequestListView(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = ConsultationRequest.objects.all()
    serializer_class = ConsultationRequestSerializer
    
    def list(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            serializer = self.get_serializer(queryset, many=True)
            return Response({
                'success': True,
                'message': 'Consultation requests retrieved successfully.',
                'data': serializer.data
            })
        except Exception as e:
            return Response({
                'success': False,
                'message': 'Failed to retrieve consultation requests.',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_queryset(self):
        """Filter by processed status if provided"""
        queryset = ConsultationRequest.objects.all()
        is_processed = self.request.query_params.get('is_processed', None)
        if is_processed is not None:
            queryset = queryset.filter(is_processed=is_processed.lower() == 'true')
        return queryset

@api_view(['POST'])
@permission_classes([IsAdminUser])
def mark_consultation_processed(request, pk):
    """Mark a consultation request as processed"""
    try:
        consultation = ConsultationRequest.objects.get(pk=pk)
        consultation.is_processed = True
        consultation.processed_at = timezone.now()
        consultation.save()
        
        # Send update email
        try:
            send_consultation_update(consultation, "processed")
        except Exception as e:
            print(f"Update email failed: {e}")
        
        return Response({
            'success': True,
            'message': 'Consultation request marked as processed.'
        })
    except ConsultationRequest.DoesNotExist:
        return Response({
            'success': False,
            'message': 'Consultation request not found.'
        }, status=status.HTTP_404_NOT_FOUND)

def api_root(request):
    return HttpResponse("""
        <h2>Welcome to the ShanghaiTextiles API</h2>
        <ul>
          <li><a href='/api/products/'>Products API</a></li>
          <li><a href='/api/consultations/'>Consultation Requests API</a></li>
          <li><a href='/admin/'>Admin</a></li>
        </ul>
    """)

def health_check(request):
    """Health check endpoint for Railway deployment"""
    return JsonResponse({
        "status": "healthy",
        "message": "ShanghaiTextiles API is running"
    })
