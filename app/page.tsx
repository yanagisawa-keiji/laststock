"use client";

import { useState, FormEvent } from "react";
import { Noto_Serif_JP } from "next/font/google";

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // TODO: 後でここにDB/API検索処理を実装
    console.log("検索:", query);
  };

  return (
    <main className={`${noto.className} hero`}>
      <div className="card">
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
        /* ===== 背景：布の質感写真 + 明るいペールブルー ===== */
        .hero {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          background:
            linear-gradient(180deg, rgba(167,216,240,0.55), rgba(230,247,255,0.75)),
            url("/bg.jpg") center/cover no-repeat fixed;
        }

        /* ===== 中央カード ===== */
        .card {
          width: 100%;
          max-width: 880px;
          text-align: center;
          background: rgba(255, 255, 255, 0.92);
          border-radius: 18px;
          padding: 64px 48px;
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.14);
          backdrop-filter: blur(2px);
        }

        h1 {
          margin: 0 0 18px;
          font-size: 3.3rem;
          line-height: 1.2;
          color: #d4af37; /* 上品ゴールド */
          letter-spacing: 0.5px;
        }

        .subtitle {
          margin: 0 0 30px;
          font-size: 1.18rem;
          color: #334155; /* ネイビー寄りグレーで可読性UP */
        }

        /* ===== 検索フォーム ===== */
        .search {
          display: inline-flex;
          gap: 12px;
          align-items: center;
        }
        input {
          width: 300px;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          background: #fff;
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
          background: #00aaff;   /* 明るいブルーで清潔感 */
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.4px;
          cursor: pointer;
          box-shadow: 0 6px 14px rgba(0, 170, 255, 0.25);
          transition: transform 0.05s ease, background 0.2s ease, box-shadow 0.2s ease;
        }
        button:hover { background: #008fd1; box-shadow: 0 8px 18px rgba(0,143,209,0.3); }
        button:active { transform: translateY(1px); }

        footer {
          margin-top: 34px;
          font-size: 0.92rem;
          color: #64748b;
        }

        /* ===== スマホ最適化 ===== */
        @media (max-width: 560px) {
          .card { padding: 48px 24px; }
          h1 { font-size: 2.4rem; }
          .search { flex-direction: column; gap: 10px; }
          input, button { width: 100%; }
        }
      `}</style>
    </main>
  );
}
