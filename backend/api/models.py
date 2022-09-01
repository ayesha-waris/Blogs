from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class BlogsModel(models.Model):

    
    title = models.CharField(max_length=200, unique=True)
    content = models.CharField(max_length=5000)