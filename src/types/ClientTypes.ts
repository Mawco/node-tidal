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
  | 'TR';

export type Methods = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export interface ClientOptions {
  token: string;
  countryCode?: Country;
  debug?: boolean;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  method?: Methods;
  params?: Record<string, any>;
  body?: Record<string, string | boolean | number | URLSearchParams | (string | boolean | number)[]>;
}
