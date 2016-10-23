from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    '''
    API endpoint that allows users to be viewed/edited
    '''
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

