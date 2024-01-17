import os
import shutil
from django.conf import settings

def zip_media_folder(zip_filename='media_files.zip'):
    media_root = settings.MEDIA_ROOT
    zip_path = os.path.join(media_root, zip_filename)

    with shutil.ZipFile(zip_path, 'w') as zip_file:
        for root, _, files in os.walk(media_root):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, media_root)
                zip_file.write(file_path, arcname=arcname)

    return zip_path