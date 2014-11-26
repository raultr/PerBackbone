from django.conf.urls import patterns, url
	
urlpatterns = patterns('catalogos.views',
	 url(r'^catalogos/$', 'request_response_list'),
     #url(r'^request_response/(?P<pk>[0-9]+)/$', 'request_response_detail'),
	)