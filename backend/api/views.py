from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from django.db.models import Q

from .models import BlogsModel
from .serializers import BlogSerializer, BlogFilterSerializer

# Create your views here.

class BlogCreateApiView(generics.CreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class BlogListApiView(generics.ListAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self, *args, **kwargs):
        qs = super().get_queryset(*args, **kwargs)
        q = self.request.GET.get('q')
        results = BlogsModel.objects.all()
        if q is not None: 
            results = qs.search(q)
        return results


class FilteredListApiView(generics.ListAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self, *args, **kwargs):
        qs = super().get_queryset(*args, **kwargs)
        q = self.request.GET.get('q')
        results = BlogsModel.objects.none()
        if q is not None: 
          results = qs.search(q)
        return results

class UserBlogsApiView(generics.ListAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    permission_classes = [IsAuthenticated]

    def get_queryset(self,*args, **kwargs):
        qs = super().get_queryset(*args, **kwargs)
        user = self.request.user
           
        # user = self.request.user
        if not user.is_authenticated:
          return BlogsModel.objects.none()
        return qs.filter(author=user)


class BlogDetailApiView(generics.RetrieveAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    lookup_field = 'pk'
    permission_classes = [IsAuthenticatedOrReadOnly]

class BlogUpdateApiView(generics.UpdateAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    lookup_field = 'pk'
    permission_classes = [IsAuthenticated]

    def get_queryset(self,*args, **kwargs):
        qs = super().get_queryset(*args, **kwargs)
        user = self.request.user
        if not user.is_authenticated:
          return BlogsModel.objects.none()
        return qs.filter(author=user)

    def perform_update(self, serializer):
        instance = serializer.save()



class BlogDeleteApiView(generics.DestroyAPIView):
    queryset = BlogsModel.objects.all()
    serializer_class = BlogSerializer 
    lookup_field = 'pk'
    permission_classes = [IsAuthenticated]