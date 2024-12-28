resource "azurerm_resource_group" "spotify_clone_group" {
  name     = "spotify-clone"
  location = "East US"
}

resource "azurerm_storage_account" "spotify_clone_storage" {
  name                     = "spotifyclonestorage"
  resource_group_name      = azurerm_resource_group.spotify_clone_group.name
  location                 = azurerm_resource_group.spotify_clone_group.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "music_songs" {
  name                  = "spotify"
  storage_account_id  = azurerm_storage_account.spotify_clone_storage.id
  container_access_type = "blob"
}