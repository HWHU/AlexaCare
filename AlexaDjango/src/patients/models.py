from __future__ import unicode_literals

from django.conf import settings
from django.core.urlresolvers import reverse
from django.db import models

class Patient(models.Model):
   
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='patient', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=26)
    last_name = models.CharField(max_length=26)
    description = models.TextField(max_length=500) # bio 
    total_calls = models.IntegerField()
    response_time = models.DecimalField(max_digits=10, decimal_places=1)
    location = models.CharField(max_length=26)
    picture_link = models.URLField(max_length=254)


    def __str__(self): # py 3
        return self.user.get_username()

    def __unicode__(self): # py 2
        return self.user.get_username()

    def get_absolute_url(self):
        return reverse('patient:detail', kwargs={'pk': self.pk})
        
