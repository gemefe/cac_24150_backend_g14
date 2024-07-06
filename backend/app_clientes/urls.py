from django.urls import path, include
from rest_framework.routers import DefaultRouter 
from . import views

router=DefaultRouter()
# router.register('', views.ClienteViewSet, basename="cliente")
router.register('', views.ConsultaViewSet, basename="consulta")

urlpatterns = [
    path('', include(router.urls))
]