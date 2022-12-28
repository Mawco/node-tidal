export type OrderTypes = 'INDEX' | 'NAME' | 'ARTIST' | 'ALBUM' | 'DATE' | 'LENGTH';
export type OrderDirections = 'ASC' | 'DESC';
export type OnDupes = 'FAIL' | 'ADD';
export type searchType = 'artists' | 'albums' | 'tracks' | 'videos' | 'playlists' | 'artists,albums,tracks,videos,playlists';
export type audioQuality = 'LOW' | 'HIGH' | 'LOSSLESS' | 'HI_RES';

export enum AudioQualityEnum {
  Low = 'LOW',
  High = 'HIGH',
  Lossless = 'LOSSLESS',
  HiRes = 'HI_RES',
}

export enum PlaybackModeEnum {
  Stream = 'STREAM',
  Offline = 'OFFLINE',
}

export enum AssetPresentationEnum {
  Full = 'FULL',
  Preview = 'PREVIEW',
}

export enum ImageResolutionEnum {
  Small = '160x160',
  Medium = '320x320',
  Large = '480x480',
  XLarge = '640x640',
  XXLarge = '750x750',
  XXXLarge = '1080x1080',
}
