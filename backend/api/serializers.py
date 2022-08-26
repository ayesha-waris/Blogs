
from email.policy import default
from rest_framework import serializers


from .models import BlogsModel



class BlogSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = BlogsModel
        fields = [
            
            'title',
            'content',
        ]
    

    def create(self, validated_data):
  
        return BlogsModel.objects.create(**validated_data)


    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

