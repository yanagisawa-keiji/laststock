import { NextRequest, NextResponse } from "next/server";
import data from "@/data/items.index.json" assert { type: "json" };

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const motif = (searchParams.get("motif") || "").toLowerCase();
  const color = (searchParams.get("color") || "").toLowerCase();
  const size  = (searchParams.get("size")  || "").toLowerCase();

  const hit = (v: string, q: string) => !q || v.toLowerCase().includes(q);
  const hitArr = (arr: string[], q: string) => !q || arr.some(v => hit(v, q));

  const results = (data as any[]).filter(
    it => hitArr(it.motif, motif) && hitArr(it.color, color) && hitArr(it.size, size)
  );

  return NextResponse.json({ total: results.length, results });
}
