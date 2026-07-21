from django.contrib import admin
from .models import Product, ProductImage, ConsultationRequest
from django.utils.html import format_html
from django.utils import timezone

class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image_url', 'image_preview', 'created_at')
    readonly_fields = ('image_preview',)
    search_fields = ('product__name', 'image_url')

    def image_preview(self, obj):
        if obj.image_url:
            return format_html('<img src="{}" style="max-height: 100px; max-width: 150px;" />', obj.image_url)
        return "No Image"
    image_preview.short_description = 'Preview'

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'image_url', 'image_preview', 'price', 'vendor_email', 'created_at')
    readonly_fields = ('image_preview',)
    search_fields = ('name', 'vendor_email')

    def image_preview(self, obj):
        if obj.image_url:
            return format_html('<img src="{}" style="max-height: 100px; max-width: 150px;" />', obj.image_url)
        return "No Image"
    image_preview.short_description = 'Preview'

class ConsultationRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'company', 'inquiry_type', 'is_processed', 'submitted_at', 'response_time')
    list_filter = ('inquiry_type', 'is_processed', 'submitted_at')
    search_fields = ('first_name', 'last_name', 'email', 'company', 'message')
    readonly_fields = ('submitted_at', 'response_time')
    list_editable = ('is_processed',)
    actions = ['mark_as_processed', 'mark_as_unprocessed']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone', 'company')
        }),
        ('Inquiry Details', {
            'fields': ('inquiry_type', 'message')
        }),
        ('Status', {
            'fields': ('is_processed', 'processed_at', 'notes'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('submitted_at', 'response_time'),
            'classes': ('collapse',)
        }),
    )

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = 'Full Name'

    def response_time(self, obj):
        if obj.is_processed and obj.processed_at:
            delta = obj.processed_at - obj.submitted_at
            hours = delta.total_seconds() / 3600
            if hours < 24:
                return f"{hours:.1f} hours"
            else:
                days = hours / 24
                return f"{days:.1f} days"
        return "Not processed"
    response_time.short_description = 'Response Time'

    def mark_as_processed(self, request, queryset):
        updated = queryset.update(is_processed=True, processed_at=timezone.now())
        self.message_user(request, f'{updated} consultation requests marked as processed.')
    mark_as_processed.short_description = "Mark selected consultations as processed"

    def mark_as_unprocessed(self, request, queryset):
        updated = queryset.update(is_processed=False, processed_at=None)
        self.message_user(request, f'{updated} consultation requests marked as unprocessed.')
    mark_as_unprocessed.short_description = "Mark selected consultations as unprocessed"

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage, ProductImageAdmin)
admin.site.register(ConsultationRequest, ConsultationRequestAdmin)
