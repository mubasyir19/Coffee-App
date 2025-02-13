"use client";

import React, { useState } from "react";

export default function OrderPage() {
  const [openTab, setOpenTab] = useState("ongoing");

  const switchTab = (TabName: string) => {
    setOpenTab(TabName);
  };

  return (
    <main className="h-screen bg-white px-4 pb-28">
      <div id="title" className="pt-8">
        <h1 className="text-lg font-semibold text-greenBum">Order</h1>
      </div>
      <div id="tab" className="mt-4 grid grid-cols-2">
        <button
          className={`border-b-2 py-2 text-sm font-medium ${openTab === "ongoing" ? "border-green-700 text-green-700" : "border-gray-200 text-gray-700"}`}
          onClick={() => switchTab("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={`border-b-2 py-2 text-sm font-medium ${openTab === "history" ? "border-green-700 text-green-700" : "border-gray-200 text-gray-700"}`}
          onClick={() => switchTab("history")}
        >
          History
        </button>
      </div>
      <section className="py-12">
        {openTab === "ongoing" && (
          <>
            <div className="mx-auto h-28 w-28 rounded-full bg-gray-500"></div>
            <div className="mx-auto mt-2 w-10/12 text-center">
              <p className="text-sm font-bold text-black">Belum ada pesanan</p>
              <p className="text-xs text-gray-400">
                Kamu bisa cek pesanan yang sedang diproses di sini
              </p>
              <button className="mt-2 rounded-full bg-green-700 px-4 py-2 text-sm font-medium text-white">
                Pesan Sekarang
              </button>
            </div>
          </>
        )}
        {openTab === "history" && (
          <>
            <div className="mx-auto h-28 w-28 rounded-full bg-gray-500"></div>
            <div className="mx-auto mt-2 w-10/12 text-center">
              <p className="text-sm font-bold text-black">
                Belum ada history pesanan
              </p>
              <p className="text-xs text-gray-400">
                Kamu bisa cek pesanan yang sedang diproses di sini
              </p>
              <button className="mt-2 rounded-full bg-green-700 px-4 py-2 text-sm font-medium text-white">
                Pesan Sekarang
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
