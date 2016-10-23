from django.contrib import admin

# Register your models here.
from .models import Patient

class PatientAdmin(admin.ModelAdmin):
    list_display = ["__unicode__","location", "user", "first_name", "last_name", "total_calls", "response_time"]
    class Meta:
        model = Patient

admin.site.register(Patient, PatientAdmin) 

