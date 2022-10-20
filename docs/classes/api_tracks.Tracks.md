[node-tidal](../README.md) / [api/tracks](../modules/api_tracks.md) / Tracks

# Class: Tracks

[api/tracks](../modules/api_tracks.md).Tracks

## Table of contents

### Constructors

- [constructor](api_tracks.Tracks.md#constructor)

### Properties

- [client](api_tracks.Tracks.md#client)

### Methods

- [getTrack](api_tracks.Tracks.md#gettrack)
- [getTrackContributors](api_tracks.Tracks.md#gettrackcontributors)

## Constructors

### constructor

• **new Tracks**(`tidal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tidal` | [`Tidal`](index.Tidal.md) |

#### Defined in

[api/tracks.ts:8](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/api/tracks.ts#L8)

## Properties

### client

• `Private` **client**: [`Tidal`](index.Tidal.md)

#### Defined in

[api/tracks.ts:6](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/api/tracks.ts#L6)

## Methods

### getTrack

▸ **getTrack**(`trackId`): `Promise`<[`Track`](../interfaces/types_api_TrackTypes.Track.md)\>

It gets the track information from the Tidal API.

**`Fulfil`**

- a track object

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trackId` | `number` | The ID of the track you want to get. |

#### Returns

`Promise`<[`Track`](../interfaces/types_api_TrackTypes.Track.md)\>

.

#### Defined in

[api/tracks.ts:19](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/api/tracks.ts#L19)

___

### getTrackContributors

▸ **getTrackContributors**(`trackId`): `Promise`<[`Contributor`](../interfaces/types_api_AlbumTypes.Contributor.md)[]\>

It gets the contributors of a track from the Tidal API.

**`Fulfil`**

- an array of contributor objects

**`Reject`**

- The error as returned by Tidal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trackId` | `number` | The ID of the track you want to get. |

#### Returns

`Promise`<[`Contributor`](../interfaces/types_api_AlbumTypes.Contributor.md)[]\>

.

#### Defined in

[api/tracks.ts:31](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/api/tracks.ts#L31)
