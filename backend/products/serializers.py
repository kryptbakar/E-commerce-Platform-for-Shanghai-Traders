from rest_framework import serializers
from .models import Product, ProductImage, ConsultationRequest

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image_url']

class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'vendor_phone', 'vendor_email',
            'specifications', 'features', 'support', 'long_description',
            'created_at', 'updated_at', 'images'
        ]

    def get_images(self, obj):
        images = []
        if obj.image_url:
            images.append(obj.image_url)
        images += [img.image_url for img in obj.images.all()]
        return images

class ConsultationRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultationRequest
        fields = [
            'id', 'first_name', 'last_name', 'email', 'phone', 'company',
            'inquiry_type', 'message', 'submitted_at'
        ]
        read_only_fields = ['id', 'submitted_at']
    
    def validate_email(self, value):
        """Custom email validation"""
        if not value or '@' not in value:
            raise serializers.ValidationError("Please enter a valid email address.")
        return value
    
    def validate_phone(self, value):
        """Custom phone validation"""
        if value:
            # Remove all non-digit characters
            digits_only = ''.join(filter(str.isdigit, value))
            if len(digits_only) < 7:
                raise serializers.ValidationError("Please enter a valid phone number.")
        return value