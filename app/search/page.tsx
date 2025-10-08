// app/search/page.tsx
"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// 画像プレースホルダ付きカード
function ItemCard(props: any) {
  const { sku, brand, series, motif = [], color = [], size = [], image_url } = props;
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-white/90 backdrop-blur shadow-md p-4 flex gap-4">
      <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden border bg-white">
        {image_url ? (
          <img src={image_url} alt={sku || "item"} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 120 120" className="w-full h-full text-emerald-200">
            <rect x="0" y="0" width="120" height="120" fill="currentColor" />
            <g fill="white" opacity="0.8">
              <circle cx="38" cy="46" r="16" />
              <rect x="24" y="70" width="72" height="28" rx="6" />
            </g>
          </svg>
        )}
      </div>

      <div className="text-left leading-relaxed break-words">
        <div className="text-sm text-gray-500">
          {brand}
          {series ? ` / ${series}` : ""}
        </div>
        <div className="text-lg font-semibold tracking-wide">{sku || "No SKU"}</div>
        <div className="mt-1 text-sm text-gray-700">モチーフ：{motif.join("・") || "―"}</div>
        <div className="text-sm text-gray-700">色：{color.join("・") || "―"}</div>
        <div className="text-sm text-gray-700">サイズ：{size.join("・") || "―"}</div>
      </div>
    </div>
  );
}

function SearchClient() {
  const sp = useSearchParams();
  const motif = sp.get("motif") || "";
  const color = sp.get("color") || "";
  const size = sp.get("size") || "";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ total: number; results: any[] }>({ total: 0, results: [] });

  useEffect(() => {
    setLoading(true);
    const qs = new URLSearchParams({ motif, color, size }).toString();
    fetch(`/api/search?${qs}`)
      .then((r) => r.json())
      .then((j) => {
        setData(j);
        setLoading(false);
      })
      .catch(() => {
        setData({ total: 0, results: [] });
        setLoading(false);
      });
  }, [motif, color, size]);

  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-center py-20">
      <section className="mx-auto max-w-5xl px-6">
        <h1 className="brand-title">Laststock.jp</h1>
        <h2 className="text-2xl font-bold text-brand-primary">検索結果</h2>

        <div className="mt-3">
          <a href="/" className="text-sm underline text-emerald-700 hover:no-underline">
            ← トップへ戻る
          </a>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          条件：{motif || "(モチーフなし)"} / {color || "(色なし)"} / {size || "(サイズなし)"}
        </div>

        {loading ? (
          <div className="mt-10 text-gray-500">検索中…</div>
        ) : data.total === 0 ? (
          <div className="mt-10 text-gray-500">該当なし。キーワードを緩めてください。</div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.results.map((it) => (
              <ItemCard key={it.id} {...it} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="mt-10 text-gray-500 text-center">検索条件の読込中…</div>}>
      <SearchClient />
    </Suspense>
  );
}

// SSG 時のCSRバイアウトを避ける保険
export const dynamic = "force-dynamic";
