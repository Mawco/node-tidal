import axios from 'axios';

import { Albums, Playlists } from './api';

import { ClientOptions, RequestOptions, searchType } from './types';

// @ts-ignore
import { version } from '../package.json';

export class Tidal {
  private options: ClientOptions;

  public playlists: Playlists;
  public albums: Albums;

  constructor(options: ClientOptions) {
    this.options = options;

    this.albums = new Albums(this);
    this.playlists = new Playlists(this);
  }

  /**
   * It returns the version of the package.
   * @returns The version property is being returned.
   */
  private get version(): string {
    return version;
  }

  /**
   * It checks the version of the package on npm and compares it to the version of the package you're
   * using. If the version on npm is higher, it will warn you to upgrade.
   * @returns The version of the package.
   */
  private checkVersion() {
    try {
      let tidal = require('child_process').execSync(`npm view node-tidal version`, {
        stdio: ['pipe', 'pipe', 'ignore'],
      });
      if (tidal)
        tidal = tidal
          .toString()
          .trim()
          .replace(/^\n*|\n*$/g, '');
      else throw Error('No version found');
      if (tidal != this.version)
        return console.log(
          `A higher version of node-tidal is available, you\'re actually on the ${this.version} and the latest is ${tidal}\nPlease upgrade by using npm i node-tidal@latest`,
        );
    } catch (error) {
      throw error;
    }
  }

  /**
   * It makes a request to the Tidal API, and if it fails, it will retry the request after a certain
   * amount of time
   * @param {string} url - The url of the request.
   * @param {RequestOptions} [options] - The options of the request.
   * @returns The data from the request.
   */
  public async _request(url: string, options?: RequestOptions): Promise<any> {
    try {
      const { data, status, statusText, headers, config } = await axios({
        url: `https://${options?.modes || 'desktop'}.tidal.com/${options?.versions || 'v1'}/${url}`,
        method: options?.method || 'GET',
        params: { ...options?.params, countryCode: this.options.countryCode },
        headers: {
          Authorization: `Bearer ${this.options.token}`,
          Accept: 'application/json',
          ...options?.headers,
        },
        data: options?.body,
      });
      this.checkVersion;
      return data;
    } catch (error: any) {
      if (!error.response) throw error;
      else if (error.response.status == 404) throw error;
      else if (error.response.status == 429) {
        const retryAfter = error.response.headers['Retry-After'];
        if (typeof retryAfter == 'number') await new Promise((r) => setTimeout(r, retryAfter * 1000));
        return this._request(url, options);
        // @ts-ignore
      } else if (error.response.status == 401) throw new Error('Invalid access token');
      else throw error;
    }
  }

  public async search(
    name: string,
    type: searchType,
    limit: number = 3,
    offset: number = 0,
    includeContributors: boolean = true,
  ) {
    const { items } = await this._request(`search/${type}`, {
      params: {
        query: name,
        limit,
        offset,
        type,
        includeContributors,
      },
    });
    return items;
  }
}
