"use client";

import { useState } from "react";
import { summaries } from "../utils/summaries";
import Link from "next/link";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [summary, setSummary] = useState("");
  const [urdu, setUrdu] = useState("");

  const handleSummarize = () => {
    if (!selectedTopic) return;
    setSummary(summaries[selectedTopic].en);
    setUrdu("");
  };

  const handleShowUrdu = () => {
    if (!selectedTopic) return;
    setUrdu(summaries[selectedTopic].ur);
  };

  return (
    <div
      className="h-screen w-screen absolute"
      style={{
        width:1505,
        height:722,
        backgroundImage: "url('/bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"red"
      }}
    >
      <div
        className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white"
        style={{
          position: "absolute",
          left: 400,
          top: 300,
          color:"white"
        }}
      >
        <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold text-blue-700">
            📝 Blog Summarizer with Urdu Translation
          </h1>

          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              position: "absolute",
              left: 10,
              width: "280px",
              height: "30px",
            }}
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="">Select a Topic</option>
            {Object.keys(summaries).map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>

          <button
            onClick={handleSummarize}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            style={{
              position: "absolute",
              left: 300,
              height: "30px",
              width: 180,
            }}
          >
            Show English Summary
          </button>

          {summary && (
            <div
              className="bg-gray-50 p-4 rounded border text-left space-y-4"
              style={{
                position: "absolute",
                top: 120,
              }}
            >
              <h2
                className="text-xl font-semibold text-gray-800"
                style={{
                  position: "absolute",
                  top: 50,
                }}
              >
                English Summary
              </h2>
              <p className="text-gray-700">{summary}</p>

              <button
                onClick={handleShowUrdu}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                style={{
                  position: "absolute",
                  top: 120,
                }}
              >
                Show Urdu Translation
              </button>

              {urdu && (
                <div className="mt-4 text-right">
                  <h2
                    className="text-xl font-semibold text-gray-800"
                    style={{
                      position: "absolute",
                      top: 140,
                    }}
                  >
                    Urdu Translation
                  </h2>
                  <p
                    dir="rtl"
                    className="text-lg text-gray-800"
                    style={{
                      position: "absolute",
                      top: 190,
                    }}
                  >
                    {urdu}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ✅ Add the button to navigate to blog list */}
          <Link href="/blogs">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            style={{
                      position: "absolute",
                      top: 85,
                      left:490,
                      width:120,
                      height:30
                    }}>
              Go to Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
