from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q


class BlogQuerySet(models.QuerySet):
    def is_public(self):
        return self.filter(public=True)

    def search1(self, query, user=None):
        lookup = Q(title__icontains=query) | Q(content__icontains=query)
        qs = self.is_public().filter(lookup)
        if user is not None:
            qs2 = self.filter(user=user).filter(lookup)
            qs = (qs | qs2).distinct()
        return qs


class BlogsManager(models.Manager):

    def get_queryset(self, *args, **kwargs):
        return BlogQuerySet(self.model, using=self._db)

    def search(self, query, user=None):
        return self.get_queryset().search1(query, user=user)

class BlogsModel(models.Model):

    author = models.ForeignKey(User, default=1, null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=200, unique=True)
    content = models.CharField(max_length=5000)
    objects = BlogsManager()