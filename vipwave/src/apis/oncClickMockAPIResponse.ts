import { PlatformData, ChartType, DeviceType } from "@/types/oneClick";

export const MOCK_ONECLICK_DATA: PlatformData[] = [
    {
        id: 1,
        platform: "Melon",
        logo: "/icons/melon.png",
        chartType: "DOMESTIC" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 12:00",
        links: [
            {
                deviceType: "ANDROID" as DeviceType,
                links: [
                    "https://iii.ad/8064d9",
                    "https://iii.ad/cb6246",
                    "https://iii.ad/5cefac",
                    "https://iii.ad/aabe05",
                    "https://iii.ad/125b04",
                    "https://iii.ad/8d73ef"
                ],
            },
            {
                deviceType: "IPHONE" as DeviceType,
                links: ["https://iii.ad/4169e9"],
            },
            {
                deviceType: "IPAD" as DeviceType,
                links: ["https://iii.ad/bb40e0"]
            },
            {
                deviceType: "WINDOWS" as DeviceType,
                links: [
                    "https://iii.ad/ab0830",
                    "https://iii.ad/96304b",
                    "https://iii.ad/cb04ac",
                    "https://iii.ad/4b2c2b",
                    "https://iii.ad/5b50c9",
                    "https://iii.ad/3c1ae8"
                ],
            },
            {
                deviceType: "MAC" as DeviceType,
                links: [
                    "https://iii.ad/ac1252",
                    "https://iii.ad/b56feb",
                    "https://iii.ad/bec306",
                    "https://iii.ad/8b3aab",
                    "https://iii.ad/cadab9",
                    "https://iii.ad/7abda3"
                ],
            },
        ],
    },
    {
        id: 2,
        platform: "Bugs",
        logo: "/icons/bugs.png",
        chartType: "DOMESTIC" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 12:15",
        links: [
            {
                deviceType: "ANDROID" as DeviceType,
                links: ["https://iii.ad/83319c"],
            },
            {
                deviceType: "IPHONE" as DeviceType,
                links: ["https://iii.ad/83319c"],
            },
            {
                deviceType: "IPAD" as DeviceType,
                links: ["https://iii.ad/83319c"],
            },
            {
                deviceType: "WINDOWS" as DeviceType,
                links: ["https://iii.ad/f29233"]
            },
            {
                deviceType: "MAC" as DeviceType,
                links: ["https://iii.ad/f29233"]
            }
        ],
    },
    {
        id: 3,
        platform: "Genie",
        logo: "/icons/genie.png",
        chartType: "DOMESTIC" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 12:10",
        links: [
            {
                deviceType: "ANDROID" as DeviceType,
                links: ["https://iii.ad/ff9f86"],
            },
            {
                deviceType: "IPHONE" as DeviceType,
                links: ["https://iii.ad/7e04f0"],
            },
            {
                deviceType: "IPAD" as DeviceType,
                links: ["https://iii.ad/7e04f0"],
            },
            {
                deviceType: "WINDOWS" as DeviceType,
                links: ["https://iii.ad/888d91"],
            },
            {
                deviceType: "MAC" as DeviceType,
                links: ["https://iii.ad/888d91"],
            },
        ],
    },
    {
        id: 4,
        platform: "Vibe",
        logo: "/icons/vibe.png",
        chartType: "DOMESTIC" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 12:30",
        links: [
            {
                deviceType: "ANDROID" as DeviceType,
                links: [
                    "https://iii.ad/ce922c",
                    "https://iii.ad/5925bb",
                    "https://iii.ad/2cf1f6",
                    "https://iii.ad/67d76a",
                    "https://iii.ad/a52be1",
                    "https://iii.ad/f7608d"
                ],
            },
            {
                deviceType: "IPHONE" as DeviceType,
                links: [
                    "https://iii.ad/ce922c",
                    "https://iii.ad/5925bb",
                    "https://iii.ad/2cf1f6",
                    "https://iii.ad/67d76a",
                    "https://iii.ad/a52be1",
                    "https://iii.ad/f7608d"
                ],
            },
            {
                deviceType: "IPAD" as DeviceType,
                links: [
                    "https://iii.ad/ce922c",
                    "https://iii.ad/5925bb",
                    "https://iii.ad/2cf1f6",
                    "https://iii.ad/67d76a",
                    "https://iii.ad/a52be1",
                    "https://iii.ad/f7608d"
                ],
            }
        ],
    },
    {
        id: 5,
        platform: "Flo",
        logo: "/icons/flo.png",
        chartType: "DOMESTIC" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 12:20",
        links: [
            {
                deviceType: "ANDROID" as DeviceType,
                links: ["https://iii.ad/5a1539"],
            },
            {
                deviceType: "IPHONE" as DeviceType,
                links: ["https://iii.ad/5a1539"],
            },
            {
                deviceType: "IPAD" as DeviceType,
                links: ["https://iii.ad/5a1539"],
            },
            {
                deviceType: "MAC" as DeviceType,
                links: ["https://iii.ad/5a1539"],
            },
        ],
    },
    {
        id: 6,
        platform: "Spotify",
        logo: "/icons/spotify.png",
        chartType: "GLOBAL" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 13:20",
        links: (['ANDROID','IPHONE','IPAD','WINDOWS','MAC'] as DeviceType[]).map(d => ({
            deviceType: d,
            links: [
                "https://open.spotify.com/playlist/0SRJ4lqBswGsTu3LQJ5dje?si=A-uNGK12QqizKVmu6vbw5Q"
            ]
        }))
    },

    {
        id: 7,
        platform: "Apple Music",
        logo: "/icons/appleMusic.png",
        chartType: "GLOBAL" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 13:10",
        links: (['ANDROID','IPHONE','IPAD','WINDOWS','MAC'] as DeviceType[]).map(d => ({
            deviceType: d,
            links: [
                "https://music.apple.com/kr/playlist/%C3%BCbermensch/pl.u-leyl09ATM6JD50p"
            ]
        }))
    },

    {
        id: 8,
        platform: "YouTube Music",
        logo: "/icons/youtubeMusic.png",
        chartType: "GLOBAL" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 13:10",
        links: (['ANDROID','IPHONE','IPAD','WINDOWS','MAC'] as DeviceType[]).map(d => ({
            deviceType: d,
            links: [
                "https://music.youtube.com/playlist?list=PL7Q0IDeVJ8kS3HoGBiajTRNV5deo8wMHA&si=fVz_WhTuRlOjt0fJ"
            ]
        }))

    },
    {
        id: 9,
        platform: "YouTube",
        logo: "/icons/youtube.png",
        chartType: "GLOBAL" as ChartType,
        staffNo: "7",
        updatedAt: "2025-10-09 13:00",
        links: (['ANDROID','IPHONE','IPAD','WINDOWS','MAC'] as DeviceType[]).map(d => ({
            deviceType: d,
            links: [
                "https://youtube.com/playlist?list=PL7Q0IDeVJ8kS3HoGBiajTRNV5deo8wMHA&feature=shared"
            ]
        }))
    },
];
