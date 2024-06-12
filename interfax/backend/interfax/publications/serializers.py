from rest_framework import serializers
from .models import PublicationTab, Publication


class PublicationTabSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicationTab
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):
    tab = PublicationTabSerializer()
    image_url = serializers.SerializerMethodField('get_image_url')

    def get_image_url(self, obj):
        return self.context['request'].build_absolute_uri(obj.image)

    class Meta:
        model = Publication
        fields = '__all__'