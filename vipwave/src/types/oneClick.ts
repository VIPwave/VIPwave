export type DeviceType = 'ANDROID' | 'IPHONE' | 'IPAD' | 'WINDOWS' | 'MAC';

export interface LinkGroup {
  deviceType: DeviceType;
  links: string[];
}

export type PlatformType = 'Melon' | 'Genie' | 'Bugs' | 'Vibe' | 'Flo' | 'Apple Music' | 'YouTube Music' | 'YouTube' | 'Spotify';

export type ChartType = 'DOMESTIC' | 'GLOBAL';
export interface PlatformData {
  id: number;
  platform: PlatformType;
  logo: string;
  chartType: ChartType;
  links: LinkGroup[];
  staffNo: string;
  updatedAt: string;
}

export type OneClickLinksResponse = {
  data: PlatformData[];
  code: number;
  message: string;
};

