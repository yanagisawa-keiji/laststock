"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("検索:", query);
  };

  return (
    <main className="hero">
      <div className="overlay">
        <h1>Laststock.jp</h1>
        <p className="subtitle">
          サルートのラストストックを、もう一度手に入れる。
        </p>

        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="型番・モチーフを入力"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">探す</button>
        </form>

        <footer>© 2025 Laststock.jp</footer>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0d1b2a, #008080);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Noto Serif JP', serif;
          color: white;
          text-align: center;
        }
        .overlay {
          background: rgba(0, 0, 0, 0.6);
          padding: 60px 40px;
          border-radius: 12px;
        }
        h1 {
          font-size: 3.2rem;
          font-family: 'Playfair Display', serif;
          color: gold;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: #e0ffff;
        }
        .search {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        input {
          padding: 12px;
          border: none;
          border-radius: 6px;
          width: 260px;
          font-size: 1rem;
        }
        button {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          background: gold;
          color: #111;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #ffd700;
        }
        footer {
          margin-top: 40px;
          font-size: 0.9rem;
          color: #ccc;
        }
      `}</style>
    </main>
  );
}
