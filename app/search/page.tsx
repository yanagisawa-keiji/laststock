"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/80 px-2 py-0.5 text-xs text-emerald-800">
      {children}
    </span>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-white/95 shadow-md p-4 animate-pulse">
      <div className="h-28 w-full rounded-xl bg-emerald-100/60 mb-3" />
      <div className="h-3 w-24 bg-emerald-100/80 rounded mb-2" />
      <div className="h-4 w-40 bg-emerald-100/80 rounded mb-3" />
      <div className="h-3 w-48 bg-emerald-100/60 rounded mb-1.5" />
      <div className="h-3 w-40 bg-emerald-100/60 rounded" />
    </div>
  );
}

function ItemCard(props: any) {
  const { sku, brand, series, motif = [], color = [], size = [], image_url } = props;
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-white/95 shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition">
      <div className="relative w-full h-28 rounded-xl overflow-hidden border bg-white">
        {image_url ? (
          <img src={image_url} alt={sku || "item"} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 120 120" className="w-full h-full text-emerald-100">
            <rect x="0" y="0" width="120" height="120" fill="currentColor" />
            <g fill="white" opacity="0.9">
              <circle cx="38" cy="46" r="16" />
              <rect x="24" y="70" width="72" height="28" rx="6" />
            </g>
          </svg>
        )}
      </div>

      <div className="text-left leading-relaxed">
        <div className="text-sm text-gray-500">{brand}{series ? ` / ${series}` : ""}</div>
        <div className="text-lg font-semibold tracking-wide">{sku || "No SKU"}</div>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {motif?.length ? <Badge>モチーフ：{motif.join("・")}</Badge> : null}
          {color?.length ? <Badge>色：{color.join("・")}</Badge> : null}
          {size?.length ? <Badge>サイズ：{size.join("・")}</Badge> : null}
        </div>
      </div>
    </div>
  );
}

function SearchClient() {
  const sp = useSearchParams();
  const motif = sp.get("motif") || "";
  const color = sp.get("color") || "";
  const size  = sp.get("size")  || "";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ total: number; results: any[] }>({ total: 0, results: [] });

  const queryLabel = useMemo(() => {
    const parts = [
      motif ? `モチーフ：${motif}` : null,
      color ? `色：${color}` : null,
      size ? `サイズ：${size}` : null,
    ].filter(Boolean);
    return parts.length ? parts.join(" ／ ") : "条件なし（全件）";
  }, [motif, color, size]);

  useEffect(() => {
    setLoading(true);
    const qs = new URLSearchParams({ motif, color, size }).toString();
    fetch(`/api/search?${qs}`)
      .then(r => r.json())
      .then(j => { setData(j); setLoading(false); })
      .catch(() => { setData({ total: 0, results: [] }); setLoading(false); });
  }, [motif, color, size]);

  return (
    <main className="min-h-dvh text-center py-16">
      <section className="mx-auto max-w-6xl px-6">
        <h1 className="brand-title text-center">Laststock.jp</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary/90 mt-2 text-center">検索結果</h2>

        <div className="mt-3">
          <a href="/" className="text-sm underline text-emerald-800 hover:no-underline">← トップへ戻る</a>
        </div>

        <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-white/85 px-4 py-2 border border-emerald-200/60 shadow-sm">
          <span className="text-sm text-gray-700">{queryLabel}</span>
          <span className="text-xs text-emerald-900 font-semibold bg-emerald-50 border border-emerald-200/70 rounded-full px-2 py-0.5">
            {loading ? "検索中…" : `${data.total} 件`}
          </span>
        </div>

        {loading ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : data.total === 0 ? (
          <div className="mt-12 text-gray-500">該当なし。キーワードを緩めてください。</div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.results.map((it) => <ItemCard key={it.id} {...it} />)}
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
export const dynamic = "force-dynamic";

