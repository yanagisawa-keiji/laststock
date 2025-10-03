"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // 🔽 後でここに検索処理を書く
    console.log("検索キーワード:", query);
  };

  return (
    <main className="hero">
      <h1>Laststock.jp</h1>
      <p className="subtitle">サルートのラストストックを、もう一度手に入れる。</p>

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

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #008080, #40e0d0);
          color: #fff;
          text-align: center;
          font-family: 'Noto Serif JP', serif;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
        }
        .search {
          display: flex;
          gap: 10px;
        }
        input {
          padding: 10px;
          border: none;
          border-radius: 5px;
          width: 250px;
        }
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background: gold;
          color: #111;
          font-weight: bold;
          cursor: pointer;
        }
        footer {
          margin-top: 50px;
          font-size: 0.9rem;
          color: #eee;
        }
      `}</style>
    </main>
  );
}
