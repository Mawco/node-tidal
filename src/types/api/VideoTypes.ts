import { TrackArtist } from './TrackTypes';

export interface Video {
  id: number;
  title: string;
  volumeNumber: number;
  trackNumber: number;
  releaseDate: number | Date;
  imagePath: string | null;
  imageId: string;
  duration: number;
  quality: string;
  streamReady: boolean;
  streamStartDate: number | Date;
  allowStreaming: boolean;
  explicit: boolean;
  popularity: number;
  type: string;
  adsUrl: string | null;
  adsPrePaywallOnly: boolean;
  artist: TrackArtist;
  artists: TrackArtist[];
  album: string | null;
}
