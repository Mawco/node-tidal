import { Client } from "..";
import Axios from 'axios';

export type orderTypes = 'INDEX' | 'NAME' | 'ARTIST' | 'ALBUM' | 'DATE' | 'LENGTH';
export type orderDirections = 'ASC' | 'DESC';
export type onDupes = 'FAIL' | 'ADD';

export class Playlists {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    public async getPlaylistInfos(playlistId: string): Promise<any> {
        if(!playlistId) throw new Error('PlaylistId not specified');
        
        try {
            const res = await Axios({
                url: `https://desktop.tidal.com/v1/playlists/${playlistId}?countryCode=FR`,
                headers: {
                    authorization: `Bearer ${this.client.token}`
                }
            });
            
            return res.data;   
        } catch (err) {
            throw err;
        }
    }

    public async getPlaylistSongs(playlistId: string, limit: number = 50, offset: number = 0, order: orderTypes = 'DATE', orderDirection: orderDirections = 'ASC') {
        if(!playlistId) throw new Error('PlaylistId not specified');

        try {
            const res = await Axios({
                url: `https://desktop.tidal.com/v1/playlists/${playlistId}/items?offset=${offset}&limit=${limit}&order=${order}&orderDirection=${orderDirection}&countryCode=FR`,
                headers: {
                    authorization: `Bearer ${this.client.token}`
                }
            });
            
            return res.data;   
        } catch (err) {
            throw err;
        }
    }

    public async addSong(playlistId: string, trackId: string, onDupes: onDupes = 'FAIL',) {
        if(!playlistId) throw new Error('PlaylistId not specified');
        if(!trackId) throw new Error('trackId not specified');

        try {
            const res = await Axios({
                url: `https://desktop.tidal.com/v1/playlists/${playlistId}/items?countryCode=FR`,
                method: 'post',
                headers: {
                    'authorization': `Bearer ${this.client.token}`,
                    'If-None-Match': '*'
                },
                data: new URLSearchParams({
                    onArtifactNotFound: 'FAIL',
                    onDupes,
                    trackIds: trackId
                  })
            });
            
            return res.data;   
        } catch (err) {
            throw err;
        }
    }

    public async deleteSong(playlistId: string, index: number, order: orderTypes = 'DATE', orderDirection: orderDirections = 'ASC') {
        if(!playlistId) throw new Error('PlaylistId not specified');
        if(!index) throw new Error('index not specified');
        
        try {
            const res = await Axios({
                url: `https://desktop.tidal.com/v1/playlists/${playlistId}/items/${index}?countryCode=FR`,
                method: 'delete',
                headers: {
                    'authorization': `Bearer ${this.client.token}`,
                    'If-None-Match': '*'
                }
            });
            
            if (this.client.options.debug) {
                console.log(res.status, res.statusText, res.headers, res.config, res.data)
            }
            return res.data;   
        } catch (err) {
            throw new Error(err);
        }
    }
}