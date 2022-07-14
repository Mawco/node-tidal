import { Playlists } from "./api/playlists";

export class Client {
    public token: String;
    public playlists: Playlists;

    constructor(token) {
      this.token = token;

      this.playlists = new Playlists(this)
    }
}