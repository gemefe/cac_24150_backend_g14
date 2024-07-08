#!/usr/bin/sh

set -e

python manage.py makemigrations
python manage.py migrate

python manage.py loaddata productos.json

python manage.py runserver 0.0.0.0:8000