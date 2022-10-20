[node-tidal](../README.md) / [index](../modules/index.md) / Tidal

# Class: Tidal

[index](../modules/index.md).Tidal

## Table of contents

### Constructors

- [constructor](index.Tidal.md#constructor)

### Properties

- [albums](index.Tidal.md#albums)
- [artists](index.Tidal.md#artists)
- [countryCode](index.Tidal.md#countrycode)
- [options](index.Tidal.md#options)
- [playlists](index.Tidal.md#playlists)
- [tracks](index.Tidal.md#tracks)

### Methods

- [\_request](index.Tidal.md#_request)
- [search](index.Tidal.md#search)

## Constructors

### constructor

• **new Tidal**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ClientOptions`](../interfaces/types_ClientTypes.ClientOptions.md) |

#### Defined in

[index.ts:17](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L17)

## Properties

### albums

• **albums**: [`Albums`](api_albums.Albums.md)

#### Defined in

[index.ts:12](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L12)

___

### artists

• **artists**: [`Artists`](api_artists.Artists.md)

#### Defined in

[index.ts:13](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L13)

___

### countryCode

• **countryCode**: [`Country`](../modules/types_ClientTypes.md#country)

#### Defined in

[index.ts:10](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L10)

___

### options

• `Private` **options**: [`ClientOptions`](../interfaces/types_ClientTypes.ClientOptions.md)

#### Defined in

[index.ts:8](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L8)

___

### playlists

• **playlists**: [`Playlists`](api_playlists.Playlists.md)

#### Defined in

[index.ts:14](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L14)

___

### tracks

• **tracks**: [`Tracks`](api_tracks.Tracks.md)

#### Defined in

[index.ts:15](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L15)

## Methods

### \_request

▸ **_request**(`url`, `options?`): `Promise`<`any`\>

It makes a request to the Tidal API, and if it fails, it will retry the request after a certain
amount of time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The url of the request. |
| `options?` | [`RequestOptions`](../interfaces/types_ClientTypes.RequestOptions.md) | The options of the request. |

#### Returns

`Promise`<`any`\>

The data from the request.

#### Defined in

[index.ts:66](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L66)

___

### search

▸ **search**(`query`, `type`, `limit?`, `offset?`, `includeContributors?`): `Promise`<`any`\>

It searches for a specific type of content on Tidal.

**`Example`**

```ts
const results = await tidal.search('The Weeknd', 'tracks');
console.log(results);
// => { totalNumberOfItems: 100, limit: 50, offset: 0, items: [...] }
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | The query to search for. |
| `type` | [`searchType`](../modules/types_TidalTypes.md#searchtype) | `undefined` | The type of content to search for. |
| `limit?` | `number` | `3` | The amount of results to return. |
| `offset?` | `number` | `0` | The offset of the results. |
| `includeContributors` | `boolean` | `true` | - |

#### Returns

`Promise`<`any`\>

The results of the search.

#### Defined in

[index.ts:40](https://github.com/Mawco/node-tidal/blob/c586890/src/index.ts#L40)
