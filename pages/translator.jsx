"use client";

import { useState } from "react";

export default function TranslatorPage() {
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: "Artificial Intelligence is the simulation of human intelligence in machines.",
        }),
      });

      const data = await res.json();
      setTranslated(data.translated);
    } catch (err) {
      setTranslated("Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Translate Blog Summary</h1>
      <button
        onClick={handleTranslate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Translating..." : "Translate to Urdu"}
      </button>

      {translated && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Translated Summary:</h2>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}
