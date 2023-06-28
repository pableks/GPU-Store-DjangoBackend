from django.db import models
from django.core.validators import MaxValueValidator

class Product(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    description = models.TextField(blank=True)
    price = models.IntegerField(validators=[MaxValueValidator(99999999999999)])
    stock = models.BooleanField(default=False)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name
