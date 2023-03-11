from django.shortcuts import render
from .models import Image

# Create your views here.
def folder1(request):
    imgs = Image.objects.all() 
    return render(request, 'folder1/know.html', {'imgs': imgs})