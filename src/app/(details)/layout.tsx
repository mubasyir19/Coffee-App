import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BumBer Coffee",
  description: "Tinggalkan jejak ceritakan kisah bumi dalam kopi",
};

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} relative mx-auto max-w-md bg-slate-100`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
