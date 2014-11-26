from rest_framework import serializers
from .models import Catalogo

class CatalogoSerializer(serializers.ModelSerializer):
		#iconos = serializers.Field('icono.url')
		catalogos_detalle = serializers.RelatedField(many=True)
		class Meta:
			model = Catalogo
			
			fields = ('id', 'nombre', 'icono','url_icono','catalogos_detalle')