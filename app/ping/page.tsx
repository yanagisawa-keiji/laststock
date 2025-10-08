// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-emerald-100 via-white to-emerald-200">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
            最後の一着を、<span className="text-brand-primary">見つけよう</span>
          </h1>
          <p className="mt-4 text-gray-700">
            モチーフ・色・サイズからデッドストックを探せる検索サービス。
          </p>
        </div>

        {/* 検索ボックス */}
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-emerald-200/50 p-6">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                placeholder="モチーフ（例：バタフライ）"
              />
              <input
                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                placeholder="色（例：青緑）"
              />
              <input
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

            {/* 例リンク */}
            <div className="mt-4 text-sm text-gray-600">
              例：
              <button className="underline hover:no-underline">サルート 蝶</button>、
              <button className="underline hover:no-underline ml-2">孔雀 グリーン</button>
            </div>
          </div>
        </div>

        {/* おすすめタグ */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
          {["花", "蝶", "孔雀", "黒×金", "青緑", "F70", "M", "限定色"].map(tag => (
            <span
              key={tag}
              className="rounded-full border border-emerald-300/60 px-3 py-1 bg-white shadow hover:bg-emerald-50 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* 下部に色味を感じる帯（ほんのり） */}
      <div className="h-24 bg-brand-primary/10" />
    </main>
  );
}
