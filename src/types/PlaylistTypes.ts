export type OrderTypes = 'INDEX' | 'NAME' | 'ARTIST' | 'ALBUM' | 'DATE' | 'LENGTH';
export type OrderDirections = 'ASC' | 'DESC';
export type OnDupes = 'FAIL' | 'ADD';

export interface TidalPlaylist {
  uuid: string;
  title: string;
  numberOfTracks: number;
  numberOfVideos: number;
  creator: { id: number };
  description: string;
  duration: number;
  lastUpdated: string;
  created: string;
  type: string;
  publicPlaylist: boolean;
  url: string;
  image: string;
  popularity: number;
  squareImage: string;
  promotedArtists: string[];
  lastItemAddedAt: string;
}

export interface Artist {
  id: number;
  name: string;
  type: string;
  picture: string;
}

export interface Song {
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
  description: string | number | null;
  url: string;
  isrc: string;
  editable: boolean;
  explicit: boolean;
  audioQuality: string;
  audioModes: string[];
  artist: {
    id: number;
    name: string;
    type: string;
    picture: string;
  };
  artists: [Artist[]];
  album: {
    id: number;
    title: string;
    cover: string;
    vibrantColor: string;
    videoCover: string | number | null;
    releaseDate: string;
  };
  mixes: {
    MASTER_TRACK_MIX: string;
    TRACK_MIX: string;
  };
  dateAdded: string;
  index: number;
  itemUuid: string;
}

export interface TidalSong {
  limit: number;
  offset: number;
  totalNumberOfItems: number;
  items: [{ item: Song; type: string; cut: string | number | null }];
}

export interface AddedSong {
  lastUpdated: number;
  addedItemIds: number[];
}
