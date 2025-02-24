import { MongoClient } from "mongodb";
import { Song } from "./components/chart/ChartTable";

export type ChartAgreegation = {
    agreegation: Array<ChartItem>;
};

type ChartItem = {
    platform: string;
    type: string;
    items: Array<Song>;
    timestamp: string;
};

let client: MongoClient | null = null;
const cache: { [key: string]: ChartAgreegation } = {};

async function getMongoClient() {
    if (!client) {
        client = new MongoClient(
          "mongodb+srv://service_readonly_db_user:8sGfklmdfABM72Cd@vipwave.lruc9.mongodb.net/?retryWrites=true&w=majority&appName=vipwave"
        );
    }
    return client;
}

function getCurrentTimeKey(): string {
    const now = new Date();
    console.log("now = ", now);
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}`;
}

export async function loadPosts() {
    const currentTimeKey = getCurrentTimeKey();
    console.log("currentTimeKey = ", currentTimeKey, cache);

    // Check if data is in cache
    if (cache[currentTimeKey]) {
        console.log("HIT")
        return cache[currentTimeKey];
    }

    console.log("MISS")

    const client = await getMongoClient();
    await client.connect();
    const db = client.db("music_charts");
    const collection = db.collection("charts");

    try {
        const data = (await collection.findOne({ id: "vip-wave" })) as unknown as ChartAgreegation || { agreegation: [] };

        // Invalidate old cache and set new cache
        Object.keys(cache).forEach(key => delete cache[key]);
        cache[currentTimeKey] = data;

        return data;
    } catch (e) {
        console.log("e =", e);
        return { agreegation: [] };
    } finally {
        await client.close();
    }
}