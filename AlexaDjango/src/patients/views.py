from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import DetailView
from .models import Patient
from .forms import PatientForm



#might not need profile create view
class PatientCreateView(LoginRequiredMixin, CreateView):
    model = Patient
    form_class = PatientForm

    def dispatch(self, request, *args, **kwargs):
        if request.user.patient:
            return redirect('patients:update', pk=request.user.pk)
        return super(PatientCreateView, self).dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ProfileCreateView, self).form_valid(form)

class PatientDetailView(LoginRequiredMixin, DetailView):
    model = Patient

class PatientUpdateView(LoginRequiredMixin, UpdateView):
    model = Patient
    form_class = PatientForm

class PatientDestroyView(LoginRequiredMixin, DeleteView):
    model = Patient

