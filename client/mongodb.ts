// client/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb;

  try {
    await client.connect();
    cachedDb = client.db("blogSummariser");
    return cachedDb;
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
}
