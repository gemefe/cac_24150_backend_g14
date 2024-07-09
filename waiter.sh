#!/bin/bash

# Esperar a que MySQL esté listo

# until docker-compose logs mysql | grep "mysqld: ready for connections"; do
#     echo -n .
#     sleep 1
# done

# echo "MySQL is ready!"

# sleep 10

until docker-compose logs mysql | grep "*mysqld: ready for connections*"; do 
# until nc -zv localhost 3306; do
# until ps aux | grep mysqld | grep -v grep; do
    echo -n .
    sleep 1
done

sleep 10

echo "MySQL is ready!"