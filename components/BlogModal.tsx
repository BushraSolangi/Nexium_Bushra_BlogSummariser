"use client";

interface BlogModalProps {
  topic: string;
  summary: string;
  onClose: () => void;
}

export default function BlogModal({ topic, summary, onClose }: BlogModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 max-w-lg w-full rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-red-600"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{topic}</h2>
        <p className="text-gray-800">{summary}</p>
      </div>
    </div>
  );
}
