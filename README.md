
# node-tidal
![GitHub](https://img.shields.io/github/license/Mawco/node-tidal)

NodeJS wrapper for TIDAL's API.


## Features

- Playlist Management
- Search


## Usage/Examples

### Playlist infos
```javascript
const { Client } = require('tidal.js');

const client = new Client('token :O');

client.playlists.getPlaylistInfos('f4cf62d9-7920-42ca-a2ac-409cf2b1df5b').then(data => {
    console.log(data);
    // OUTPUT:
    //
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
});
```


## License

[MIT](https://github.com/Mawco/node-tidal/blob/master/LICENSE)

