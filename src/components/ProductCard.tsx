import { priceFormat } from "@/utils/priceFormat";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  sourceImage: string;
  title: string;
  price: number;
}

export default function ProductCard({
  sourceImage,
  title,
  price,
}: ProductCardProps) {
  return (
    <div id="product" className="rounded-xl border border-gray-200 px-2 pb-2">
      <Image
        src={sourceImage}
        width={100}
        height={200}
        alt="coffee"
        className="mx-auto h-32 w-auto"
      />
      <div className="mt-3 flex h-20 flex-col justify-between">
        <p className="text-base font-semibold text-black">{title}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-black">{priceFormat(price)}</p>
          <button className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 p-1 text-lg text-white">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
