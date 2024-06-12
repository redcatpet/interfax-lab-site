from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import PublicationTab, Publication
from .serializers import PublicationTabSerializer, PublicationSerializer


class PublicationTabList(generics.ListCreateAPIView):
    queryset = PublicationTab.objects.all()
    serializer_class = PublicationTabSerializer


class PublicationTabDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PublicationTab.objects.all()
    serializer_class = PublicationTabSerializer


class PublicationList(generics.ListCreateAPIView):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer


class PublicationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer


class PublicationsByTabList(APIView):
    def get(self, request, tab_id):
        try:
            # Получаем список публикаций по заданной вкладке
            publications = Publication.objects.filter(tab_id=tab_id)
            # Сериализуем полученные публикации
            serializer = PublicationSerializer(publications, many=True, context={'request': request})
            # Возвращаем сериализованные данные в ответе
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            # Если возникает ошибка, возвращаем сообщение об ошибке
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)