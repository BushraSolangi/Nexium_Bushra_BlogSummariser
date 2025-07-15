// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* 🔽 Background Image */}
      <img
        src="/bg.avif"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* 🔼 Foreground content with your requested style */}
      <div
        className="relative z-10 bg-white bg-opacity-80 rounded-xl p-6 shadow-lg"
        style={{
          position: "absolute",
          left: 400,
          top: 300,
          width: "2000px", // or any width you want
          height: "auto",  // auto lets content determine height
        }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}
