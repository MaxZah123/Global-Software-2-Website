from django.shortcuts import render
from django.http import HttpResponse
from django.utils.translation import ugettext_lazy as _
def index(request):
# This method uses the page request to determine which page to return
    # create context
    context = {}
    pagereq=str(request.path)
    return render(request,'index.html',context)


def text(request):
	context = {}
	pagereq=str(request.path)
	return render(request,'text.html',context)

def contact(request):
		context = {}
		pagereq=str(request.path)
		return render(request,'contact.html',context)