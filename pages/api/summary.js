export default function handler(req, res) {
  

  const { topic } = req.body;

  const summaries = {
    "Artificial Intelligence":
      "Artificial Intelligence is the simulation of human intelligence in machines.",
    "Climate Change":
      "Climate change refers to long-term alterations in weather patterns caused by human activities.",
    "Blockchain":
      "Blockchain is a decentralized digital ledger used for secure transactions.",
    "Mental Health":
      "Mental health involves emotional, psychological, and social well-being.",
    "Cybersecurity":
      "Cybersecurity protects data and systems from cyberattacks and unauthorized access.",
    "Online Education":
      "Online education provides flexibility for learners using digital tools and internet access.",
    "Electric Vehicles":
      "Electric vehicles use electricity instead of fuel and help reduce pollution.",
    "Clean Energy":
      "Clean energy sources like solar and wind reduce environmental impact.",
    "Machine Learning":
      "Machine learning enables computers to learn from data and improve their performance.",
    "Remote Work":
      "Remote work allows employees to work from home using digital collaboration tools.",
  };

  const summary = summaries[topic] || "No summary available for this topic.";
  return res.status(200).json({ summary });
}
