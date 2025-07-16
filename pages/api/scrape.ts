// pages/api/scrape.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const paragraphs = $('p')
      .map((i, el) => $(el).text().trim())
      .get()
      .slice(0, 50) // optional: limit to first 50 paragraphs
      .join('\n\n');

    res.status(200).json({ content: paragraphs });
  } catch (error) {
    console.error("❌ Scraping failed:", error);
    res.status(500).json({ error: 'Failed to scrape content' });
  }
}
