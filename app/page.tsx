"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("検索ワード:", query);
    // 後でAPI連携予定
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/fabric.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-12 rounded-2xl shadow-lg border-2 border-[#d4af37] text-center max-w-2xl mx-4">
        <h1 className="text-6xl font-serif text-[#d4af37] mb-6 tracking-wide">
          Laststock.jp
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-serif">
          諦めかけていたサルートのラストストックをあなたに。
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="text"
            placeholder="型番・モチーフを入力"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] w-80 font-serif"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold shadow-lg hover:scale-105 transform transition font-serif"
          >
            探す
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8 font-serif">
          © 2025 Laststock.jp
        </p>
      </div>
    </main>
  );
}
