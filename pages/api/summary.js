// pages/api/summary.js
import { connectToDatabase } from '../../client/mongodb'; // Adjust path if needed

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection('summaries');

    const { topic } = req.query;

    if (topic && typeof topic === 'string') {
      const result = await collection.findOne({ topic });
      if (!result) return res.status(404).json({ message: 'Topic not found' });
      return res.status(200).json(result);
    }

    const all = await collection.find({}).toArray();
    res.status(200).json(all);
  } catch (error) {
    console.error('❌ Error fetching summaries:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
