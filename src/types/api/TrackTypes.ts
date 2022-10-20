import { audioQuality } from '../TidalTypes';

export interface Track {
  id: number;
  title: string;
  duration: number;
  replayGain: number;
  peak: number;
  allowStreaming: boolean;
  streamReady: boolean;
  streamStartDate: string;
  premiumStreamingOnly: boolean;
  trackNumber: number;
  volumeNumber: number;
  version: string | number | null;
  popularity: number;
  copyright: string;
  url: string;
  isrc: string;
  editable: boolean;
  explicit: boolean;
  audioQuality: audioQuality;
  audioModes: string[];
  artist: TrackArtist;
  artists: TrackArtist[];
  album: TrackAlbum;
  mixes: {
    TRACK_MIX: string;
  };
  dateAdded?: number | Date;
  index?: number;
  itemUuid?: string;
}

export interface TrackArtist {
  id: number;
  name: string;
  type: string;
}

export interface TrackAlbum {
  id: number;
  title: string;
  cover: string;
  videoCover: string | null;
}
