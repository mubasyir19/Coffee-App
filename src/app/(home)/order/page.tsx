import React from "react";

export default function OrderPage() {
  return (
    <main className="h-screen bg-white px-4 pb-28">
      <div id="title" className="pt-8">
        <h1 className="text-lg font-semibold text-greenBum">Order</h1>
      </div>
      <div id="tab" className="mt-4 grid grid-cols-2">
        <button className="border-b-2 border-green-700 py-2 text-sm font-medium text-green-700">
          Ongoing
        </button>
        <button className="border-b-2 border-gray-200 py-2 text-sm font-medium text-gray-700">
          History
        </button>
      </div>
      <section className="py-12">
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
      </section>
    </main>
  );
}
