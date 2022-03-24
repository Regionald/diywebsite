from django.urls import path

from logistic import views

urlpatterns =[
    path('',views.landing,name='landing'),
]