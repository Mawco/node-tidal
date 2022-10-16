export type Country =
  | 'FR'
  | 'BE'
  | 'EN'
  | 'BG'
  | 'DE'
  | 'DK'
  | 'ES'
  | 'HR'
  | 'IT'
  | 'NO'
  | 'PL'
  | 'PT'
  | 'SE'
  | 'SL'
  | 'SR'
  | 'TR'
  | 'US';

export type Methods = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export type Versions = 'v1' | 'v2';

export type Modes = 'api' | 'desktop';

export interface ClientOptions {
  token: string;
  countryCode: Country;
}

export interface RequestOptions {
  modes?: Modes;
  versions?: Versions;
  headers?: Record<string, string>;
  method?: Methods;
  params?: Record<string, any>;
  body?: Record<string, string | boolean | number | (string | boolean | number)[]>;
}
