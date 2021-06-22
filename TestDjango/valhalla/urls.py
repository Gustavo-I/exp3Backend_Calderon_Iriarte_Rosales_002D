from django.urls import path
from . import views

urlpatterns=[
    path('', views.index, name='index'),
    path('tienda/', views.tienda, name='tienda'),
    path('preventa/', views.preventa, name='preventa'),
]