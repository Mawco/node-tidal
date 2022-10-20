[node-tidal](../README.md) / [api/albums](../modules/api_albums.md) / Albums

# Class: Albums

[api/albums](../modules/api_albums.md).Albums

## Table of contents

### Constructors

- [constructor](api_albums.Albums.md#constructor)

### Properties

- [client](api_albums.Albums.md#client)

### Methods

- [getAlbum](api_albums.Albums.md#getalbum)
- [getAlbumCredits](api_albums.Albums.md#getalbumcredits)
- [getAlbumTracks](api_albums.Albums.md#getalbumtracks)
- [getAlbumTracksWithCredits](api_albums.Albums.md#getalbumtrackswithcredits)
- [getFeaturedAlbums](api_albums.Albums.md#getfeaturedalbums)
- [getNewAlbums](api_albums.Albums.md#getnewalbums)
- [getStaffPickAlbums](api_albums.Albums.md#getstaffpickalbums)
- [getTopAlbums](api_albums.Albums.md#gettopalbums)

## Constructors

### constructor

• **new Albums**(`tidal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tidal` | [`Tidal`](index.Tidal.md) |

#### Defined in

[api/albums.ts:8](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L8)

## Properties

### client

• `Private` **client**: [`Tidal`](index.Tidal.md)

#### Defined in

[api/albums.ts:6](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L6)

## Methods

### getAlbum

▸ **getAlbum**(`albumId`): `Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)\>

It gets the album information from the Tidal API.

**`Fulfil`**

- an album object

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `albumId` | `number` | The ID of the album you want to get. |

#### Returns

`Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)\>

#### Defined in

[api/albums.ts:19](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L19)

___

### getAlbumCredits

▸ **getAlbumCredits**(`albumId`): `Promise`<[`AlbumCredits`](../interfaces/types_api_AlbumTypes.AlbumCredits.md)[]\>

It gets the album credits from the Tidal API.

**`Fulfil`**

- an album credits object

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `albumId` | `number` | The ID of the album you want to get. |

#### Returns

`Promise`<[`AlbumCredits`](../interfaces/types_api_AlbumTypes.AlbumCredits.md)[]\>

#### Defined in

[api/albums.ts:31](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L31)

___

### getAlbumTracks

▸ **getAlbumTracks**(`albumId`): `Promise`<[`Track`](../interfaces/types_api_TrackTypes.Track.md)[]\>

It gets the tracks of a album from the Tidal API

**`Fulfil`**

- an array of track objects

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `albumId` | `number` | The ID of the album you want to get the tracks for. |

#### Returns

`Promise`<[`Track`](../interfaces/types_api_TrackTypes.Track.md)[]\>

#### Defined in

[api/albums.ts:43](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L43)

___

### getAlbumTracksWithCredits

▸ **getAlbumTracksWithCredits**(`albumId`): `Promise`<[`AlbumTracksWithCredits`](../interfaces/types_api_AlbumTypes.AlbumTracksWithCredits.md)[]\>

It gets the tracks & the credits of a albums from the Tidal API

**`Fulfil`**

- an album object

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `albumId` | `number` | The ID of the album you want to get the tracks for. |

#### Returns

`Promise`<[`AlbumTracksWithCredits`](../interfaces/types_api_AlbumTypes.AlbumTracksWithCredits.md)[]\>

#### Defined in

[api/albums.ts:55](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L55)

___

### getFeaturedAlbums

▸ **getFeaturedAlbums**(): `Promise`<{ `newAlbums`: [`Album`](../interfaces/types_api_AlbumTypes.Album.md)[] ; `staffPicks`: [`Album`](../interfaces/types_api_AlbumTypes.Album.md)[] ; `topAlbums`: [`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]  }\>

It gets featured albums on Tidal from the Tidal API

**`Fulfil`**

- an array of album objects

**`Reject`**

- The error as returned by Tidal.

#### Returns

`Promise`<{ `newAlbums`: [`Album`](../interfaces/types_api_AlbumTypes.Album.md)[] ; `staffPicks`: [`Album`](../interfaces/types_api_AlbumTypes.Album.md)[] ; `topAlbums`: [`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]  }\>

#### Defined in

[api/albums.ts:66](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L66)

___

### getNewAlbums

▸ **getNewAlbums**(): `Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]\>

It gets new albums on Tidal from the Tidal API

**`Fulfil`**

- an array of album objects

**`Reject`**

- The error as returned by Tidal.

#### Returns

`Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]\>

#### Defined in

[api/albums.ts:96](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L96)

___

### getStaffPickAlbums

▸ **getStaffPickAlbums**(): `Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]\>

It gets staff pick albums on Tidal from the Tidal API

**`Fulfil`**

- an array of album objects

**`Reject`**

- The error as returned by Tidal.

#### Returns

`Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]\>

#### Defined in

[api/albums.ts:107](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L107)

___

### getTopAlbums

▸ **getTopAlbums**(): `Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]\>

It gets the top 20 albums on Tidal from the Tidal API

**`Fulfil`**

- an array of album objects

**`Reject`**

- The error as returned by Tidal.

#### Returns

`Promise`<[`Album`](../interfaces/types_api_AlbumTypes.Album.md)[]\>

#### Defined in

[api/albums.ts:85](https://github.com/Mawco/node-tidal/blob/c586890/src/api/albums.ts#L85)
