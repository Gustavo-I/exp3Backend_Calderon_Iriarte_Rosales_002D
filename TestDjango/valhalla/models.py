from typing import ClassVar
from django.db import models

# Create your models here.

class Categoria(models.Model):
    idCategoria=models.IntegerField(primary_key=True,verbose_name='id de Categoria')
    nombreCategoria=models.CharField(max_length=50,verbose_name='nombre de la categoria')

    def __str__(self) :
        return (self.nombreCategoria)

class Producto(models.Model):
    numeroSerie=models.CharField(max_length=20, primary_key=True,verbose_name='numeroSerie')
    marca=models.CharField(max_length=20,verbose_name='Marca')
    modelo=models.CharField(max_length=20,verbose_name='Modelo')
    categoria=models.ForeignKey(Categoria,on_delete=models.CASCADE)

    def __str__(self) :
        return (self.numeroSerie)
