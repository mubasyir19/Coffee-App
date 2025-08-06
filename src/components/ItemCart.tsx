"use client";

import useProductDetail from "@/hooks/product/useProductDetail";
import useCartStore from "@/stores/cartStore";
import { priceFormat } from "@/utils/priceFormat";
import Image from "next/image";
import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
interface ItemCartProps {
  cartId: string;
  customerId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
}

export default function ItemCart({
  cartId,
  customerId,
  productId,
  quantity,
  totalPrice,
}: ItemCartProps) {
  const [count, setCount] = useState<number>(quantity);
  const [total, setTotal] = useState<number>(totalPrice);
  const { product } = useProductDetail(productId);
  const updateCartItem = useCartStore((state) => state.updateItemCart);
  const { removeFromCart } = useCartStore();

  const updateQuantity = (newCount: number) => {
    if (newCount < 1) return;
    setCount(newCount);

    if (!product || product.price === undefined) {
      console.error("Produk tidak valid");
      return;
    }

    const newSubtotal = newCount * Number(product.price);
    setTotal(newSubtotal);

    updateCartItem(customerId, productId, newCount);
  };

  const addCount = () => updateQuantity(count + 1);
  const minCount = () => updateQuantity(count - 1);

  const handleDeleteItem = async () => {
    await removeFromCart(customerId, cartId);
  };

  return (
    <div id="item-cart" key={cartId} className="">
      <div className="flex items-center gap-4">
        <Image
          src={product?.image_product as string}
          width={200}
          height={200}
          alt="photo-product"
          className="mx-auto size-12 object-cover"
        />
        <div className="flex-1">
          <p className="text-base font-semibold">{product?.name}</p>
          <p className="mt-2 line-clamp-2 text-xs text-gray-400">
            {product?.description}
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-black">{priceFormat(total)}</p>
        <div className="flex items-center gap-x-4">
          <button onClick={handleDeleteItem}>
            <TrashIcon className="size-4 text-red-500" />
          </button>
          <button
            onClick={minCount}
            className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-lg font-medium"
          >
            -
          </button>
          <p className="text-sm font-medium text-black">{count}</p>
          <button
            onClick={addCount}
            className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-lg font-medium"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
