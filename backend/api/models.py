from django.db import models

# Create your models here.

class BlogsModel(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200, unique=True)
    content = models.CharField(max_length=5000)