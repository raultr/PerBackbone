from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.parsers import FileUploadParser
from .serializers import CatalogoSerializer
from .models import Catalogo
	
	
	
@api_view(['GET', 'POST'])
def request_response_list(request):
	if request.method == 'GET':
		catalogos = Catalogo.objects.all()
		#import ipdb; ipdb.set_trace()
		serializer = CatalogoSerializer(catalogos, many=True)
		return Response(serializer.data)
	
	elif request.method == 'POST':
		#import ipdb; ipdb.set_trace()
		#parser_classes = (FileUploadParser,)
		#file_obj = request.FILES['icono']
		serializer = CatalogoSerializer(data=request.DATA)
		#import ipdb; ipdb.set_trace()
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)