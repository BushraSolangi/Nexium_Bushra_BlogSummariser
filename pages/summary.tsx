import { summaries } from "../utils/summaries";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Only POST allowed" });

  const { topic } = req.body;

  if (!topic || !summaries[topic]) {
    return res.status(400).json({ message: "Topic not found or missing" });
  }

  return res.status(200).json({ summary: summaries[topic] });
}
