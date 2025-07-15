export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { url } = req.body;

  if (!url) return res.status(400).json({ message: 'URL is required' });

  // Simulate summary
  const summary = `This is a useful article from ${url} that provides new insights on technology.`;

  res.status(200).json({ summary });
}
