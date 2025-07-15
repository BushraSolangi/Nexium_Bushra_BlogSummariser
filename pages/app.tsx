"use client";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      
      <div
        className="relative z-10 bg-white bg-opacity-80 rounded-xl p-6 shadow-lg"
        style={{
          position: "absolute",
          left: 400,
          top: 300,
          width: "2000px", // Change if needed
          height: "auto",
        }}
      >
      </div>
    </div>
  );
}
