# from rest_framework import serializers
# from .models import Project, Tag


# class TagSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Tag
#     fields = ('name',)


# class ProjectSerializer(serializers.ModelSerializer):
#   tags = TagSerializer(many=True)

#   class Meta:
#     model = Project
#     fields = ('name', 'description', 'link', 'image', 'tags')


from rest_framework import serializers
from .models import Project, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)

class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        # Added 'id' and 'category'
        fields = ('id', 'name', 'category', 'description', 'link', 'image', 'tags')