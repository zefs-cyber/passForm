from django.shortcuts import render
import os
import zipfile
from io import BytesIO
from django.http import FileResponse
import pandas as pd


def delete_all_rows_except_header():

    file_paths = [
        'myproject\\myapp\\media\\form_data.xlsx',
        'myproject\\myapp\\media\\student_data.xlsx'
    ]

    for file_path in file_paths:
        try:
            # Load the Excel file into a DataFrame
            df = pd.read_excel(file_path, header=0)

            # Keep only the header row
            df = pd.DataFrame(columns=df.columns)

            # Save the modified DataFrame back to the Excel file
            df.to_excel(file_path, index=False)

            print(f"All rows except header deleted in {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")


def download_media(request):
    # Define the base directory for media files
    media_base_dir = 'myapp/media'

    # Create a BytesIO buffer to store the zip file
    zip_buffer = BytesIO()

    # Create a ZipFile object
    with zipfile.ZipFile(zip_buffer, 'w') as zip_file:
        # Iterate through all files in the media directory and add them to the zip file
        for root, dirs, files in os.walk(media_base_dir):
            for file in files:
                file_path = os.path.join(root, file)
                # Specify the arcname to remove the initial path from the zip file
                zip_file.write(file_path, arcname=os.path.relpath(file_path, media_base_dir))

    # Seek to the beginning of the buffer
    zip_buffer.seek(0)

    # Create a FileResponse and return it for download
    response = FileResponse(zip_buffer, content_type='application/zip')
    response['Content-Disposition'] = 'attachment; filename=media_files.zip'
    delete_all_rows_except_header()
    return response


