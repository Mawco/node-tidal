import { Tidal } from '../index.js';

import {
  Album,
  Artist,
  ArtistBio,
  ArtistMix,
  ArtistTracks,
  OrderDirections,
  OrderTypes,
  Video,
} from '../types/index.js';

export class Artists {
  private client: Tidal;

  constructor(tidal: Tidal) {
    this.client = tidal;
  }

  /**
   * It gets the artist information from the Tidal API.
   * @param {number} artistId - The ID of the artist you want to get.
   * @returns {Promise} - The artist information.
   * @fulfil {Artist} - The artist.
   * @reject {Error} - The error as returned by Tidal.
   * @example
   * const artist = await tidal.getArtist(3529689);
   * console.log(artist);
   * // {
   * // "id": 3529689,
   * // "name": "The Notwist",
   * // "artistTypes": [
   * //     "ARTIST",
   * //     "CONTRIBUTOR"
   * // ],
   * // "url": "http://www.tidal.com/artist/3529689",
   * // "picture": "2a4abc4a-faf5-4c06-b2a4-bf142459d894",
   * // "popularity": 36,
   * // "artistRoles": [
   * //    {
   * //     "categoryId": -1,
   * //     "category": "Artist"
   * //    },
   * //    {
   * //     "categoryId": 11,
   * //     "category": "Performer"
   * //    },
   * //    {
   * //     "categoryId": 1,
   * //     "category": "Producer"
   * //    },
   * //    {
   * //     "categoryId": 2,
   * //     "category": "Songwriter"
   * //    },
   * //    {
   * //     "categoryId": 3,
   * //     "category": "Engineer"
   * //    }
   * // ],
   * // "mixes": {
   * //     "MASTER_ARTIST_MIX": "0157026712a3687e12af164ecb10ce",
   * //     "ARTIST_MIX": "00008ded8a6682c338c2fbabd6619f"
   * //    }
   * // }
   */
  async getArtist(artistId: number) {
    const response = await this.client._request(`artists/${artistId}`);
    return response as Artist;
  }

  /**
   * It gets the artist bio from the Tidal API.
   * @param {number} artistId - The ID of the artist you want to get.
   * @returns {Promise} - A promise that resolves to the artist bio.
   * @fulfil {ArtistBio} - The artist bio.
   * @reject {Error} - The error as returned by Tidal.
   * @example
   * const artist = await tidal.getArtist(3529689);
   * console.log(artist);
   * // {
   * // "source": "TiVo",
   * // "lastUpdated": "2020-10-10T05:10:45.967+0000",
   * // "text": "Formed near Munich as a post-hardcore band, [wimpLink artistId=\"3529689\"]the Notwist[/wimpLink] gradually began to embrace a fusion of classic '80s indie pop songwriting and scruffy electronic backings indebted to [wimpLink artistId=\"3941046\"]Oval[/wimpLink] and [wimpLink artistId=\"3569016\"]Autechre[/wimpLink]. The quartet comprises brothers [wimpLink artistId=\"10371697\"]Markus[/wimpLink] and [wimpLink artistId=\"9172940\"]Micha Acher[/wimpLink] (on vocals/guitar and bass, respectively) plus programmer/keyboard player [wimpLink artistId=\"13474646\"]Martin Gretschmann[/wimpLink] and drummer Martin Messerschmid. Their self-titled 1989 debut and 1992's [wimpLink albumId=\"20253985\"]Nook[/wimpLink] were rough-and-tumble punk LPs. Third album 12 marked the group's first flirtation with electronics, though the chord structures and vocals of [wimpLink artistId=\"10371697\"]Markus Acher[/wimpLink] marked [wimpLink artistId=\"3529689\"]the Notwist[/wimpLink] more as an alternative band. The band then gained an American distribution deal with Zero Hour, and after 12 was reissued, fourth album [wimpLink albumId=\"23341306\"]Shrink[/wimpLink] -- almost entirely abstract electronic in nature -- appeared in 1998. Neon Golden (2002) and [wimpLink albumId=\"77577154\"]The Devil, You + Me[/wimpLink] (2008) were both song-oriented in nature, albeit with electronics continuing to play a significant role in the band's material. In 2013, the band resurfaced with the single \"Close to the Glass.\" The album of the same name, which boasted some of [wimpLink artistId=\"3529689\"]the Notwist[/wimpLink]'s most accessible songwriting and experimental instrumentation, arrived in early 2014. Later that year, the band issued [wimpLink albumId=\"38519994\"]The Messier Objects[/wimpLink], a collection of instrumental tracks written in the years between [wimpLink albumId=\"77577154\"]The Devil, You + Me[/wimpLink] and [wimpLink albumId=\"25934525\"]Close to the Glass[/wimpLink]. The live album [wimpLink albumId=\"64377395\"]Superheroes, Ghostvillains & Stuff[/wimpLink] appeared in 2016, capturing the second of the band's three consecutive sold-out shows in Leipzig, Germany in late 2015. ~ John Bush"
   * // "summary": ""
   * // }
   */
  async getArtistBio(artistId: number) {
    const response = await this.client._request(`artists/${artistId}/bio`);
    return response as ArtistBio;
  }

