from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from .models import ConsultationRequest

def send_consultation_notification(consultation: ConsultationRequest):
    """
    Send email notifications for new consultation requests
    """
    try:
        # Send notification to admin
        admin_subject = f"New Consultation Request: {consultation.inquiry_type}"
        admin_message = f"""
New consultation request received:

Name: {consultation.first_name} {consultation.last_name}
Email: {consultation.email}
Phone: {consultation.phone or 'Not provided'}
Company: {consultation.company or 'Not provided'}
Inquiry Type: {consultation.get_inquiry_type_display()}
Message: {consultation.message}

Submitted at: {consultation.submitted_at}
        """
        
        # Send to admin (you can configure this email in settings)
        admin_email = getattr(settings, 'ADMIN_EMAIL', 'shanghaitraders860@gmail.com')
        send_mail(
            admin_subject,
            admin_message,
            settings.DEFAULT_FROM_EMAIL,
            [admin_email],
            fail_silently=False,
        )
        
        # Send auto-response to customer
        customer_subject = "Thank you for your inquiry - Shanghai Traders"
        customer_message = f"""
Dear {consultation.first_name},

Thank you for contacting Shanghai Traders. We have received your inquiry and our team will respond as soon as possible.

Inquiry Details:
- Type: {consultation.get_inquiry_type_display()}
- Submitted: {consultation.submitted_at.strftime('%B %d, %Y at %I:%M %p')}

For additional information, email us at shanghaitraders860@gmail.com or WhatsApp +92 321 4477164.

Best regards,
Shanghai Traders Team
        """
        
        send_mail(
            customer_subject,
            customer_message,
            settings.DEFAULT_FROM_EMAIL,
            [consultation.email],
            fail_silently=False,
        )
        
        return True
        
    except Exception as e:
        print(f"Email notification failed: {e}")
        return False

def send_consultation_update(consultation: ConsultationRequest, status: str):
    """
    Send update email when consultation status changes
    """
    try:
        subject = f"Update on your inquiry - Shanghai Traders"
        message = f"""
Dear {consultation.first_name},

Your inquiry has been {status}.

Inquiry Details:
- Type: {consultation.get_inquiry_type_display()}
- Submitted: {consultation.submitted_at.strftime('%B %d, %Y at %I:%M %p')}

If you have any questions, email us at shanghaitraders860@gmail.com or WhatsApp +92 321 4477164.

Best regards,
Shanghai Traders Team
        """
        
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [consultation.email],
            fail_silently=False,
        )
        
        return True
        
    except Exception as e:
        print(f"Update email failed: {e}")
        return False
