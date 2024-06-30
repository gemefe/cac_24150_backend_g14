from .models import Cliente, Consulta
from rest_framework import serializers

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cliente
        fields='full_name', 'birth_date', 'email', 
        
class ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Consulta
        fields='full_name', 'birth_date', 'email', 'description', 'health_insurance_type'