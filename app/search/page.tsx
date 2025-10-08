"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function ItemCard(props: any) {
  const { sku, brand, series, motif = [], color = [], size = [], image_url } = props;
  return (
    <div className="rounded-2xl border border-emerald-200/60 bg-white/90 backdrop-blur shadow-md p-4 flex gap-4">
      <div className="relative w-28 h-28 rounded-xl overflow-hidden border">
        {image_url ? (
          // 画像置いてなければ <img> でOK（next/image未設定でも表示可）
          <img src={image_url} alt={sku || "item"} className="w-28 h-28 object-cover" />
        ) : (
          <div className="w-28 h-28 grid place-items-center text-xs text-gray-500">No Image</div>
        )}
      </div>
      <div className="text-left">
        <div className="text-sm text-gray-500">{brand}{series ? ` / ${series}` : ""}</div>
        <div className="text-lg font-semibold">{sku || "No SKU"}</div>
        <div className="mt-1 text-sm text-gray-700">モチーフ：{motif.join("・") || "―"}</div>
        <div className="text-sm text-gray-700">色：{color.join("・") || "―"}</div>
        <div className="text-sm text-gray-700">サイズ：{size.join("・") || "―"}</div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  const sp = useSearchParams();
  const motif = sp.get("motif") || "";
  const color = sp.get("color") || "";
  const size  = sp.get("size")  || "";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ total: number; results: any[] }>({ total: 0, results: [] });

  useEffect(() => {
    setLoading(true);
    const qs = new URLSearchParams({ motif, color, size }).toString();
    fetch(`/api/search?${qs}`).then(r => r.json()).then(j => { setData(j); setLoading(false); });
  }, [motif, color, size]);

  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-center py-20">
      <section className="mx-auto max-w-5xl px-6">
        <h1 className="brand-title">Laststock.jp</h1>
        <h2 className="text-2xl font-bold text-brand-primary">検索結果</h2>
        <div className="mt-2 text-sm text-gray-600">
          条件：{motif || "(モチーフなし)"} / {color || "(色なし)"} / {size || "(サイズなし)"}
        </div>

        {loading ? (
          <div className="mt-10 text-gray-500">検索中…</div>
        ) : data.total === 0 ? (
          <div className="mt-10 text-gray-500">該当なし。キーワードを緩めてください。</div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.results.map((it) => <ItemCard key={it.id} {...it} />)}
          </div>
        )}
      </section>
    </main>
  );
}
