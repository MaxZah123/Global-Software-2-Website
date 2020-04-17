from django.urls import path

from websiteapp.views import *

app_name = 'website'
urlpatterns = [
    path('', index, name='home'),
    path('index', index, name='index'),
    path('Join', contact, name='Join'),
    path('Events', text, name='Events'),
	path('HowToMake', text, name='HowToMake'),
	path('Overview', text, name='Overview'),
    path('testlang', testlang, name='testlang'),
]

