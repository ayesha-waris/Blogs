from rest_framework import serializers

from .models import BlogsModel
from user.serializers import UserSerializer

class BlogSerializer(serializers.ModelSerializer):
    
    author = UserSerializer(source='user', read_only=True)
    class Meta:
        model = BlogsModel
        fields = [
            'pk',
            'author',
            'title',
            'content',
        ]
    

    def get_user_data(self, obj):
        return {
            'username': obj.user.username
        }

    def create(self, validated_data):
  
        return BlogsModel.objects.create(**validated_data)


    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

class BlogFilterSerializer(serializers.Serializer):
    filterBy = serializers.CharField()
