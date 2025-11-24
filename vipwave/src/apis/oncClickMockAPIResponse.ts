import { PlatformData, ChartType, DeviceType } from '@/types/oneClick';

export const MOCK_ONECLICK_DATA: PlatformData[] = [
  {
    id: 1,
    platform: 'Melon',
    logo: '/icons/melon.png',
    chartType: 'DOMESTIC' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 12:00',
    links: [
      {
        deviceType: 'ANDROID' as DeviceType,
        links: [
          'https://iii.ad/caa60f',
          'https://iii.ad/4fe5ca',
          'https://iii.ad/33447b',
          'https://iii.ad/43d084',
          'https://iii.ad/913447',
          'https://iii.ad/a448bd',
        ],
      },
      {
        deviceType: 'IPHONE' as DeviceType,
        links: ['https://iii.ad/f95054'],
      },
      {
        deviceType: 'IPAD' as DeviceType,
        links: ['https://iii.ad/fd3aab'],
      },
      {
        deviceType: 'WINDOWS' as DeviceType,
        links: [
          'https://iii.ad/887c3c',
          'https://iii.ad/6328c1',
          'https://iii.ad/b535af',
          'https://iii.ad/242031',
          'https://iii.ad/d24ae3',
          'https://iii.ad/5f4db3',
        ],
      },
      {
        deviceType: 'MAC' as DeviceType,
        links: [
          'https://iii.ad/8a7555',
          'https://iii.ad/18a04d',
          'https://iii.ad/97b91a',
          'https://iii.ad/a3b2a4',
          'https://iii.ad/5d040d',
          'https://iii.ad/a715e2',
        ],
      },
    ],
  },
  {
    id: 2,
    platform: 'Bugs',
    logo: '/icons/bugs.png',
    chartType: 'DOMESTIC' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 12:15',
    links: [
      {
        deviceType: 'ANDROID' as DeviceType,
        links: ['https://iii.ad/345b94'],
      },
      {
        deviceType: 'IPHONE' as DeviceType,
        links: ['https://iii.ad/345b94'],
      },
      {
        deviceType: 'IPAD' as DeviceType,
        links: ['https://iii.ad/345b94'],
      },
      {
        deviceType: 'WINDOWS' as DeviceType,
        links: ['https://iii.ad/e78489'],
      },
      {
        deviceType: 'MAC' as DeviceType,
        links: ['https://iii.ad/e78489'],
      },
    ],
  },
  {
    id: 3,
    platform: 'Genie',
    logo: '/icons/genie.png',
    chartType: 'DOMESTIC' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 12:10',
    links: [
      {
        deviceType: 'ANDROID' as DeviceType,
        links: ['https://iii.ad/bdf126'],
      },
      {
        deviceType: 'IPHONE' as DeviceType,
        links: ['https://iii.ad/2f39e3'],
      },
      {
        deviceType: 'IPAD' as DeviceType,
        links: ['https://iii.ad/2f39e3'],
      },
      {
        deviceType: 'WINDOWS' as DeviceType,
        links: ['https://iii.ad/ca6666'],
      },
      {
        deviceType: 'MAC' as DeviceType,
        links: ['https://iii.ad/ca6666'],
      },
    ],
  },
  {
    id: 4,
    platform: 'Vibe',
    logo: '/icons/vibe.png',
    chartType: 'DOMESTIC' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 12:30',
    links: [
      {
        deviceType: 'ANDROID' as DeviceType,
        links: [
          'https://iii.ad/5cd7da',
          'https://iii.ad/ead82e',
          'https://iii.ad/db7b19',
          'https://iii.ad/ad4829',
          'https://iii.ad/eda777',
          'https://iii.ad/9e3951',
        ],
      },
      {
        deviceType: 'IPHONE' as DeviceType,
        links: [
          'https://iii.ad/84cfee',
          'https://iii.ad/ead82e',
          'https://iii.ad/db7b19',
          'https://iii.ad/4789ea',
          'https://iii.ad/eda777',
          'https://iii.ad/9e3951',
        ],
      },
      {
        deviceType: 'IPAD' as DeviceType,
        links: [
          'https://iii.ad/84cfee',
          'https://iii.ad/ead82e',
          'https://iii.ad/db7b19',
          'https://iii.ad/4789ea',
          'https://iii.ad/eda777',
          'https://iii.ad/9e3951',
        ],
      },
    ],
  },
  {
    id: 5,
    platform: 'Flo',
    logo: '/icons/flo.png',
    chartType: 'DOMESTIC' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 12:20',
    links: [
      {
        deviceType: 'ANDROID' as DeviceType,
        links: ['https://iii.ad/00463b'],
      },
      {
        deviceType: 'IPHONE' as DeviceType,
        links: ['https://iii.ad/00463b'],
      },
      {
        deviceType: 'IPAD' as DeviceType,
        links: ['https://iii.ad/00463b'],
      },
      {
        deviceType: 'MAC' as DeviceType,
        links: ['https://iii.ad/00463b'],
      },
    ],
  },
  {
    id: 6,
    platform: 'Spotify',
    logo: '/icons/spotify.png',
    chartType: 'GLOBAL' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 13:20',
    links: (
      ['ANDROID', 'IPHONE', 'IPAD', 'WINDOWS', 'MAC'] as DeviceType[]
    ).map((d) => ({
      deviceType: d,
      links: [
        'https://open.spotify.com/playlist/0SRJ4lqBswGsTu3LQJ5dje?si=A-uNGK12QqizKVmu6vbw5Q',
      ],
    })),
  },

  {
    id: 7,
    platform: 'Apple Music',
    logo: '/icons/appleMusic.png',
    chartType: 'GLOBAL' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 13:10',
    links: (
      ['ANDROID', 'IPHONE', 'IPAD', 'WINDOWS', 'MAC'] as DeviceType[]
    ).map((d) => ({
      deviceType: d,
      links: [
        'https://music.apple.com/kr/playlist/%C3%BCbermensch/pl.u-leyl09ATM6JD50p',
      ],
    })),
  },

  {
    id: 8,
    platform: 'YouTube Music',
    logo: '/icons/youtubeMusic.png',
    chartType: 'GLOBAL' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 13:10',
    links: (
      ['ANDROID', 'IPHONE', 'IPAD', 'WINDOWS', 'MAC'] as DeviceType[]
    ).map((d) => ({
      deviceType: d,
      links: [
        'https://music.youtube.com/playlist?list=PL7Q0IDeVJ8kS3HoGBiajTRNV5deo8wMHA&si=fVz_WhTuRlOjt0fJ',
      ],
    })),
  },
  {
    id: 9,
    platform: 'YouTube',
    logo: '/icons/youtube.png',
    chartType: 'GLOBAL' as ChartType,
    staffNo: '7',
    updatedAt: '2025-10-09 13:00',
    links: (
      ['ANDROID', 'IPHONE', 'IPAD', 'WINDOWS', 'MAC'] as DeviceType[]
    ).map((d) => ({
      deviceType: d,
      links: [
        'https://youtube.com/playlist?list=PL7Q0IDeVJ8kS3HoGBiajTRNV5deo8wMHA&feature=shared',
      ],
    })),
  },
];
