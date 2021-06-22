from django.urls import path
from .views import form_producto, index,tienda,preventa

urlpatterns=[
    path('', index, name='index'),
    path('tienda/', tienda, name='tienda'),
    path('preventa/', preventa, name='preventa'),
    path('form_producto',form_producto,name="form_producto"),
]