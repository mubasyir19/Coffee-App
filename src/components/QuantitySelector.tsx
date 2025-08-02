"use client";

import React, { useState } from "react";
import Counter from "./Counter";
import { priceFormat } from "@/utils/priceFormat";
import { ProductData } from "@/types/product";

export default function QuantitySelector({
  product,
}: {
  product: ProductData;
}) {
  const [totalItem, setTotalItem] = useState<number>(1);

  const onCounterChange = (value: number) => {
    setTotalItem(value);
  };
  const totalPrice = product.price * totalItem;

  const onOrder = () => {};

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl border-x-2 border-t-2 border-slate-300 bg-white p-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-black">
          {priceFormat(totalPrice)}
        </p>
        <Counter onValueChange={onCounterChange} />
      </div>
      <button
        onClick={onOrder}
        className="mt-3 w-full rounded-full bg-greenBum py-3 text-center text-sm font-medium text-white"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
}
