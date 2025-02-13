import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import BottomNav from "@/components/BottomNav";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BumBer Coffee",
  description: "Tinggalkan jejak ceritakan kisah bumi dalam kopi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} relative mx-auto max-w-md bg-slate-100`}
      >
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
