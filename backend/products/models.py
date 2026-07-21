from django.db import models
from django.utils import timezone
import json

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    vendor_phone = models.CharField(max_length=20)
    vendor_email = models.EmailField()
    specifications = models.JSONField(default=dict, blank=True)
    features = models.JSONField(default=list, blank=True)
    support = models.JSONField(default=dict, blank=True)
    long_description = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    image_url = models.URLField("Image URL", max_length=500, blank=True, null=True)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='images')
    image_url = models.URLField("Image URL", max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.product.name} - Image {self.id}"

class ConsultationRequest(models.Model):
    INQUIRY_TYPES = [
        ('geron', 'GERON — Carding Technology'),
        ('jsm', 'JSM Jinqiao — Rotor-Spinning Parts'),
        ('rotex', 'Nantong Rotex — Metalworking Machinery'),
        ('dumtech', 'Jinhua Dumtech — Compressed Air'),
        ('quote', 'Multi-product Quote Request'),
        ('technical', 'Technical Support'),
        ('general', 'General Inquiry'),
    ]
    
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(blank=True, max_length=20)
    company = models.CharField(blank=True, max_length=200)
    inquiry_type = models.CharField(max_length=20, choices=INQUIRY_TYPES, default='general')
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    is_processed = models.BooleanField(default=False)
    processed_at = models.DateTimeField(null=True, blank=True)
    notes = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.inquiry_type} - {self.submitted_at.strftime('%Y-%m-%d')}"
    
    class Meta:
        ordering = ['-submitted_at']