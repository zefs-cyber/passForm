from django.contrib import admin
from django.http import HttpResponse
from .utils import zip_media_folder
from .views import download_media
from .models import FormData
from django.contrib import admin
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.urls import path 

@admin.register(FormData)
class FormDataAdmin(admin.ModelAdmin):
    actions = ['download_media']
    def download_media_view(self, request, queryset, media):
        # Assume 'myapp_download_media' is a unique identifier for this view
        return HttpResponseRedirect(reverse('myapp_download_media'))

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('download_media/', self.admin_site.admin_view(self.download_media_view), name='myapp_download_media'),
        ]
        return custom_urls + urls

    def get_actions(self, request):
        actions = super().get_actions(request)
        custom_actions = {
            'download_media': (
                self.download_media_view,
                'download_media',  # Short description
                'Download selected media files',  # Long description
            ),
        }
        actions.update(custom_actions)
        return actions
    


