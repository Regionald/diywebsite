from django.shortcuts import render
# Create your views here.

# Create your views here.
#@descript login/landing page
#@ GET /
def landing(request):
    print(request)
    return render(request,'logistic/home.html')
