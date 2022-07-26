export type OrderTypes = 'INDEX' | 'NAME' | 'ARTIST' | 'ALBUM' | 'DATE' | 'LENGTH';
export type OrderDirections = 'ASC' | 'DESC';
export type OnDupes = 'FAIL' | 'ADD';
export type searchType = 'artists' | 'albums' | 'tracks' | 'videos' | 'playlists';

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

export interface TidalAlbum {
  id: number;
  title: string;
  duration: number;
  streamReady: boolean;
  streamStartDate: string;
  allowStreaming: boolean;
  premiumStreamingOnly: boolean;
  numberOfTracks: number;
  numberOfVideos: number;
  numberOfVolumes: number;
  releaseDate: string;
  copyright: string;
  type: string;
  version: string | number | null;
  url: string;
  cover: string;
  vibrantColor: string;
  videoCover: string | null;
  explicit: boolean;
  upc: string;
  popularity: number;
  audioQuality: string;
  audioModes: string[];
  artist: {
    id: number;
    name: string;
    type: string;
  };
  artists: Artist[];
}

export interface Artist {
  id: number;
  name: string;
  type: string;
  picture?: string;
}

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

export interface TidalTrack {
  limit: number;
  offset: number;
  totalNumberOfItems: number;
  items: [{ item: Track; type: string; cut: string | number | null }];
}

export interface AddedTrack {
  lastUpdated: number;
  addedItemIds: number[];
}

export interface Deleted {
  status: string;
  playlistId?: string;
  folderId?: string;
  index?: number;
  playlist?: TidalPlaylist;
  song?: Track;
}

export interface CreatedPlaylist {
  trn: string;
  itemType: string;
  addedAt: string;
  lastModifiedAt: string;
  name: string;
  parent: string | number | null;
  data: {
    uuid: string;
    type: string;
    creator: { id: string; name: string | null; picture: string | null; type: string };
    contentBehavior: string;
    sharingLevel: string;
    title: string;
    description: string;
    image: string;
    squareImage: string;
    url: string;
    created: string;
    lastUpdated: string;
    lastItemAddedAt: string;
    duration: number;
    numberOfTracks: number;
    numberOfVideos: number;
    promotedArtists: string[];
    trn: string;
    itemType: string;
  };
}
