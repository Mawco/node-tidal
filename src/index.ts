import { Playlists } from "./api/playlists";

type Options = { debug: boolean }

export class Client {
    public token: String;
    public playlists: Playlists;
    public options: Options

    constructor(token, options: Options = { debug: false }) {
        this.token = token;
        this.options = options;

        this.playlists = new Playlists(this)
    }
}