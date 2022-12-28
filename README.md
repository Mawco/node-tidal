# node-tidal

<div align="left">
  <p>
    <a href="https://github.com/Mawco/node-tidal"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FMawco%2Fnode-tidal%2Fbadge%3Fref%3Dmaster&style=for-the-badge" width="200" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/node-tidal"><img src="https://nodei.co/npm/node-tidal.png" /></a>
  </p>
</div>

## About

This is a NodeJS wrapper for TIDAL's API with typings.

## Installation

```ts
npm install node-tidal

yarn add node-tidal
```

<details>
<summary>How to find your token</summary>

## How to find your token

**!!! TOKEN MAY CHANGE ONCE EVERY FEW DAYS !!!**

1. Go to [listen.tidal.com](https://listen.tidal.com) (make sure you're logged in 😐).
2. Open the devtools and go to network.
3. Click on `Fetch/XHR`.
4. Click any request and look for the `authorization` request header. ![authorization request header](https://media.discordapp.net/attachments/897586943154606151/1032704304823418932/unknown.png?width=720&height=322)
</details>

## Features

- Playlists
- Albums

## Usage/Examples

<details>
<summary>Basic example</summary>

```ts
const { Tidal } = require('node-tidal');

/* Instantiate a new Tidal object with your Tidal token. */
const tidal = new Tidal({ token: 'token >:(', countryCode: 'EN' });

async function playlistExample() {
  // It's getting the playlist infos of the playlist with the uuid
  // `f4cf62d9-7920-42ca-a2ac-409cf2b1df5b`.
  const getPlaylist = await tidal.playlists.getPlaylist('f4cf62d9-7920-42ca-a2ac-409cf2b1df5b');
  console.log(getPlaylist);

  // OUTPUT:
  //{
  //    uuid: 'f4cf62d9-7920-42ca-a2ac-409cf2b1df5b',
  //    title: 'blablablbla',
  //    numberOfTracks: 0,
  //    numberOfVideos: 0,
  //    creator: { id: 188019021 },
  //    description: ':):):):):):):):):):)',
  //    duration: 0,
  //    lastUpdated: '2022-07-14T10:29:14.004+0000',
  //    created: '2022-07-14T10:29:14.004+0000',
  //    type: 'USER',
  //    publicPlaylist: false,
  //    url: 'http://www.tidal.com/playlist/f4cf62d9-7920-42ca-a2ac-409cf2b1df5b',
  //    image: 'e59903d7-94a7-454c-8a78-6a6586967dda',
  //    popularity: 0,
  //    squareImage: 'e9448a9a-3ade-4f79-93d2-12e6d8d4b2eb',
  //    promotedArtists: [],
  //    lastItemAddedAt: null
  //}
}

playlistExample();
```

</details>

## License

[MIT](https://github.com/Mawco/node-tidal/blob/master/LICENSE)
