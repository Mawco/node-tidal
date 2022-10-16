import { Tidal } from '..';

import { Track } from '../types';

export class Tracks {
  private client: Tidal;

  constructor(tidal: Tidal) {
    this.client = tidal;
  }

  /**
   * It gets the track information from the Tidal API.
   * @param {number} trackId - The ID of the track you want to get.
   * @returns TidalTrack.
   */
  public async getTrack(trackId: number) {
    const response = await this.client._request(`tracks/${trackId}`);
    return response as unknown as Track;
  }

  /**
   * It gets the track information from the Tidal API.
   * @param {number} trackId - The ID of the track you want to get.
   * @returns TidalTrack.
   **/
  public async getTrackContributors(trackId: number) {
    const { items } = await this.client._request(`tracks/${trackId}/contributors`);
    return items;
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
