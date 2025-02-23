"use client";

import DetailProductCard from "@/components/DetailProductCard";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function DetailProductPage() {
  const params = useParams();
  const title = params?.title
    ? decodeURIComponent(params.title as string)
    : "Produk";
  const router = useRouter();

  return (
    <main className="relative">
      <section className="fixed left-0 right-0 top-0 w-full bg-white py-4">
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black text-lg font-medium"
        >
          <span>
            <ArrowLeftIcon className="h-5 w-3 text-black" />
          </span>
        </button>
        <p className="text-center text-lg font-semibold text-black">{title}</p>
      </section>
      <section className="px-4 py-20">
        <DetailProductCard
          title={title}
          description="Perpaduan manisnya berry, jasmine, dan lime yang menyegarkan"
        />
        {/* <DetailProductCard
          title="Ice Shaken Jasmine Berry 10k"
          description="Perpaduan manisnya berry, jasmine, dan lime yang menyegarkan"
        /> */}
      </section>
      <section className="fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl border-x-2 border-t-2 border-slate-300 bg-white p-4">
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-black">Rp10.000</p>
          <div className="flex items-center gap-x-4">
            <button className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-lg font-medium">
              -
            </button>
            <p className="text-sm font-medium text-black">1</p>
            <button className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-lg font-medium">
              +
            </button>
          </div>
        </div>
        <button className="mt-3 w-full rounded-full bg-greenBum py-3 text-center text-sm font-medium text-white">
          Tambah ke Keranjang
        </button>
      </section>
    </main>
  );
}
