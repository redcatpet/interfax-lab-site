from django.urls import path
from .views import PublicationTabList, PublicationTabDetail, PublicationList, PublicationDetail, PublicationsByTabList


urlpatterns = [
    path('tabs/', PublicationTabList.as_view(), name='publication-tab-list'),
    path('tabs/<int:pk>/', PublicationTabDetail.as_view(), name='publication-tab-detail'),
    path('publications/', PublicationList.as_view(), name='publication-list'),
    path('publications/<int:pk>/', PublicationDetail.as_view(), name='publication-detail'),
    path('publications/by_tab/<int:tab_id>/', PublicationsByTabList.as_view(), name='publications-by-tab')
]