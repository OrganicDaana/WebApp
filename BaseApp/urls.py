from django.urls import path
from BaseApp import views


urlpatterns = [
    path('', views.index, name='index'),
]