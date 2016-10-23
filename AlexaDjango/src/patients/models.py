from __future__ import unicode_literals

from django.conf import settings
from django.core.urlresolvers import reverse
from django.db import models

class Patient(models.Model):
   
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='patient', on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=26)
    last_name = models.CharField(max_length=26)
    description = models.TextField(max_length=500) # bio 
    total_calls = models.IntegerField()
    response_time = models.DecimalField()


    def __str__(self): # py 3
        return self.user.get_username()

    def __unicode__(self): # py 2
        return self.user.get_username()

    def get_absolute_url(self):
        return reverse('profiles:detail', kwargs={'pk': self.pk})
        
