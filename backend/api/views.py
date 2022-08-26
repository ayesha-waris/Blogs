from rest_framework import generics

from .models import BlogsModel
from .serializers import BlogSerializer

# Create your views here.

class BlogCreateApiView(generics.CreateAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    def perform_create(self, serializer):
        serializer.save()


class BlogListApiView(generics.ListAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 


class BlogDetailApiView(generics.RetrieveAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    lookup_field = 'pk'

class BlogUpdateApiView(generics.UpdateAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    lookup_field = 'pk'

class BlogDeleteApiView(generics.DestroyAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    lookup_field = 'pk'