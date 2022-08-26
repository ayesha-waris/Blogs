from django.urls import path

from . import views


urlpatterns = [
    path('blogs', views.BlogListApiView.as_view(), name = 'blog-list'),
    # path('detail/<str:pk>', views.ProductUpdateAPIView.as_view()),
    # path('edit/<str:pk>', views.ProductDeleteAPIView.as_view()),
    # path('delete/<str:pk>', views.ProductListCreateAPIView.as_view()),

]
