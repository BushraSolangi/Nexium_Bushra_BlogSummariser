// pages/history.tsx
"use client";
import { useEffect, useState } from "react";

interface BlogEntry {
  title: string;
  summary: string;
}

export default function HistoryPage() {
  const [entries, setEntries] = useState<BlogEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/save");
      const data = await res.json();
      setEntries(data.entries || []);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Saved History</h1>
        {entries.length === 0 ? (
          <p>No history found.</p>
        ) : (
          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div key={index} className="p-4 border rounded bg-white shadow">
                <h3 className="text-lg font-semibold">{entry.title}</h3>
                <p className="text-sm text-gray-700">{entry.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
