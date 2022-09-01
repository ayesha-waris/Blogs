from django.contrib import admin

from .models import BlogsModel
from .serializers import BlogSerializer

# Register your models here.


class BlogsAdmin(admin.ModelAdmin):
    list_display = ("id", "author", "title", "content")


admin.site.register(BlogsModel, BlogsAdmin)