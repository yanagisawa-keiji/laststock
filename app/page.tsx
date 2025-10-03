"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("検索機能は準備中です");
  };

  return (
    <main style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Laststock</h1>
      <p>サルートのラストストックを探すサービス（準備中）</p>

      <form onSubmit={onSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="型番 または モチーフを入力"
          style={{ padding: "0.5rem", width: "260px" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
          検索
        </button>
      </form>
    </main>
  );
}
