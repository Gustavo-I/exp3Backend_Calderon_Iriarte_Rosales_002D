from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
def tienda(request):
    return render(request, 'tienda.html')
def preventa(request):
    return render(request,'preventa.html')