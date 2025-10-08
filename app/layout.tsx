import "./globals.css";


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laststock",
  description: "最後の一着を、見つけよう。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full">{/* ← ここ重要 */}
<body className="min-h-screen bg-emerald-300 antialiased">{children}</body>




    </html>
  );
}

