import { Client } from "..";
import Axios from 'axios';

export class Playlists {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    public async getPlaylistInfos(playlistId: String): Promise<any> {
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
}