"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // 今はコンソール出力だけ。あとでAPIやDBに繋げる。
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
          display: flex;
          justify-content: center;
          align-items: center;
          /* 背景に写真＋グラデーションのオーバーレイ */
          background: 
            linear-gradient(135deg, rgba(167, 216, 240, 0.7), rgba(230, 247, 255, 0.7)),
            url("/bg.jpg") center/cover no-repeat;
          padding: 24px;
        }
        .overlay {
          width: 100%;
          max-width: 820px;
          text-align: center;
          background: rgba(255, 255, 255, 0.92);
          border-radius: 18px;
          padding: 56px 40px;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.15);
        }
        h1 {
          font-size: 3.2rem;
          margin: 0 0 16px;
          color: #d4af37; /* 上品ゴールド */
          font-family: "Playfair Display", "Noto Serif JP", serif;
        }
        .subtitle {
          margin: 0 0 28px;
          font-size: 1.2rem;
          color: #334155;
          font-family: "Noto Serif JP", serif;
        }
        .search {
          display: inline-flex;
          gap: 12px;
          align-items: center;
        }
        input {
          width: 280px;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #0f172a;
          outline: none;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.08);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        input::placeholder {
          color: #94a3b8;
        }
        input:focus {
          border-color: #38bdf8;
          box-shadow: 0 6px 14px rgba(56, 189, 248, 0.18);
        }
        button {
          padding: 12px 22px;
          border: none;
          border-radius: 10px;
          background: #00aaff;
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 14px rgba(0, 170, 255, 0.25);
          transition: transform 0.05s ease, background 0.2s ease, box-shadow 0.2s ease;
        }
        button:hover {
          background: #008fd1;
          box-shadow: 0 8px 18px rgba(0, 143, 209, 0.3);
        }
        button:active {
          transform: translateY(1px);
        }
        footer {
          margin-top: 32px;
          font-size: 0.9rem;
          color: #64748b;
          font-family: "Noto Serif JP", serif;
        }

        /* スマホ */
        @media (max-width: 520px) {
          h1 {
            font-size: 2.4rem;
          }
          .search {
            flex-direction: column;
            gap: 10px;
          }
          input {
            width: 100%;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
