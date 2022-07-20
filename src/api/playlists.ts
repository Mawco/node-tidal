import { Client } from '..';

import { AddedSong, OnDupes, OrderDirections, OrderTypes, TidalPlaylist, TidalSong } from '../types';

export class Playlists {
  client: Client;

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
   * @returns An array of songs
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
   * It deletes a song from a playlist.
   * @param {string} playlistId - The ID of the playlist you want to delete a song from.
   * @param {number} index - The index of the song in the playlist
   * @param {OrderTypes} [order=INDEX] - OrderTypes = 'INDEX'
   * @param {OrderDirections} [orderDirection=ASC] - OrderDirections = 'ASC'
   * @returns The response from the server.
   */
  public async deleteSong(
    playlistId: string,
    index: number,
    order: OrderTypes = 'INDEX',
    orderDirection: OrderDirections = 'ASC',
  ) {
    if (!playlistId) throw new Error('PlaylistId not specified');
    if (!index) throw new Error('Index not specified');
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
    return response;
  }
}
