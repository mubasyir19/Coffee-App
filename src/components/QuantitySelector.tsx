"use client";

import React, { useState } from "react";
import Counter from "./Counter";
import { priceFormat } from "@/utils/priceFormat";
import { ProductData } from "@/types/product";
import useCartStore from "@/stores/cartStore";
import { decodeToken, getTokenCookies } from "@/utils/token";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductData;
}

export default function QuantitySelector({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();
  const { addCart } = useCartStore();

  const totalPrice = product.price * quantity;
  const token = getTokenCookies();
  const payloadUser = decodeToken(token as string);

  const onCounterChange = (value: number) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (!payloadUser) {
      alert("Silakan login terlebih dahulu");
      return;
    }
    addCart(payloadUser?.user_id, product.id, quantity);
    router.push("/menu");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl border-x-2 border-t-2 border-slate-300 bg-white p-4">
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-black">
          {priceFormat(totalPrice)}
        </p>
        <Counter onValueChange={onCounterChange} />
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full rounded-full bg-greenBum py-3 text-center text-sm font-medium text-white"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
}
