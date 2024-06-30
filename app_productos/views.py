from .models import Producto
from.serializer import ProductoSerializer
from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated

class ClienteViewSet(viewsets.ModelViewSet):
    queryset=Producto.objects.all()
    serializer_class=ProductoSerializer
    # permission_classes=[IsAuthenticated]
    