  /**
   * It gets the artist mix from the Tidal API.
   * @param {number} artistId - The ID of the artist you want to get.
   * @param {number} [limit=50] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC',
   * @returns {Promise} - A promise that resolves to the artist mix.
   * @fulfil {ArtistMix} - The artist mix.
   * @reject {Error} - The error as returned by Tidal.
   * @example
   * const artist = await tidal.getArtistMix(3529689);
   * console.log(artist);
   * // {
   * //  "id": "00008ded8a6682c338c2fbabd6619f"
   * // }
   */
  async getArtistMix(artistId: number) {
    const response = await this.client._request(`artists/${artistId}/mix`);
    return response as ArtistMix;
  }

  /**
   * It gets the artist top tracks from the Tidal API.
   * @param {number} artistId - The ID of the artist you want to get.
   * @param {number} [limit=50] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC',
   * @returns {Promise} - A promise that resolves to the artist top tracks.
   * @fulfil {Track[]} - The artist top tracks.
   * @reject {Error} - The error as returned by Tidal.
   * @example
   * const artist = await tidal.getArtistTopTracks(3529689, 1);
   * console.log(artist);
   * // {
   * //   [
   * //     {
   * //       "id": 82448461,
   * //       "title": "Consequence",
   * //       "duration": 313,
   * //       "replayGain": -6.9,
   * //       "peak": 1.0,
   * //       "allowStreaming": true,
   * //       "streamReady": true,
   * //       "streamStartDate": "2017-12-05T00:00:00.000+0000",
   * //       "premiumStreamingOnly": false,
   * //       "trackNumber": 10,
   * //       "volumeNumber": 1,
   * //       "version": null,
   * //       "popularity": 6,
   * //       "copyright": "City Slang/big Store",
   * //       "url": "http://www.tidal.com/track/82448461",
   * //       "isrc": "DED620118410",
   * //       "editable": false,
   * //       "explicit": false,
   * //       "audioQuality": "LOSSLESS",
   * //       "audioModes": [
   * //         "STEREO"
   * //       ],
   * //       "artist": {
   * //         "id": 3529689,
   * //         "name": "The Notwist",
   * //         "type": "MAIN"
   * //       },
   * //       "artists": [
   * //         {
   * //          "id": 3529689,
   * //          "name": "The Notwist",
   * //          "type": "MAIN"
   * //         }
   * //       ],
   * //       "album": {
   * //         "id": 82448449,
   * //         "title": "Neon Golden",
   * //         "cover": "ad3ed5f3-37a2-4b27-9002-b83459ab5a0e",
   * //         "videoCover": null
   * //       },
   * //       "mixes": {
   * //         "TRACK_MIX": "001981d70c53d5448599714c407079"
   * //       }
   * //     },
   * //   ]
   * // }
   */
  async getArtistTopTracks(
    artistId: number,
    limit: number = 50,
    offset: number = 0,
    order: OrderTypes = 'DATE',
    orderDirection: OrderDirections = 'ASC',
  ) {
    const { items } = await this.client._request(`artists/${artistId}/toptracks`, {
      params: {
        offset,
        limit,
        order,
        orderDirection,
      },
    });
    return items as ArtistTracks[];
  }

