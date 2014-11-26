from django.conf.urls import patterns, url
	
urlpatterns = patterns('catalogos_detalle.views',
	# url(r'^catalogos_detalle/(?P<pk>[0-9]+)/$', 'request_response_list'),
       url(r'^catalogos_detalle/(?P<id_catalogo>[\w\-]+)/','request_response_list', name='catalogo_detalle_view'),
       url(r'^catalogos_detalle','request_response_nuevo', name='catalogo_detalle_nuevo'),
 #url(r'^request_response/(?P<pk>[0-9]+)/$', 'request_response_detail'),
	)