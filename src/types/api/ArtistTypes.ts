import { Track } from './index.js';

export interface Artist {
  id: number;
  name: string;
  artistTypes: string[];
  url: string;
  picture: string;
  popularity: number;
  artistRoles: ArtistRole[];
  mixes: {
    MASTER_ARTIST_MIX: string;
    ARTIST_MIX: string;
  };
}

export interface ArtistTracks {
  item: Track;
  type: string;
  cut: string | number | null;
}

export interface ArtistBio {
  source: string;
  lastUpdated: number | Date;
  text: string;
  summary: string;
}

export interface ArtistRole {
  categoryId: number;
  category: string;
}

export interface ArtistMix {
  id: number;
}
