from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    price = models.FloatField()
    in_stock = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self) -> str:
        return self.title