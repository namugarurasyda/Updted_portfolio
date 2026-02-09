from django.shortcuts import render

from rest_framework.generics import ListAPIView
from .models import Skill
from .serializers import SkillSerializer
from rest_framework import permissions  



class SkillListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    pagination_class = None