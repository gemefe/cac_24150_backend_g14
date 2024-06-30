from django.contrib.auth.models import Producto
from rest_framework import serializers

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields='id', 'name', 'image', 'price', 'descripcion'


"""
Ejemplo del dato que recibe el front del Json actual.
# alt --> nombre
  {
    "id": "2",
    "src": "../img/7509546686042.jpg",
    "alt": "Pasta Dental Colgate total",
    "precio": "$1500",
    "descripcion": "Funciona con tecnología con carbón activado para una sonrisa deslumbrante."
  },
"""        