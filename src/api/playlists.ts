import { Tidal } from '../index.js';

import {
  ImageResolutionEnum,
  OnDupes,
  OrderDirections,
  OrderTypes,
  Playlist,
  PlaylistFolders,
  PlaylistTracks,
} from '../types/index.js';

export class Playlists {
  private client: Tidal;

  constructor(tidal: Tidal) {
    this.client = tidal;
  }

  /**
   * It gets the playlist information from the Tidal API.
   * @param {string} playlistId - The ID of the playlist you want to get the information of.
   * @returns {Promise} - A promise that resolves to the playlist information.
   * @fulfil {Playlist} - The playlist information.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getPlaylist(playlistId: string) {
    const response = await this.client._request(`playlists/${playlistId}`);
    return response as Playlist;
  }

  /**
   * It gets the songs from a playlist.
   * @param {string} playlistId - The id of the playlist you want to get the songs from.
   * @param {number} [limit=50] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC',
   * @returns {Promise} - A promise that resolves to the playlist tracks information.
   * @fulfil {PlaylistSongs} - The songs from the playlist.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getPlaylistTracks(
    playlistId: string,
    limit: number = 50,
    offset: number = 0,
    order: OrderTypes = 'DATE',
    orderDirection: OrderDirections = 'ASC',
  ) {
    const { items } = await this.client._request(`playlists/${playlistId}/items`, {
      params: {
        offset,
        limit,
        order,
        orderDirection,
      },
    });
    return items as PlaylistTracks[];
  }

  /**
   * It gets all the plalist folders and root playlists from the user's account.
   * @param {string} [folderId='root'] - The id of the folder you want to get the playlists from.
   * @param {ItemType} [includeOnly='PLAYLIST | FOLDER'] - The type of items you want to get.
   * @param {number} [limit=50] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=DESC] - OrderDirections = 'DESC',
   * @returns {Promise} - A promise that resolves to the playlist folders information.
   * @fulfil {PlaylistFolders} - The playlist folders and root playlists.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async getPlaylistFolders(
    folderId: string = 'root',
    includeOnly: string = '',
    offset: number = 0,
    limit: number = 50,
    order: OrderTypes = 'DATE',
    orderDirection: OrderDirections = 'DESC',
  ) {
    const { items } = await this.client._request(`my-collection/playlists/folders`, {
      versions: 'v2',
      params: {
        folderId,
        includeOnly,
        offset,
        limit,
        order,
        orderDirection,
      },
    });
    return items as PlaylistFolders[];
  }

  /**
   * It gets the image url of a playlist by a given playlist.data.squareImage
   * @param {string} squareImage - The squareImage of the playlist
   * @param {ImageResolution} [resolution=ImageResolution.Medium] - The resolution of the image
   * @returns {string} - The image url of the playlist.
   * @fulfil {string} - The image url of the playlist.
   * @reject {Error} - The error as returned by Tidal.
   */
  public getPlaylistImage(squareImage: string, resolution: ImageResolutionEnum = ImageResolutionEnum.Medium) {
    const IMAGE_BASE_URL = 'https://resources.tidal.com/images/';
    return `${IMAGE_BASE_URL}${squareImage.replace(/-/g, '/')}/${resolution}.jpg`;
  }

  /**
   * It creates a playlist in the root folder of the user's collection
   * @param {string} name - The name of the playlist
   * @param {string} [description] - The description of the playlist
   * @returns {Promise} - A promise that resolves to the created playlist information.
   * @fulfil {Playlist} - The playlist information.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async createPlaylist(name: string, description?: string) {
    const response = await this.client._request(`my-collection/playlists/folders/create-playlist`, {
      method: 'PUT',
      versions: 'v2',
      params: {
        name,
        description,
        folderId: 'root',
      },
    });
    return response;
  }

  /**
   * It deletes a playlist from the user's account.
   * @param {string} playlistId - The id of the playlist you want to delete
   * @returns {Promise} - A promise that resolves to the deleted playlists information.
   * @fulfil {string} - The status of the operation.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async deletePlaylist(playlistId: string) {
    const playlist = await this.getPlaylist(playlistId);
    if (!playlist) throw new Error(`There is no playlist with the ${playlistId} id`);
    const response = await this.client._request(`playlists/${playlist.uuid}`, {
      method: 'PUT',
      versions: 'v2',
      params: {
        trns: `trn:playlist:${playlist.uuid}`,
      },
    });
    if (!response) return { status: 'Success', playlistId, playlist };
    else return { status: 'Failed', playlistId, playlist };
  }

  /**
   * It takes a folderId as a parameter, and returns a Deleted object with a status of 'Success' or
   * 'Failed' and the folderId.
   * @param {string} folderId - The id of the folder you want to delete
   * @returns {Promise} - A promise that resolves to the deleted folder.
   * @fulfil {string} - The status of the operation.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async deleteFolder(folderId: string) {
    if (!folderId) throw new Error('PlaylistId not specified');
    const response = await this.client._request(`my-collection/playlists/folders/remove`, {
      method: 'PUT',
      versions: 'v2',
      params: {
        trns: `trn:folder:${folderId}`,
      },
    });
    if (!response) return { status: 'Success', folderId };
    else return { status: 'Failed', folderId };
  }

  /**
   * It adds a song to a playlist.
   * @param {string} playlistId - The id of the playlist you want to add the song to.
   * @param {any} trackIds - The ID of the track you want to add to the playlist.
   * @param {OnDupes} [onDupes=FAIL] - This is the action to take if the song is already in the
   * playlist.
   * @returns {Promise} - A promise that resolves to the added song.
   * @fulfil {string} - The status of the operation.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async addTrackToPlaylist(playlistId: string, trackIds: any, onDupes: OnDupes = 'FAIL') {
    const response = await this.client._request(`playlists/${playlistId}/items`, {
      method: 'POST',
      body: new URLSearchParams({
        onArtifactNotFound: 'FAIL',
        onDupes,
        trackIds,
      }) as any,
      headers: {
        'If-None-Match': '*',
      },
    });
    return response;
  }

  /**
   * It deletes a song from a playlist
   * @param {string} playlistId - The id of the playlist you want to delete a song from
   * @param {number} index - The index of the song you want to delete
   * @param {OrderTypes} [order=INDEX] - OrderTypes = 'INDEX'
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC'
   * @returns {Promise} - A promise that resolves to the deleted song.
   * @fulfil {string} - The status of the operation.
   * @reject {Error} - The error as returned by Tidal.
   */
  public async deleteTrackFromPlaylist(
    playlistId: string,
    index: number,
    order: OrderTypes = 'INDEX',
    orderDirection: OrderDirections = 'ASC',
  ) {
    const { numberOfTracks } = await this.getPlaylist(playlistId);
    if (numberOfTracks <= 1) throw new Error('The playlist need to contain at least 2 tracks');
    const tracks = await this.getPlaylistTracks(playlistId);
    const response = await this.client._request(`playlists/${playlistId}/items/${index}`, {
      method: 'DELETE',
      headers: {
        'If-None-Match': '*',
      },
      params: {
        order,
        orderDirection,
      },
    });
    if (!response) return { status: 'Success', playlistId, index, song: tracks[index].item };
    else return { status: 'Failed', playlistId, index };
  }
}
