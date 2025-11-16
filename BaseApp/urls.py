from django.urls import path
from BaseApp import views
from django_distill import distill_path


def get_none():
    return None

urlpatterns = [
    # path('', views.index, name='index'),
    distill_path('', views.index, name='index', distill_func=get_none),
]