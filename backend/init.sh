#!/usr/bin/sh

python manage.py makemigrations 
python manage.py migrate
python manage.py loaddata productos.json
python manage.py createsuperuser --username $DJANGO_SUPERUSER_USERNAME --email $DJANGO_SUPERUSER_EMAIL --noinput || true
python manage.py runserver 0.0.0.0:8000