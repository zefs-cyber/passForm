# myapp/forms.py
from django import forms
from .models import FormData

class UserFill(forms.ModelForm):
    class Meta:
        model = FormData
        fields = '__all__'
