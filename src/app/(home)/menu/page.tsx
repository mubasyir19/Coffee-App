import React from "react";

export default function MenuPage() {
  return (
    <main className="bg-white pb-28 pt-8">
      <section className="px-4">
        <div className="grid grid-cols-2 rounded-full border border-gray-200 bg-gray-100 p-1">
          <button className="rounded-full bg-red-500 py-2 text-center">
            <p className="text-xs font-medium text-white">Dine in</p>
          </button>
          <button className="rounded-full py-2 text-center">
            <p className="text-xs font-medium text-black">Take Away</p>
          </button>
        </div>
      </section>
      <section className="mt-4 flex">
        <div className="h-screen w-20 bg-gray-100">
          <button className="w-full border-l-4 border-red-500 bg-white p-2 text-start text-xs text-red-500">
            Combo Hemat
          </button>
          <button className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500">
            Kopi Signature
          </button>
          <button className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500">
            Kopi Kreasi Lokal
          </button>
          <button className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500">
            Jiwa Toast
          </button>
          <button className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500">
            Non-Coffee
          </button>
          <button className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500">
            Tea
          </button>
          <button className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500">
            1 Liter
          </button>
        </div>
        <div className="w-full px-2">
          <p className="my-5 text-base font-semibold text-black">Combo Hemat</p>
          <div className="grid grid-cols-2 gap-4">
            <div
              id="product"
              className="rounded-xl border border-gray-200 px-2 pb-2 pt-14"
            >
              <p className="text-base font-semibold text-black">
                Combo Jiwa Toast
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-black">Rp20.000</p>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-lg text-white">
                  +
                </div>
              </div>
            </div>
            <div
              id="product"
              className="rounded-xl border border-gray-200 px-2 pb-2 pt-14"
            >
              <p className="text-base font-semibold text-black">
                Combo Asik Berdua
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-black">Rp20.000</p>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-lg text-white">
                  +
                </div>
              </div>
            </div>
            <div
              id="product"
              className="rounded-xl border border-gray-200 px-2 pb-2 pt-14"
            >
              <p className="text-base font-semibold text-black">
                Tiga Toast Lebih Hemat
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-black">Rp72.000</p>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-lg text-white">
                  +
                </div>
              </div>
            </div>
          </div>
          <p className="my-5 text-base font-semibold text-black">
            Kopi Signature
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div
              id="product"
              className="rounded-xl border border-gray-200 px-2 pb-2 pt-14"
            >
              <p className="text-base font-semibold text-black">Kopi Susu</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-black">Rp20.000</p>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-lg text-white">
                  +
                </div>
              </div>
            </div>
            <div
              id="product"
              className="rounded-xl border border-gray-200 px-2 pb-2 pt-14"
            >
              <p className="text-base font-semibold text-black">
                Kopi Susu Karamel
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-black">Rp20.000</p>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-lg text-white">
                  +
                </div>
              </div>
            </div>
            <div
              id="product"
              className="rounded-xl border border-gray-200 px-2 pb-2 pt-14"
            >
              <p className="text-base font-semibold text-black">
                Kopi Susu Hazelnut
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-black">Rp72.000</p>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-lg text-white">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
