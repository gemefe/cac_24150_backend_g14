cac_24150_backend_g14
=====================


Preparación del ambiente de trabajo
-----------------------------------

### Instalar dependencia
    pip install virtualenv

### Crear ambiente virtual
    virtualenv venv_farma

### Activar el ambiente virtual desde la carpeta donde quedó guardado el ambiente virtual
    .\venv_farma\Scripts\activate

### Instalar dependencias del proyecto
    pip install django djangorestframework djangorestframework-simplejwt django-cors-headers

### O instalar dependencias desde el requirements.txt
    pip install -r requirements.txt

### Una vez instaladas las dependencias, generar el requirements.txt de PIP
    pip freeze > requirements.txt

### Creación del proyecto Django
    django-admin startproject farma_backend .
    python manage.py startapp app_productos
    python manage.py startapp app_clientes

### Ejecución de las migraciones de los cambios realizados del proyecto cada vez que se modifica la base de datos.
    python manage.py makemigrations
    python manage.py migrate

### Creación del superusuario
    python manage.py createsuperuser

### Ejecución del servidor
    python manage.py runserver

### Para cerrar la ejecución CTRL + C

Docker
------

### Instalar Docker [https://www.docker.com/]

### Iniciar contenedor en al consola
    docker-compose up -d

Instalar MySQL en la PC
-----------------------

### Establecer nueva conexión luego de iniciar el contenedor en Docker
    hostname = 127.0.0.1
    port = 3306
    username = root
    password = g14_farma

### Instalar data de ejemplo a la base de datos
    python manage.py loaddata productos.json

