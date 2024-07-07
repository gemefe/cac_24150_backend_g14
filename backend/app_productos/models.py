from django.db import models

class Producto(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return self.name

    class Meta:
        db_table = 'producto'
        