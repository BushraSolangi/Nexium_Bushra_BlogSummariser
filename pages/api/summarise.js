// pages/api/summaries.js
export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });

  const { url } = req.body;

  if (!url)
    return res.status(400).json({ message: 'URL is required' });

  // Simulated AI summary
  const templates = [
    `This article from ${url} explores emerging trends in technology.`,
    `A must-read piece from ${url} offering key insights on innovation.`,
    `${url} provides a well-rounded overview of current tech developments.`,
    `An informative summary from ${url} covering important aspects of modern technology.`
  ];

  const summary = templates[Math.floor(Math.random() * templates.length)];

  res.status(200).json({ summary });
}
