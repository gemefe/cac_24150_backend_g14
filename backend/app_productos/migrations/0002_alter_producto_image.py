# Generated by Django 5.0.6 on 2024-07-07 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_productos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='image',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
