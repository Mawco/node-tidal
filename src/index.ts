import axios from 'axios';

import { Albums, Artists, Playlists, Tracks } from './api/index.js';

import { ClientOptions, Country, RequestOptions, searchType } from './types/index.js';

export class Tidal {
  private options: ClientOptions;

  public countryCode: Country;

  public albums: Albums;
  public artists: Artists;
  public playlists: Playlists;
  public tracks: Tracks;

  constructor(options: ClientOptions) {
    this.options = options;

    this.countryCode = options.countryCode;

    this.albums = new Albums(this);
    this.artists = new Artists(this);
    this.playlists = new Playlists(this);
    this.tracks = new Tracks(this);
  }

  /**
   * It searches for a specific type of content on Tidal.
   * @param {string} query - The query to search for.
   * @param {searchType} type - The type of content to search for.
   * @param {number} [limit=50] - The amount of results to return.
   * @param {number} [offset=0] - The offset of the results.
   * @returns The results of the search.
   * @example
   * const results = await tidal.search('The Weeknd', 'tracks');
   * console.log(results);
   * // => { totalNumberOfItems: 100, limit: 50, offset: 0, items: [...] }
   **/
  public async search(
    query: string,
    type: searchType,
    limit: number = 3,
    offset: number = 0,
    includeContributors: boolean = true,
  ) {
    const { items } = await this._request(`search/${type}`, {
      params: {
        query,
        limit,
        offset,
        type,
        includeContributors,
      },
    });
    return items;
  }

    /**
   * It searches for top hits on Tidal.
   * @param {string} query - The query to search for.
   * @param {searchType} types - The type of content to search for.
   * @param {number} [limit=50] - The amount of results to return.
   * @param {number} [offset=0] - The offset of the results.
   * @returns The results of the search.
   * @example
   * const results = await tidal.search('The Weeknd', 'tracks');
   * console.log(results);
   * // => { totalNumberOfItems: 100, limit: 50, offset: 0, items: [...] }
   **/
  public async searchTopHits(
    query: string,
    types: searchType,
    limit: number = 3,
    offset: number = 0,
    includeContributors: boolean = true,
  ) {
    const items = await this._request(`search/top-hits`, {
      params: {
        query,
        limit,
        offset,
        types,
        includeContributors,
      },
    });
    return items;
  }

  /**
   * It makes a request to the Tidal API, and if it fails, it will retry the request after a certain
   * amount of time.
   * @param {string} url - The url of the request.
   * @param {RequestOptions} [options] - The options of the request.
   * @returns The data from the request.
   */
  public async _request(url: string, options?: RequestOptions): Promise<any> {
    try {
      const { data } = await axios({
        url: `https://api.tidal.com/${options?.versions || 'v1'}/${url}`,
        method: options?.method || 'GET',
        params: { ...options?.params, countryCode: this.options.countryCode, deviceType: 'BROWSER' },
        headers: {
          Origin: 'http://listen.tidal.com',
          Authorization: `Bearer ${this.options.token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          ...options?.headers,
        },
        data: options?.body,
      });
      return data;
    } catch (error: any) {
      if (!error.response) throw error;
      else if (error.response.status == 404) throw error.response.data;
      else if (error.response.status == 429) {
        const retryAfter = error.response.headers['Retry-After'];
        if (typeof retryAfter == 'number') await new Promise((r) => setTimeout(r, retryAfter * 1000));
        return this._request(url, options);
        // @ts-ignore
      } else if (error.response.status == 401) throw new Error('Invalid access token');
      else throw error.response.data;
    }
  }
}
