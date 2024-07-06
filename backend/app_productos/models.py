from django.db import models

class Producto(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.DateField()
    price = models.FloatField()
    description = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

    class Meta:
        db_table = 'producto'
        