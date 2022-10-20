import { Track, TrackArtist } from './TrackTypes.js';

export interface Album {
  id: number;
  title: string;
  duration: number;
  streamReady: true;
  streamStartDate: number | Date;
  allowStreaming: true;
  premiumStreamingOnly: false;
  numberOfTracks: number;
  numberOfVideos: number;
  numberOfVolumes: number;
  releaseDate: number | Date;
  copyright: string;
  type: string;
  version: string | number | null;
  url: string;
  cover: string;
  vibrantColor: string;
  videoCover: string | null;
  explicit: false;
  upc: string;
  popularity: number;
  audioQuality: string;
  audioModes: string[];
  artist: TrackArtist;
  artists: TrackArtist[];
}

export interface AlbumCredits {
  type: string;
  contributors: Contributor[];
}

export interface AlbumTracksWithCredits {
  item: Track;
  type: string;
  credits: [
    {
      type: string;
      contributors: Contributor[];
    },
  ];
}

export interface Contributor {
  name: string;
  id?: number;
  role?: string;
}