  /**
   * It gets the artist videos from the Tidal API.
   * @param {number} artistId - The ID of the artist you want to get.
   * @param {number} [limit=10] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC',
   * @returns {Promise} - A promise that resolves to the artist videos.
   * @fulfil {Video[]} - The artist videos.
   * @reject {Error} - The error as returned by Tidal.
   * @example
   * const artist = await tidal.getArtistVideos(3529689, 1);
   * console.log(artist);
   * // {
   * //   [
   * //     {
   * //       "id": 143147453,
   * //       "title": "Atomised",
   * //       "volumeNumber": 1,
   * //       "trackNumber": 1,
   * //       "releaseDate": "2020-06-16T00:00:00.000+0000",
   * //       "imagePath": null,
   * //       "imageId": "2ef62a00-e310-48ab-afc2-f8cb76757968",
   * //       "duration": 263,
   * //       "quality": "MP4_1080P",
   * //       "streamReady": true,
   * //       "streamStartDate": "2020-06-17T11:00:00.000+0000",
   * //       "allowStreaming": true,
   * //       "explicit": false,
   * //       "popularity": 2,
   * //       "type": "Music Video",
   * //       "adsUrl": null,
   * //       "adsPrePaywallOnly": true,
   * //       "artist": {
   * //           "id": 4764457,
   * //           "name": "GoGo Penguin",
   * //           "type": "MAIN"
   * //       },
   * //       "artists": [
   * //           {
   * //           "id": 4764457,
   * //           "name": "GoGo Penguin",
   * //           "type": "MAIN"
   * //           }
   * //       ],
   * //       "album": null
   * //     },
   * //   ]
   * // }
   */
  async getArtistVideos(
    artistId: number,
    limit: number = 10,
    offset: number = 0,
    order: OrderTypes = 'DATE',
    orderDirection: OrderDirections = 'ASC',
  ) {
    const { items } = await this.client._request(`artists/${artistId}/videos`, {
      params: {
        offset,
        limit,
        order,
        orderDirection,
      },
    });
    return items as Video[];
  }

  /**
   * It gets the artist albums from the Tidal API.
   * @param {number} artistId - The ID of the artist you want to get.
   * @param {number} [limit=10] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC',
   * @returns {Promise} - A promise that resolves to the artist albums.
   * @fulfil {Album[]} - The artist albums.
   * @reject {Error} - The error as returned by Tidal.
   * @example
   * const artist = await tidal.getArtistAlbums(3529689, 1);
   * console.log(artist);
   * // {
   * //   [
   * //     {
   * //      "id": 64377395,
   * //      "title": "Superheroes, Ghost-Villains + Stuff",
   * //      "duration": 5948,
   * //      "streamReady": true,
   * //      "streamStartDate": "2016-10-14T00:00:00.000+0000",
   * //      "allowStreaming": true,
   * //      "premiumStreamingOnly": false,
   * //      "numberOfTracks": 16,
   * //      "numberOfVideos": 0,
   * //      "numberOfVolumes": 1,
   * //      "releaseDate": "2016-10-14",
   * //      "copyright": "Alien Transistor",
   * //      "type": "ALBUM",
   * //      "version": null,
   * //      "url": "http://www.tidal.com/album/64377395",
   * //      "cover": "ba4e14ab-e110-41d9-8943-2efdf3c9367d",
   * //      "videoCover": null,
   * //      "explicit": false,
   * //      "upc": "880918225265",
   * //      "popularity": 14,
   * //      "audioQuality": "LOSSLESS",
   * //      "audioModes": [
   * //        "STEREO"
   * //      ],
   * //      "artist": {
   * //        "id": 3529689,
   * //         "name": "The Notwist",
   * //         "type": "MAIN"
   * //      },
   * //      "artists": [
   * //           {
   * //            "id": 3529689,
   * //            "name": "The Notwist",
   * //            "type": "MAIN"
   * //           }
   * //         ]
   * //       },
   * //     }
   * //   ]
   * // }
   */
  async getArtistAlbums(
    artistId: number,
    limit: number = 10,
    offset: number = 0,
    order: OrderTypes = 'DATE',
    orderDirection: OrderDirections = 'ASC',
  ) {
    const { items } = await this.client._request(`artists/${artistId}/albums`, {
      params: {
        offset,
        limit,
        order,
        orderDirection,
      },
    });
    return items as Album[];
  }
}
