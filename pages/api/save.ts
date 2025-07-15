// pages/api/save.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { createClient } from '@supabase/supabase-js';

const mongoUri = process.env.MONGODB_URI!;
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, summary } = req.body;

  if (!url || !summary) {
    return res.status(400).json({ error: 'Missing url or summary' });
  }

  try {
    // Save to MongoDB
    const client = await MongoClient.connect(mongoUri);
    const db = client.db('blogSummaries');
    await db.collection('summaries').insertOne({ url, summary });
    client.close();

    // Save to Supabase
    const { error } = await supabase.from('summaries').insert([{ url, summary }]);
    if (error) throw error;

    res.status(200).json({ message: 'Saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Saving failed' });
  }
}
