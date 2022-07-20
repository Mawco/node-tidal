import axios, { AxiosResponse } from 'axios';

import { Playlists } from './api/playlists';

import { ClientOptions, Country, RequestOptions } from './types';

export class Client {
  private token!: String;
  private countryCode?: Country;
  private debug?: Boolean;

  public playlists: Playlists;

  constructor(options: ClientOptions) {
    this.token = options.token;
    this.countryCode = options.countryCode || 'FR';
    this.debug = options.debug || false;

    this.playlists = new Playlists(this);
  }

  /**
   * It makes a request to the Tidal API, and if it fails, it will retry the request after a certain
   * amount of time
   * @param {string} url - The url of the request.
   * @param {RequestOptions} [options] - The options of the request.
   * @returns The data from the request.
   */
  public async request(url: string, options?: RequestOptions) {
    try {
      const { data, status, statusText, headers, config } = await axios({
        url: `https://${options?.modes || 'desktop'}.tidal.com/${options?.versions || 'v1'}/${url}`,
        method: options?.method || 'GET',
        params: { ...options?.params, countryCode: this.countryCode },
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: 'application/json',
          ...options?.headers,
        },
        data: options?.body,
      });
      if (this.debug) console.log(status, statusText, headers, data, config);
      return data as AxiosResponse;
    } catch (error) {
      if (!error.response) throw error;
      else if (error.response.status == 404) return null;
      else if (error.response.status == 429) {
        const retryAfter = error.response.headers['Retry-After'];
        if (typeof retryAfter == 'number') await new Promise((r) => setTimeout(r, retryAfter * 1000));
        return this.request(url, options);
        // @ts-ignore
      } else if (error.response.statusText == 'Invalid access token') throw new Error('Invalid access token');
      else throw error;
    }
  }
}
