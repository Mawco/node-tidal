import { Tidal } from '../index.js';

import { Album, AlbumCredits, AlbumTracksWithCredits, Track } from '../types/index.js';

export class Albums {
  private client: Tidal;

  constructor(tidal: Tidal) {
    this.client = tidal;
  }

  /**
   * It gets the album information from the Tidal API.
   * @param {number} albumId - The ID of the album you want to get.
   * @returns {Promise} - A promise that resolves to an album object.
   * @fulfil {Album} - an album object
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getAlbum(albumId: number) {
    const response = await this.client._request(`albums/${albumId}`);
    return response as Album;
  }

  /**
   * It gets the album credits from the Tidal API.
   * @param {number} albumId - The ID of the album you want to get.
   * @returns {Promise} - A promise that resolves to an array of album credits object.
   * @fulfil {AlbumCredits} - an album credits object
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getAlbumCredits(albumId: number) {
    const response = await this.client._request(`albums/${albumId}/credits`);
    return response as AlbumCredits[];
  }

  /**
   * It gets the tracks of a album from the Tidal API
   * @param {number} albumId - The ID of the album you want to get the tracks for.
   * @returns {Promise} - A promise that resolves to an array of track objects.
   * @fulfil {Track[]} - an array of track objects
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getAlbumTracks(albumId: number) {
    const { items } = await this.client._request(`albums/${albumId}/tracks`);
    return items as Track[];
  }

  /**
   * It gets the tracks & the credits of a albums from the Tidal API
   * @param {number} albumId - The ID of the album you want to get the tracks for.
   * @returns {Promise} - A promise that resolves to an array of track objects.
   * @fulfil {Album} - an album object
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getAlbumTracksWithCredits(albumId: number) {
    const { items } = await this.client._request(`albums/${albumId}/items/credits`);
    return items as AlbumTracksWithCredits[];
  }

  /**
   * It gets featured albums on Tidal from the Tidal API
   * @returns {Promise} - A promise that resolves to an object with featured albums.
   * @fulfil {Album[]} - an array of album objects
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getFeaturedAlbums() {
    const response = await this.client._request(`pages/show_more_featured_albums`);
    const { tabs } = response.rows[0].modules[0];
    const topAlbums = tabs.find((tab: { key: string }) => tab.key === 'featured-top');
    const newAlbums = tabs.find((tab: { key: string }) => tab.key === 'featured-new');
    const staffPicks = tabs.find((tab: { key: string }) => tab.key === 'featured-recommended-album');
    return {
      topAlbums: topAlbums.pagedList.items as Album[],
      newAlbums: newAlbums.pagedList.items as Album[],
      staffPicks: staffPicks.pagedList.items as Album[],
    };
  }

  /**
   * It gets the top 20 albums on Tidal from the Tidal API
   * @returns {Promise} - A promise that resolves to an array of album objects.
   * @fulfil {ALbum[]} - an array of album objects
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getTopAlbums() {
    const { topAlbums } = await this.getFeaturedAlbums();
    return topAlbums;
  }

  /**
   * It gets new albums on Tidal from the Tidal API
   * @returns {Promise} - A promise that resolves to an array of album objects.
   * @fulfil {ALbum[]} - an array of album objects
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getNewAlbums() {
    const { newAlbums } = await this.getFeaturedAlbums();
    return newAlbums;
  }

  /**
   * It gets staff pick albums on Tidal from the Tidal API
   * @returns {Promise} - A promise that resolves to an array of album objects.
   * @fulfil {ALbum[]} - an array of album objects
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getStaffPickAlbums() {
    const { staffPicks } = await this.getFeaturedAlbums();
    return staffPicks;
  }
}
