"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Home() {
  const [motif, setMotif] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize]   = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const qs = new URLSearchParams({ motif, color, size });
    router.push(`/search?${qs.toString()}`);
  };

  const quickTags = ["花", "蝶", "孔雀", "黒×金", "青緑", "F70", "M", "限定色"];

  return (
    <main className="min-h-dvh text-center py-20">
      <section className="mx-auto max-w-5xl px-6">
        {/* 題字：中央揃え */}
        <h1 className="brand-title text-center">Laststock.jp</h1>

        {/* キャッチ：中央揃え */}
        <h2 className="mt-1 text-4xl md:text-5xl font-bold text-brand-primary/90 tracking-[0.02em] text-center">
          最後の一着を、見つけよう
        </h2>
        <p className="mt-3 text-gray-600 text-center">
          モチーフ・色・サイズからデッドストックを探せる検索サービス。
        </p>

        {/* 検索カード（縦3段） */}
        <div className="mt-10 mx-auto max-w-2xl">
          <div className="rounded-3xl bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,.08)] ring-1 ring-emerald-200/50 backdrop-blur">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 p-5 md:p-6">
              <input
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition"
                placeholder="モチーフ（例：バタフライ）"
              />
              <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition"
                placeholder="色（例：青緑）"
              />
              <input
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/40 transition"
                placeholder="サイズ（例：F70 / M）"
              />
              <button
                type="submit"
                className="w-full rounded-2xl px-6 py-3 font-semibold text-white
                           bg-[linear-gradient(135deg,#1e6f6d,theme(colors.emerald.500))]
                           ring-1 ring-black/10 shadow-[0_8px_20px_rgba(0,0,0,.06)]
                           hover:brightness-110 hover:ring-black/20 active:brightness-95 transition"
              >
                探す
              </button>
            </form>

            {/* クイック例 */}
            <div className="px-6 pb-5 text-sm text-gray-600 text-left">
              例：
              <button
                type="button"
                onClick={() => router.push("/search?motif=サルート+蝶")}
                className="ml-1 underline decoration-emerald-300 hover:decoration-emerald-500"
              >
                サルート 蝶
              </button>
              <span>、</span>
              <button
                type="button"
                onClick={() => router.push("/search?motif=孔雀+グリーン")}
                className="underline decoration-emerald-300 hover:decoration-emerald-500"
              >
                孔雀 グリーン
              </button>
            </div>
          </div>
        </div>

        {/* タグ群（#黒×金だけ黒ベースで刺し色） */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {quickTags.map((tag) => {
            const isBlackGold = tag === "黒×金";
            const base =
              "rounded-full px-3.5 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5";
            const classy = isBlackGold
              ? "bg-neutral-900 text-amber-200 border border-neutral-900 hover:shadow"
              : "bg-white/90 text-emerald-900 border border-emerald-200 hover:shadow";
            return (
              <button
                key={tag}
                onClick={() => router.push(`/search?motif=${encodeURIComponent(tag)}`)}
                className={`${base} ${classy}`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
