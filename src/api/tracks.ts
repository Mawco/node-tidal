import { Tidal } from '../index.js';

import { Contributor, Track } from '../types/index.js';

export class Tracks {
  private client: Tidal;

  constructor(tidal: Tidal) {
    this.client = tidal;
  }

  /**
   * It gets the track information from the Tidal API.
   * @param {number} trackId - The ID of the track you want to get.
   * @returns {Promise} - A promise that resolves to a track object.
   * @fulfil {Track} - a track object
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getTrack(trackId: number) {
    const response = await this.client._request(`tracks/${trackId}`);
    return response as Track;
  }

  /**
   * It gets the contributors of a track from the Tidal API.
   * @param {number} trackId - The ID of the track you want to get.
   * @returns {Promise} - A promise that resolves to an array of contributor objects.
   * @fulfil {Contributor[]} - an array of contributor objects
   * @reject {Error} - The error as returned by Tidal.
   **/
  public async getTrackContributors(trackId: number) {
    const { items } = await this.client._request(`tracks/${trackId}/contributors`);
    return items as Contributor[];
  }

  /**
   * It gets the tracks of a album from the Tidal API
   * @param {number} albumId - The ID of the album you want to get the tracks for.
   * @returns TidalAlbumTracks.
   **/
  //   public async getTrackStreamUrl(trackId: number) {
  //     const response = await this.client._request(`tracks/${trackId}/streamUrl`);
  //     return response;
  //   }

  /**
   * It gets the tracks of a album from the Tidal API
   * @param {number} albumId - The ID of the album you want to get the tracks for.
   * @returns TidalAlbumTracks.
   **/
  //   public async getOfflineTrackStreamUrl(trackId: number) {
  //     const response = await this.client._request(`tracks/${trackId}/offlineUrl`, {
  //       params: {
  //         // TODO Typing
  //         soundQuality: 'NORMAL',
  //       },
  //     });
  //     return response;
  //   }
}
