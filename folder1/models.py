from django.db import models

# Create your models here.
class Image(models.Model):
    img = models.ImageField()
    nome = models.CharField(max_length = 20)
    size = models.FloatField()

    def __str__(self):
        return self.nome