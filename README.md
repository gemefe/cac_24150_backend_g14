# cac_24150_backend_g14


Preparación del ambiente de trabajo

Instalar dependencia
pip install virtualenv

Crear ambiente virtual
virtualenv venv_farma

Activar ambiente virtual
.\venv_farma\Scripts\activate

Instalar dependencias del proyecto
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers


Creación del proyecto Django
django-admin startproject farma_backend .
python manage.py startapp app_productos
python manage.py startapp app_clientes