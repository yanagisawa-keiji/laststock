export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Laststock</h1>
      <p>サルートのラストストックを探すサービス（準備中）</p>

      <form onSubmit={(e) => { e.preventDefault(); alert("検索機能は準備中です"); }}>
        <input 
          type="text" 
          placeholder="型番 または モチーフを入力" 
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
          検索
        </button>
      </form>
    </main>
  );
}
