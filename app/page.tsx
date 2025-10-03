"use client";

import { useState, FormEvent } from "react";
import { Noto_Serif_JP, Playfair_Display } from "next/font/google";

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // TODO: ここにDB/API検索処理を実装
    console.log("検索:", query);
  };

  return (
    <main className={`${noto.className} hero`}>
      <div className="card">
        {/* タイトルは欧文クラシック（Playfair）で強いゴールド */}
        <h1 className={`${playfair.className} title`}>Laststock.jp</h1>

        {/* 和文はNoto Serif JPで統一 */}
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
        /* ===== 背景（V4.3継承：青サテン写真） ===== */
        .hero {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          background: url("/bg.jpg") center/cover no-repeat fixed;
        }

        /* ===== 中央カード（軽い透け感＋影） ===== */
        .card {
          width: 100%;
          max-width: 980px;
          text-align: center;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 22px;
          padding: 72px 56px;
          box-shadow: 0 22px 44px rgba(0, 0, 0, 0.16);
        }

        /* ===== タイトル：強いゴールド（グラデ） ===== */
        .title {
          margin: 0 0 20px;
          font-size: 4rem;
          line-height: 1.15;
          letter-spacing: 0.5px;
          /* 濃淡のあるゴールドグラデ。背景クリップでリッチに */
          background: linear-gradient(180deg, #f3d27a 0%, #d4af37 45%, #b38b00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
        }

        /* ===== サブタイトル：和文クラシックで落ち着き ===== */
        .subtitle {
          margin: 0 0 32px;
          font-size: 1.28rem;
          color: #2a3550; /* 深いネイビーで可読性UP */
        }

        /* ===== 検索フォーム ===== */
        .search {
          display: inline-flex;
          gap: 12px;
          align-items: center;
        }
        input {
          width: 340px;
          padding: 13px 16px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #0f172a;
          outline: none;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.08);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          font-size: 1rem;
        }
        input::placeholder { color: #94a3b8; }
        input:focus {
          border-color: #3ba3ff;
          box-shadow: 0 8px 18px rgba(59, 163, 255, 0.18);
        }

        /* ===== ボタン：ゴールド統一（濃いめ） ===== */
        button {
          padding: 13px 24px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(180deg, #f2cf70 0%, #d4af37 55%, #a67c00 100%);
          color: #1a1a1a;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(212, 175, 55, 0.35);
          transition: transform 0.06s ease, filter 0.2s ease, box-shadow 0.2s ease;
        }
        button:hover {
          filter: brightness(1.06);
          box-shadow: 0 10px 22px rgba(212, 175, 55, 0.45);
        }
        button:active { transform: translateY(1px); }

        footer {
          margin-top: 36px;
          font-size: 0.96rem;
          color: #5b667c;
        }

        /* ===== スマホ最適化 ===== */
        @media (max-width: 640px) {
          .card { padding: 48px 24px; border-radius: 18px; }
          .title { font-size: 2.6rem; }
          .subtitle { font-size: 1.1rem; }
          .search { flex-direction: column; gap: 10px; }
          input, button { width: 100%; }
        }
      `}</style>
    </main>
  );
}
