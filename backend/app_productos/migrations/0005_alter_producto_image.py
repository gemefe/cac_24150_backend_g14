# Generated by Django 5.0.6 on 2024-07-07 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_productos', '0004_alter_producto_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='image',
            field=models.CharField(max_length=100),
        ),
    ]
