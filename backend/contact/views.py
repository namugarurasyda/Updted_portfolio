from rest_framework.generics import ListAPIView
from rest_framework import permissions
from django.http import HttpResponse

def home_view(request):
    return HttpResponse("<h1>Welcome to the Syda Backend!</h1><p>The portfolio backend is here</p>")

from .models import Contact
from .serializers import ContactSerializer


class ContactListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Contact.objects.all()
  serializer_class = ContactSerializer
  pagination_class = None
