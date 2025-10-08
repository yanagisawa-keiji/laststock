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

  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-center py-24">
      <section className="mx-auto max-w-5xl px-6">
        <div>
          <h1 className="brand-title">Laststock.jp</h1>
          <h2 className="text-3xl font-bold text-brand-primary">最後の一着を、見つけよう</h2>
          <p className="mt-2 text-gray-600">
            モチーフ・色・サイズからデッドストックを探せる検索サービス。
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-emerald-200/50 p-6">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-4 gap-3"
            >
              <input
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                placeholder="モチーフ（例：バタフライ）"
              />
              <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                placeholder="色（例：青緑）"
              />
              <input
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                placeholder="サイズ（例：F70 / M）"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-primary text-white px-4 py-2 font-medium hover:bg-brand-primary/90 transition"
              >
                探す
              </button>
            </form>

            <div className="mt-4 text-sm text-gray-600">
              例：
              <button
                type="button"
                onClick={() => router.push("/search?motif=サルート+蝶")}
                className="underline hover:no-underline"
              >
                サルート 蝶
              </button>
              、
              <button
                type="button"
                onClick={() => router.push("/search?motif=孔雀+グリーン")}
                className="underline hover:no-underline ml-2"
              >
                孔雀 グリーン
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
          {["花", "蝶", "孔雀", "黒×金", "青緑", "F70", "M", "限定色"].map((tag) => (
            <span
              key={tag}
              onClick={() => router.push(`/search?motif=${tag}`)}
              className="rounded-full border border-emerald-300/60 px-3 py-1 bg-white shadow hover:bg-emerald-50 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
