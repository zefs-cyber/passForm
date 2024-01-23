from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from myapp.views import download_media

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:language>/', views.index, name='index'),
    path('admin/download_media/', download_media, name='myapp_download_media'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
