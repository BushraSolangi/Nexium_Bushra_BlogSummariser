const dictionary = {
  artificial: "مصنوعی",
  intelligence: "ذہانت",
  is: "ہے",
  the: "یہ",
  simulation: "نقل",
  of: "کا",
  human: "انسانی",
  in: "میں",
  machines: "مشینیں",
  climate: "آب و ہوا",
  change: "تبدیلی",
  refers: "کہلاتا ہے",
  to: "کو",
  long: "طویل",
  term: "مدتی",
  alterations: "تبدیلیاں",
  weather: "موسم",
  patterns: "پیٹرن",
  caused: "پیدا کردہ",
  by: "کی طرف سے",
  activities: "سرگرمیاں",
  blockchain: "بلاک چین",
  decentralized: "غیر مرکزی",
  digital: "ڈیجیٹل",
  ledger: "رجسٹر",
  used: "استعمال ہوتا ہے",
  for: "کے لیے",
  secure: "محفوظ",
  transactions: "لین دین",
  mental: "ذہنی",
  health: "صحت",
  emotional: "جذباتی",
  psychological: "نفسیاتی",
  social: "سماجی",
  well: "فلاح",
  being: "بہبود",
  cybersecurity: "سائبر سیکیورٹی",
  protects: "تحفظ کرتا ہے",
  data: "ڈیٹا",
  systems: "نظام",
  from: "سے",
  cyberattacks: "سائبر حملے",
  unauthorized: "غیر مجاز",
  access: "رسائی",
  online: "آن لائن",
  education: "تعلیم",
  provides: "فراہم کرتا ہے",
  flexibility: "لچک",
  learners: "سیکھنے والے",
  using: "استعمال کرتے ہوئے",
  tools: "اوزار",
  internet: "انٹرنیٹ",
  electricity: "بجلی",
  instead: "کی بجائے",
  fuel: "ایندھن",
  help: "مدد دیتی ہیں",
  reduce: "کم کرنا",
  pollution: "آلودگی",
  clean: "صاف",
  energy: "توانائی",
  sources: "ذرائع",
  like: "جیسے",
  solar: "شمسی",
  wind: "ہوا",
  impact: "اثر",
  machine: "مشین",
  learning: "سیکھنا",
  enables: "قابل بناتی ہے",
  computers: "کمپیوٹرز",
  learn: "سیکھتے ہیں",
  improve: "بہتر بناتے ہیں",
  performance: "کارکردگی",
  remote: "ریموٹ",
  work: "کام",
  allows: "اجازت دیتا ہے",
  employees: "ملازمین",
  home: "گھر",
  collaboration: "تعاون"
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const translated = text
    .split(/\s+/)
    .map((word) =>
      dictionary[word.toLowerCase().replace(/[.,]/g, "")] || word
    )
    .join(" ");

  return res.status(200).json({ translated });
}
