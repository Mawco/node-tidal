[node-tidal](../README.md) / [types/api/TrackTypes](../modules/types_api_TrackTypes.md) / Track

# Interface: Track

[types/api/TrackTypes](../modules/types_api_TrackTypes.md).Track

## Table of contents

### Properties

- [album](types_api_TrackTypes.Track.md#album)
- [allowStreaming](types_api_TrackTypes.Track.md#allowstreaming)
- [artist](types_api_TrackTypes.Track.md#artist)
- [artists](types_api_TrackTypes.Track.md#artists)
- [audioModes](types_api_TrackTypes.Track.md#audiomodes)
- [audioQuality](types_api_TrackTypes.Track.md#audioquality)
- [copyright](types_api_TrackTypes.Track.md#copyright)
- [dateAdded](types_api_TrackTypes.Track.md#dateadded)
- [duration](types_api_TrackTypes.Track.md#duration)
- [editable](types_api_TrackTypes.Track.md#editable)
- [explicit](types_api_TrackTypes.Track.md#explicit)
- [id](types_api_TrackTypes.Track.md#id)
- [index](types_api_TrackTypes.Track.md#index)
- [isrc](types_api_TrackTypes.Track.md#isrc)
- [itemUuid](types_api_TrackTypes.Track.md#itemuuid)
- [mixes](types_api_TrackTypes.Track.md#mixes)
- [peak](types_api_TrackTypes.Track.md#peak)
- [popularity](types_api_TrackTypes.Track.md#popularity)
- [premiumStreamingOnly](types_api_TrackTypes.Track.md#premiumstreamingonly)
- [replayGain](types_api_TrackTypes.Track.md#replaygain)
- [streamReady](types_api_TrackTypes.Track.md#streamready)
- [streamStartDate](types_api_TrackTypes.Track.md#streamstartdate)
- [title](types_api_TrackTypes.Track.md#title)
- [trackNumber](types_api_TrackTypes.Track.md#tracknumber)
- [url](types_api_TrackTypes.Track.md#url)
- [version](types_api_TrackTypes.Track.md#version)
- [volumeNumber](types_api_TrackTypes.Track.md#volumenumber)

## Properties

### album

• **album**: [`TrackAlbum`](types_api_TrackTypes.TrackAlbum.md)

#### Defined in

[types/api/TrackTypes.ts:26](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L26)

___

### allowStreaming

• **allowStreaming**: `boolean`

#### Defined in

[types/api/TrackTypes.ts:9](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L9)

___

### artist

• **artist**: [`TrackArtist`](types_api_TrackTypes.TrackArtist.md)

#### Defined in

[types/api/TrackTypes.ts:24](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L24)

___

### artists

• **artists**: [`TrackArtist`](types_api_TrackTypes.TrackArtist.md)[]

#### Defined in

[types/api/TrackTypes.ts:25](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L25)

___

### audioModes

• **audioModes**: `string`[]

#### Defined in

[types/api/TrackTypes.ts:23](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L23)

___

### audioQuality

• **audioQuality**: [`audioQuality`](../modules/types_TidalTypes.md#audioquality)

#### Defined in

[types/api/TrackTypes.ts:22](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L22)

___

### copyright

• **copyright**: `string`

#### Defined in

[types/api/TrackTypes.ts:17](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L17)

___

### dateAdded

• `Optional` **dateAdded**: `number` \| `Date`

#### Defined in

[types/api/TrackTypes.ts:30](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L30)

___

### duration

• **duration**: `number`

#### Defined in

[types/api/TrackTypes.ts:6](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L6)

___

### editable

• **editable**: `boolean`

#### Defined in

[types/api/TrackTypes.ts:20](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L20)

___

### explicit

• **explicit**: `boolean`

#### Defined in

[types/api/TrackTypes.ts:21](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L21)

___

### id

• **id**: `number`

#### Defined in

[types/api/TrackTypes.ts:4](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L4)

___

### index

• `Optional` **index**: `number`

#### Defined in

[types/api/TrackTypes.ts:31](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L31)

___

### isrc

• **isrc**: `string`

#### Defined in

[types/api/TrackTypes.ts:19](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L19)

___

### itemUuid

• `Optional` **itemUuid**: `string`

#### Defined in

[types/api/TrackTypes.ts:32](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L32)

___

### mixes

• **mixes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TRACK_MIX` | `string` |

#### Defined in

[types/api/TrackTypes.ts:27](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L27)

___

### peak

• **peak**: `number`

#### Defined in

[types/api/TrackTypes.ts:8](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L8)

___

### popularity

• **popularity**: `number`

#### Defined in

[types/api/TrackTypes.ts:16](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L16)

___

### premiumStreamingOnly

• **premiumStreamingOnly**: `boolean`

#### Defined in

[types/api/TrackTypes.ts:12](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L12)

___

### replayGain

• **replayGain**: `number`

#### Defined in

[types/api/TrackTypes.ts:7](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L7)

___

### streamReady

• **streamReady**: `boolean`

#### Defined in

[types/api/TrackTypes.ts:10](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L10)

___

### streamStartDate

• **streamStartDate**: `string`

#### Defined in

[types/api/TrackTypes.ts:11](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L11)

___

### title

• **title**: `string`

#### Defined in

[types/api/TrackTypes.ts:5](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L5)

___

### trackNumber

• **trackNumber**: `number`

#### Defined in

[types/api/TrackTypes.ts:13](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L13)

___

### url

• **url**: `string`

#### Defined in

[types/api/TrackTypes.ts:18](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L18)

___

### version

• **version**: ``null`` \| `string` \| `number`

#### Defined in

[types/api/TrackTypes.ts:15](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L15)

___

### volumeNumber

• **volumeNumber**: `number`

#### Defined in

[types/api/TrackTypes.ts:14](https://github.com/Mawco/node-tidal/blob/7ca31f3/src/types/api/TrackTypes.ts#L14)
