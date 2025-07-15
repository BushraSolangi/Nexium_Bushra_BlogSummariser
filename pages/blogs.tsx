"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import BlogModal from "../components/BlogModal";
import { summaries } from "../utils/summaries"; // Adjust path if using TS

const blogsPerPage = 5;

export default function BlogsPage() {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = Object.keys(summaries).filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTopics.length / blogsPerPage);
  const currentTopics = filteredTopics.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

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
  <div className=" h-screen w-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4"
  style={{
          position: "absolute",
          left: 400,
          top: 100,
          color:"white"
        }}
  >
    <div className=" w-full max-w-4xl bg-white shadow-xl rounded-xl p-8 space-y-6">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.back()}
        className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-center text-blue-700">
        📚 Blog Summaries
      </h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search blog topic..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* 📦 Blog Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentTopics.map((topic) => (
          <div
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className="cursor-pointer bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700">{topic}</h2>
            <p className="text-gray-600 mt-2">
              {summaries[topic].en.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap"
      style={{
          position: "absolute",
          left: 200,
          top: 600,
        }}
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-4 py-2 rounded ${
              num === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>

   

  </div>
</div>
);

}
