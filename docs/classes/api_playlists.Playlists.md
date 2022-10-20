[node-tidal](../README.md) / [api/playlists](../modules/api_playlists.md) / Playlists

# Class: Playlists

[api/playlists](../modules/api_playlists.md).Playlists

## Table of contents

### Constructors

- [constructor](api_playlists.Playlists.md#constructor)

### Properties

- [client](api_playlists.Playlists.md#client)

### Methods

- [addTrackToPlaylist](api_playlists.Playlists.md#addtracktoplaylist)
- [createPlaylist](api_playlists.Playlists.md#createplaylist)
- [deleteFolder](api_playlists.Playlists.md#deletefolder)
- [deletePlaylist](api_playlists.Playlists.md#deleteplaylist)
- [deleteTrackFromPlaylist](api_playlists.Playlists.md#deletetrackfromplaylist)
- [getPlaylist](api_playlists.Playlists.md#getplaylist)
- [getPlaylistFolders](api_playlists.Playlists.md#getplaylistfolders)
- [getPlaylistImage](api_playlists.Playlists.md#getplaylistimage)
- [getPlaylistTracks](api_playlists.Playlists.md#getplaylisttracks)

## Constructors

### constructor

• **new Playlists**(`tidal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tidal` | [`Tidal`](index.Tidal.md) |

#### Defined in

[api/playlists.ts:16](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L16)

## Properties

### client

• `Private` **client**: [`Tidal`](index.Tidal.md)

#### Defined in

[api/playlists.ts:14](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L14)

## Methods

### addTrackToPlaylist

▸ **addTrackToPlaylist**(`playlistId`, `trackIds`, `onDupes?`): `Promise`<`any`\>

It adds a song to a playlist.

**`Fulfil`**

- The status of the operation.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `playlistId` | `string` | `undefined` | The id of the playlist you want to add the song to. |
| `trackIds` | `any` | `undefined` | The ID of the track you want to add to the playlist. |
| `onDupes?` | [`OnDupes`](../modules/types_TidalTypes.md#ondupes) | `'FAIL'` | This is the action to take if the song is already in the playlist. |

#### Returns

`Promise`<`any`\>

- A promise that resolves to the added song.

#### Defined in

[api/playlists.ts:181](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L181)

___

### createPlaylist

▸ **createPlaylist**(`name`, `description?`): `Promise`<`any`\>

It creates a playlist in the root folder of the user's collection

**`Fulfil`**

- The playlist information.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the playlist |
| `description?` | `string` | The description of the playlist |

#### Returns

`Promise`<`any`\>

- A promise that resolves to the created playlist information.

#### Defined in

[api/playlists.ts:116](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L116)

___

### deleteFolder

▸ **deleteFolder**(`folderId`): `Promise`<{ `folderId`: `string` ; `status`: `string` = 'Success' }\>

It takes a folderId as a parameter, and returns a Deleted object with a status of 'Success' or
'Failed' and the folderId.

**`Fulfil`**

- The status of the operation.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `folderId` | `string` | The id of the folder you want to delete |

#### Returns

`Promise`<{ `folderId`: `string` ; `status`: `string` = 'Success' }\>

- A promise that resolves to the deleted folder.

#### Defined in

[api/playlists.ts:158](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L158)

___

### deletePlaylist

▸ **deletePlaylist**(`playlistId`): `Promise`<{ `playlist`: [`Playlist`](../interfaces/types_api_PlaylistTypes.Playlist.md) ; `playlistId`: `string` ; `status`: `string` = 'Success' }\>

It deletes a playlist from the user's account.

**`Fulfil`**

- The status of the operation.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlistId` | `string` | The id of the playlist you want to delete |

#### Returns

`Promise`<{ `playlist`: [`Playlist`](../interfaces/types_api_PlaylistTypes.Playlist.md) ; `playlistId`: `string` ; `status`: `string` = 'Success' }\>

- A promise that resolves to the deleted playlists information.

#### Defined in

[api/playlists.ts:136](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L136)

___

### deleteTrackFromPlaylist

▸ **deleteTrackFromPlaylist**(`playlistId`, `index`, `order?`, `orderDirection?`): `Promise`<{ `index`: `number` ; `playlistId`: `string` ; `song`: [`Track`](../interfaces/types_api_TrackTypes.Track.md) ; `status`: `string` = 'Success' } \| { `index`: `number` ; `playlistId`: `string` ; `song`: `undefined` ; `status`: `string` = 'Failed' }\>

It deletes a song from a playlist

**`Fulfil`**

- The status of the operation.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `playlistId` | `string` | `undefined` | The id of the playlist you want to delete a song from |
| `index` | `number` | `undefined` | The index of the song you want to delete |
| `order?` | [`OrderTypes`](../modules/types_TidalTypes.md#ordertypes) | `'INDEX'` | OrderTypes = 'INDEX' |
| `orderDirection?` | [`OrderDirections`](../modules/types_TidalTypes.md#orderdirections) | `'ASC'` | OrderDirections = 'ASC' |

#### Returns

`Promise`<{ `index`: `number` ; `playlistId`: `string` ; `song`: [`Track`](../interfaces/types_api_TrackTypes.Track.md) ; `status`: `string` = 'Success' } \| { `index`: `number` ; `playlistId`: `string` ; `song`: `undefined` ; `status`: `string` = 'Failed' }\>

- A promise that resolves to the deleted song.

#### Defined in

[api/playlists.ts:206](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L206)

___

### getPlaylist

▸ **getPlaylist**(`playlistId`): `Promise`<[`Playlist`](../interfaces/types_api_PlaylistTypes.Playlist.md)\>

It gets the playlist information from the Tidal API.

**`Fulfil`**

- The playlist information.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlistId` | `string` | The ID of the playlist you want to get the information of. |

#### Returns

`Promise`<[`Playlist`](../interfaces/types_api_PlaylistTypes.Playlist.md)\>

- A promise that resolves to the playlist information.

#### Defined in

[api/playlists.ts:27](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L27)

___

### getPlaylistFolders

▸ **getPlaylistFolders**(`folderId?`, `includeOnly?`, `offset?`, `limit?`, `order?`, `orderDirection?`): `Promise`<[`PlaylistFolders`](../interfaces/types_api_PlaylistTypes.PlaylistFolders.md)[]\>

It gets all the plalist folders and root playlists from the user's account.

**`Fulfil`**

- The playlist folders and root playlists.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `folderId?` | `string` | `'root'` | The id of the folder you want to get the playlists from. |
| `includeOnly?` | `string` | `''` | - |
| `offset?` | `number` | `0` | The offset of the first song to return. |
| `limit?` | `number` | `50` | The number of results to return. |
| `order?` | [`OrderTypes`](../modules/types_TidalTypes.md#ordertypes) | `'DATE'` | OrderTypes = 'DATE', |
| `orderDirection?` | [`OrderDirections`](../modules/types_TidalTypes.md#orderdirections) | `'DESC'` | OrderDirections = 'DESC', |

#### Returns

`Promise`<[`PlaylistFolders`](../interfaces/types_api_PlaylistTypes.PlaylistFolders.md)[]\>

- A promise that resolves to the playlist folders information.

#### Defined in

[api/playlists.ts:73](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L73)

___

### getPlaylistImage

▸ **getPlaylistImage**(`squareImage`, `resolution?`): `string`

It gets the image url of a playlist by a given playlist.data.squareImage

**`Fulfil`**

- The image url of the playlist.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `squareImage` | `string` | `undefined` | The squareImage of the playlist |
| `resolution?` | [`ImageResolutionEnum`](../enums/types_TidalTypes.ImageResolutionEnum.md) | `ImageResolutionEnum.Medium` | The resolution of the image |

#### Returns

`string`

- The image url of the playlist.

#### Defined in

[api/playlists.ts:103](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L103)

___

### getPlaylistTracks

▸ **getPlaylistTracks**(`playlistId`, `limit?`, `offset?`, `order?`, `orderDirection?`): `Promise`<[`PlaylistTracks`](../interfaces/types_api_PlaylistTypes.PlaylistTracks.md)[]\>

It gets the songs from a playlist.

**`Fulfil`**

- The songs from the playlist.

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `playlistId` | `string` | `undefined` | The id of the playlist you want to get the songs from. |
| `limit?` | `number` | `50` | The number of results to return. |
| `offset?` | `number` | `0` | The offset of the first song to return. |
| `order?` | [`OrderTypes`](../modules/types_TidalTypes.md#ordertypes) | `'DATE'` | OrderTypes = 'DATE', |
| `orderDirection?` | [`OrderDirections`](../modules/types_TidalTypes.md#orderdirections) | `'ASC'` | OrderDirections = 'ASC', |

#### Returns

`Promise`<[`PlaylistTracks`](../interfaces/types_api_PlaylistTypes.PlaylistTracks.md)[]\>

- A promise that resolves to the playlist tracks information.

#### Defined in

[api/playlists.ts:43](https://github.com/Mawco/node-tidal/blob/7587986/src/api/playlists.ts#L43)
