"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // 後でここに検索処理（DB/API）を実装
    console.log("検索:", query);
  };
  

  return (
    <main className="hero">
      <div className="overlay">
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
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          /* 明るめペールブルーのグラデーション */
          background: linear-gradient(135deg, #a7d8f0, #e6f7ff);
          padding: 24px;
        }
        .overlay {
          width: 100%;
          max-width: 820px;
          text-align: center;
          /* 白の半透明カードで明るい印象をキープ */
          background: rgba(255, 255, 255, 0.88);
          border-radius: 16px;
          padding: 56px 40px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }
        h1 {
          font-size: 3.2rem;
          line-height: 1.15;
          margin: 0 0 16px;
          /* 上品なゴールド */
          color: #d4af37;
          font-family: "Playfair Display", "Noto Serif JP", serif;
          letter-spacing: 0.5px;
        }
        .subtitle {
          margin: 0 0 28px;
          font-size: 1.15rem;
          color: #334155; /* 濃いめグレー/ネイビー寄りで可読性UP */
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
          border: 1px solid #cbd5e1; /* 明るめボーダー */
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
          /* 明るいブルーでコントラスト、金ボタンより清潔感 */
          background: #00aaff;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.4px;
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

        /* スマホ最適化 */
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
