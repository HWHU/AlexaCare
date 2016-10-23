from .models import Patient
from rest_framework import serializers

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ('user', 'first_name', 'last_name', 'description', 'total_calls', 'response_time', 'location', 'picture_link')

