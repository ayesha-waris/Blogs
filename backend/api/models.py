from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q


class BlogQuerySet(models.QuerySet):

    def search(self, query, user=None):
        lookup = Q(title=query) | Q(author__username=query)
        qs = self.filter(lookup)
        return qs


class BlogsManager(models.Manager):

    def get_queryset(self, *args, **kwargs):
        return BlogQuerySet(self.model, using=self._db)

    def search(self, query, user=None):
        print(query)
        return self.get_queryset().search(query, user=user)

class BlogsModel(models.Model):

    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=200, unique=True)
    content = models.CharField(max_length=5000)
    objects = BlogsManager()


    def __str__(self):
        return f'{self.author}'