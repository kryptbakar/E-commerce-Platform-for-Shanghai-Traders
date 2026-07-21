from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('products', '0003_alter_consultationrequest_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='consultationrequest',
            name='inquiry_type',
            field=models.CharField(
                choices=[
                    ('geron', 'GERON — Carding Technology'),
                    ('jsm', 'JSM Jinqiao — Rotor-Spinning Parts'),
                    ('rotex', 'Nantong Rotex — Metalworking Machinery'),
                    ('dumtech', 'Jinhua Dumtech — Compressed Air'),
                    ('quote', 'Multi-product Quote Request'),
                    ('technical', 'Technical Support'),
                    ('general', 'General Inquiry'),
                ],
                default='general',
                max_length=20,
            ),
        ),
    ]