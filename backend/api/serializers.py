from rest_framework import serializers

from .models import BlogsModel
from user.serializers import UserSerializer

class BlogSerializer(serializers.ModelSerializer):
    
    author = UserSerializer(source='User', read_only=True)
    # author = serializers.RelatedField(source='blogsModel', read_only=True)
    class Meta:
        model = BlogsModel
        fields = [
            'pk',
            'author',
            'title',
            'content',
        ]
    

    def get_author_data(self, obj):
        return {
            'author_username': obj.user.username
        }

    def create(self, validated_data):
  
        return BlogsModel.objects.create(**validated_data)


    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

class BlogFilterSerializer(serializers.Serializer):
    filterBy = serializers.CharField()
