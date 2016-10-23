from .models import Patient
from rest_framework import viewsets
from .serializers import PatientSerializer

class PatientViewSet(viewsets.ModelViewSet):
    '''
    API endpoint that allows users to be viewed/edited
    '''
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

