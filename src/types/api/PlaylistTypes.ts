import { Track, TrackArtist } from './TrackTypes.js';

export interface Playlist {
  uuid: string;
  title: string;
  numberOfTracks: number;
  numberOfVideos: number;
  creator: TrackArtist;
  description: string;
  duration: number;
  lastUpdated: number | Date;
  created: string;
  type: string;
  publicPlaylist: boolean;
  url: string;
  image: string;
  popularity: number;
  squareImage: string;
  promotedArtists: TrackArtist[];
  lastItemAddedAt: string;
}

export interface PlaylistTracks {
  item: Track;
  type: string;
  cut: string | number | null;
}

export interface PlaylistFolders {
  addedAt: string;
  data: Data;
  itemType: ItemType;
  lastModifiedAt: string;
  name: string;
  parent: string | null;
  trn: string;
}

export interface Data {
  contentBehavior?: ContentBehavior;
  created?: string;
  createdAt?: string;
  creator?: Creator;
  description?: string;
  duration?: number;
  id?: string;
  image?: string;
  itemType: ItemType;
  lastItemAddedAt?: string;
  lastModifiedAt?: string;
  lastUpdated?: number | Date;
  name?: string;
  numberOfTracks?: number;
  numberOfVideos?: number;
  promotedArtists?: any[];
  sharingLevel?: SharingLevel;
  squareImage?: string;
  title?: string;
  totalNumberOfItems?: number;
  trn: string;
  type?: Type;
  url?: string;
  uuid?: string;
}

export enum ContentBehavior {
  Unrestricted = 'UNRESTRICTED',
}

export interface Creator {
  id: number;
  name: string;
  picture: null;
  type: Type;
}

export enum Type {
  User = 'USER',
}

export enum ItemType {
  Folder = 'FOLDER',
  Playlist = 'PLAYLIST',
}

export enum SharingLevel {
  Private = 'PRIVATE',
}
