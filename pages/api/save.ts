// pages/api/save.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../client/mongodb';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // or use anon key if no RLS
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { url, summary } = req.body;

  if (!url || !summary) {
    return res.status(400).json({ error: 'Missing url or summary' });
  }

  try {
    // Save full blog summary in MongoDB
    const db = await connectToDatabase();
    await db.collection('summaries').insertOne({ url, summary });

    // Save AI summary in Supabase
    const { error } = await supabase.from('summaries').insert([{ url, summary }]);
    if (error) throw error;

    res.status(200).json({ message: 'Saved successfully' });
  } catch (err) {
    console.error('❌ Save failed:', err);
    res.status(500).json({ error: 'Saving failed' });
  }
}
