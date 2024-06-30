from django.contrib import admin
from .models import Cliente, Consulta

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    ...
    
@admin.register(Consulta)
class ConsultaAdmin(admin.ModelAdmin):
    ...