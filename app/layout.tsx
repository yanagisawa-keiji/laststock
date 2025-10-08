// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_JP, Great_Vibes } from "next/font/google";

export const metadata: Metadata = {
  title: "Laststock.jp",
  description: "モチーフ・色・サイズから探すデッドストック検索サービス。",
};

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// レイアウト内で題字に使うならここで使う。exportはしない。
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
