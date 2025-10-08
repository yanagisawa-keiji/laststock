export default function Home() {
  return (
    <main>
      <section className="section">
        <div className="container center">
          <h2 className="brand-title">Laststock.jp</h2> {/* ← 追加 */}
          <h1 className="title">
            最後の一着を、<span style={{ color: "var(--brand)" }}>見つけよう</span>
          </h1>
          <p className="lead">
            モチーフ・色・サイズからデッドストックを探せる検索サービス。
          </p>
        </div>

        <div className="container">
          <div className="card">
            <form className="grid">
              <input
                className="input"
                placeholder="モチーフ（例：バタフライ）"
              />
              <input className="input" placeholder="色（例：青緑）" />
              <input className="input" placeholder="サイズ（例：F70 / M）" />
              <button className="btn" type="button">
                探す
              </button>
            </form>
            <div className="examples">
              例：
              <button>サルート 蝶</button>、
              <button style={{ marginLeft: 8 }}>孔雀 グリーン</button>
            </div>
          </div>

          <div className="tags">
            {["花", "蝶", "孔雀", "黒×金", "青緑", "F70", "M", "限定色"].map(
              (t) => (
                <span className="tag" key={t}>
                  #{t}
                </span>
              )
            )}
          </div>

          <div className="band" />
        </div>
      </section>
    </main>
  );
}
