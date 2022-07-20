import { Client } from '..';

import { AddedSong, Deleted, OnDupes, OrderDirections, OrderTypes, TidalPlaylist, TidalSong } from '../types';

export class Playlists {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * It gets the playlist information from the Tidal API.
   * @param {string} playlistId - The ID of the playlist you want to get the information of.
   * @returns TidalPlaylist
   */
  public async getPlaylistInfos(playlistId: string): Promise<any> {
    if (!playlistId) throw new Error('PlaylistId not specified');
    const response = await this.client.request(`playlists/${playlistId}`);
    return response as TidalPlaylist;
  }

  /**
   * It gets the songs from a playlist.
   * @param {string} playlistId - The id of the playlist you want to get the songs from.
   * @param {number} [limit=50] - The number of results to return.
   * @param {number} [offset=0] - The offset of the first song to return.
   * @param {OrderTypes} [order=DATE] - OrderTypes = 'DATE',
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC',
   * @returns TidalSong
   */
  public async getPlaylistSongs(
    playlistId: string,
    limit: number = 50,
    offset: number = 0,
    order: OrderTypes = 'DATE',
    orderDirection: OrderDirections = 'ASC',
  ) {
    if (!playlistId) throw new Error('PlaylistId not specified');
    const response = await this.client.request(`playlists/${playlistId}/items`, {
      params: {
        offset,
        limit,
        order,
        orderDirection,
      },
    });
    return response as TidalSong;
  }

  /**
   * It deletes a playlist from the user's account.
   * @param {string} playlistId - The id of the playlist you want to delete
   * @returns Deleted.
   */
  public async deletePlaylist(playlistId: string) {
    if (!playlistId) throw new Error('PlaylistId not specified');
    const playlist = await this.getPlaylistInfos(playlistId);
    if (!playlist) throw new Error(`There is no playlist with the ${playlist.uuid} id`);
    const response = await this.client.request(`my-collection/playlists/folders/remove`, {
      modes: 'api',
      method: 'PUT',
      versions: 'v2',
      params: {
        trns: `trn:playlist:${playlist.uuid}`,
      },
    });
    if (!response) return { status: 'Success', playlistId, playlist } as Deleted;
    else return { status: 'Failed', playlistId, playlist } as Deleted;
  }

  /**
   * It takes a folderId as a parameter, and returns a Deleted object with a status of 'Success' or
   * 'Failed' and the folderId.
   * @param {string} folderId - The id of the folder you want to delete
   * @returns Deleted.
   */
  public async deleteFolder(folderId: string) {
    if (!folderId) throw new Error('PlaylistId not specified');
    const response = await this.client.request(`my-collection/playlists/folders/remove`, {
      modes: 'api',
      method: 'PUT',
      versions: 'v2',
      params: {
        trns: `trn:folder:${folderId}`,
      },
    });
    console.log(response);
    if (!response) return { status: 'Success', folderId } as Deleted;
    else return { status: 'Failed', folderId } as Deleted;
  }

  /**
   * It adds a song to a playlist.
   * @param {string} playlistId - The id of the playlist you want to add the song to.
   * @param {string} trackId - The ID of the track you want to add to the playlist.
   * @param {OnDupes} [onDupes=FAIL] - This is the action to take if the song is already in the
   * playlist.
   * @returns AddedSong
   */
  public async addSong(playlistId: string, trackId: string, onDupes: OnDupes = 'FAIL') {
    if (!playlistId) throw new Error('PlaylistId not specified');
    if (!trackId) throw new Error('trackId not specified');
    const response = await this.client.request(`playlists/${playlistId}/items`, {
      method: 'POST',
      body: new URLSearchParams({
        onArtifactNotFound: 'FAIL',
        onDupes,
        trackIds: trackId,
      }) as any,
      headers: {
        'If-None-Match': '*',
      },
    });
    return response as AddedSong;
  }

  /**
   * It deletes a song from a playlist
   * @param {string} playlistId - The id of the playlist you want to delete a song from
   * @param {number} index - The index of the song you want to delete
   * @param {OrderTypes} [order=INDEX] - OrderTypes = 'INDEX'
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC'
   * @returns Deleted.
   */
  public async deleteSong(
    playlistId: string,
    index: number,
    order: OrderTypes = 'INDEX',
    orderDirection: OrderDirections = 'ASC',
  ) {
    if (!playlistId) throw new Error('PlaylistId not specified');
    if (!index) throw new Error('Index not specified');
    const { numberOfTracks } = await this.getPlaylistInfos(playlistId);
    if (numberOfTracks <= 1) throw new Error('The playlist need to contain at least 2 tracks');
    const { items } = await this.getPlaylistSongs(playlistId);
    const response = await this.client.request(`playlists/${playlistId}/items/${index}`, {
      method: 'DELETE',
      headers: {
        'If-None-Match': '*',
      },
      params: {
        order,
        orderDirection,
      },
    });
    if (!response) return { status: 'Success', playlistId, index, song: items[index].item } as Deleted;
    else return { status: 'Failed', playlistId, index } as Deleted;
  }
}
