import { Tidal } from '..';

import { TidalAlbum } from '../types';

export class Albums {
  private client: Tidal;

  constructor(tidal: Tidal) {
    this.client = tidal;
  }

  /**
   * It gets the album information from the Tidal API.
   * @param {number} albumId - The ID of the album you want to get.
   * @returns TidalAlbum.
   */
  public async getAlbum(albumId: number) {
    const response = await this.client._request(`albums/${albumId}`);
    return response as unknown as TidalAlbum;
  }

  /**
   * It gets the tracks of a album from the Tidal API
   * @param {number} albumId - The ID of the album you want to get the tracks for.
   * @returns TidalAlbumTracks.
   */
  public async getAlbumTracks(albumId: number) {
    const response = await this.client._request(`albums/${albumId}/tracks`);
    // TODO Typing
    return response;
  }

  public async getFeaturedAlbums() {
    const response = await this.client._request(`pages/show_more_featured_albums`);
    const { tabs } = response.rows[0].modules[0];
    const topAlbums = tabs.find((tab: { key: string }) => tab.key === 'featured-top');
    const newAlbums = tabs.find((tab: { key: string }) => tab.key === 'featured-new');
    const staffPicks = tabs.find((tab: { key: string }) => tab.key === 'featured-recommended-album');
    // TODO Typing
    return {
      topAlbums: topAlbums.pagedList.items,
      newAlbums: newAlbums.pagedList.items,
      staffPicks: staffPicks.pagedList.items,
    };
  }

  /**
   * It gets the top 20 albums on Tidal from the Tidal API
   * @returns {Promise}
   * @fulfil {Array} - an array of album objects
   * @reject {Error}
   */
  public async getTopAlbums() {
    const { topAlbums } = await this.getFeaturedAlbums();
    return topAlbums;
  }

  /**
   * It gets new albums on Tidal from the Tidal API
   * @returns {Promise}
   * @fulfil {Array} - an array of album objects
   * @reject {Error}
   */
  public async getNewAlbums() {
    const { newAlbums } = await this.getFeaturedAlbums();
    return newAlbums;
  }

  /**
   * It gets staff pick albums on Tidal from the Tidal API
   * @returns {Promise}
   * @fulfil {Array} - an array of album objects
   * @reject {Error}
   */
  public async getStaffPickAlbums() {
    const { staffPicks } = await this.getFeaturedAlbums();
    return staffPicks;
  }
}
