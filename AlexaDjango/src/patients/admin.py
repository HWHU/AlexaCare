from django.contrib import admin

# Register your models here.
from .models import Patient

class PatientAdmin(admin.ModelAdmin):
    list_display = ["__unicode__","location", "user"]
    class Meta:
        model = Patient

admin.site.register(Patient, PatientAdmin) 