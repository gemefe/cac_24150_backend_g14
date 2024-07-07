from django.db import models

class Producto(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

    class Meta:
        db_table = 'producto'
        