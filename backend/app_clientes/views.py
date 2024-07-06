from .models import Cliente, Consulta
from.serializer import ClienteSerializer, ConsultaSerializer
from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated

class ClienteViewSet(viewsets.ModelViewSet):
    queryset=Cliente.objects.all()
    serializer_class=ClienteSerializer
    # permission_classes=[IsAuthenticated]
    
class ConsultaViewSet(viewsets.ModelViewSet):
    queryset=Consulta.objects.all()
    serializer_class=ConsultaSerializer
    # permission_classes=[IsAuthenticated]