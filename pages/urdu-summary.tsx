"use client";
import { useState } from "react";
//import { translateParagraph } from "../utils/translator";

export default function TranslatorPage() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = () => {
   //const result = translateParagraph(input);
    //setTranslated(result);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">AI Text Translator</h1>

        <textarea
          className="w-full p-3 border border-gray-300 rounded"
          rows={4}
          placeholder="Enter Urdu or English text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleTranslate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Translate
        </button>

        {translated && (
          <div className="bg-white p-4 rounded shadow-md border mt-4">
            <h2 className="text-xl font-semibold mb-2">Translation Result</h2>
            <p className="text-lg">{translated}</p>
          </div>
        )}
      </div>
    </div>
  );
}
