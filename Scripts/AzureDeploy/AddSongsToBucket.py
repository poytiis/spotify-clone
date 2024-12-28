from azure.storage.blob import BlobServiceClient
import os
from dotenv import load_dotenv
from azure.identity import DefaultAzureCredential
from azure.mgmt.storage import StorageManagementClient

load_dotenv()

subscription_id = os.getenv('SUBSCRIPTION_ID')
resource_group_name = os.getenv('RESOURCE_GROUP')
storage_account_name = os.getenv('STORAGE_ACCOUNT_NAME')
container_name = os.getenv('CONTAINER_NAME')
songs_local_path = os.getenv('SONGS_LOCAL_PATH')

credential = DefaultAzureCredential()
storage_client = StorageManagementClient(credential, subscription_id)
keys = storage_client.storage_accounts.list_keys(resource_group_name, storage_account_name)
key = keys.keys[0].value

connection_string = f"DefaultEndpointsProtocol=https;AccountName={storage_account_name};AccountKey={key};EndpointSuffix=core.windows.net"
blob_service_client = BlobServiceClient.from_connection_string(connection_string)

def upload_files_to_blob(local_directory):
    try:
        for root, dirs, files in os.walk(local_directory):
            for file in files:
                file_path = os.path.join(root, file)
                blob_path = os.path.relpath(file_path, local_directory).replace('\\', '/')

                blob_client = blob_service_client.get_blob_client(container=container_name, blob=blob_path)
                
                with open(file_path, "rb") as data:
                    blob_client.upload_blob(data, overwrite=True)
                print(f"Uploaded: {blob_path}")
    except Exception as e:
        print(f"File upload failed: {e}")

if __name__ == "__main__":
    upload_files_to_blob(songs_local_path)
    print('files uploaded')
