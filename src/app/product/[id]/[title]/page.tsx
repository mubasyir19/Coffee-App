"use client";

import Counter from "@/components/Counter";
import DetailProductCard from "@/components/DetailProductCard";
import useProductDetail from "@/hooks/product/useProductDetail";
import { priceFormat } from "@/utils/priceFormat";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

interface ProductItem {
  id: string;
  productName: string;
  price: number;
}

interface TransactionDetails {
  totalItem: number;
  totalPrice: number;
}

interface CartOrder {
  item: ProductItem;
  transaction: TransactionDetails;
}

export default function DetailProductPage() {
  const [totalItem, setTotalItem] = useState<number>(1);

  const { id, title } = useParams();
  const router = useRouter();
  const productTitle = decodeURIComponent(title as string);
  const productId = decodeURIComponent(id as string);

  const { product } = useProductDetail(productId);
  const totalPrice = Number(product?.price) * totalItem;

  const onCounterChange = (value: number) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const newData: CartOrder = {
      item: {
        id: product?.id ?? "",
        productName: product?.name ?? "",
        price: Number(product?.price) ?? 0,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
      },
    };

    const existingOrder = localStorage.getItem("Order");
    let orderData: CartOrder[] = [];

    if (existingOrder) {
      try {
        const parsedData = JSON.parse(existingOrder);
        if (Array.isArray(parsedData)) {
          orderData = parsedData;
        } else {
          console.warn(
            "Existing 'Order' in localStorage is not an array. Resetting.",
          );
          orderData = [];
        }
      } catch (error) {
        console.error("Error parsing existing order data:", error);
        console.warn("Could not parse 'Order' in localStorage. Resetting.");
        orderData = [];
      }
    }

    orderData.push(newData);

    localStorage.setItem("Order", JSON.stringify(orderData));
    router.push("/menu");
  };

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
        <p className="text-center text-lg font-semibold text-black">
          {productTitle}
        </p>
      </section>
      <section className="px-4 py-20">
        <DetailProductCard
          id={id as string}
          title={productTitle}
          imageProduct={product?.image_product}
          description="Perpaduan manisnya berry, jasmine, dan lime yang menyegarkan"
        />
      </section>
      <section className="fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl border-x-2 border-t-2 border-slate-300 bg-white p-4">
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
      </section>
    </main>
  );
}
