// pages/api/scrape.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Combine text from paragraphs
    const paragraphs = $('p')
      .map((i, el) => $(el).text())
      .get()
      .join('\n\n');

    res.status(200).json({ content: paragraphs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape content' });
  }
}
