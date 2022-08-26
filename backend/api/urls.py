from django.urls import path

from . import views


urlpatterns = [
    path('blogs/', views.BlogListApiView.as_view(), name = 'blog-list'),
    path('create-blog/', views.BlogCreateApiView.as_view(), name = 'blog-create'),
    path('detail/<str:pk>/', views.BlogDetailApiView.as_view(), name="blog-detail"),
    path('edit/<str:pk>/', views.BlogUpdateApiView.as_view(), name='blog-edit'),
    path('delete/<str:pk>/', views.BlogDeleteApiView.as_view(), name='blog-delete'),

]
