from django.urls import path

from medic import views

urlpatterns =[
    path('',views.landing,name='landing'),
]