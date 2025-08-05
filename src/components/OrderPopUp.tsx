"use client";

import useCartStore from "@/stores/cartStore";
// import { CartOrder } from "@/data-types";
import { priceFormat } from "@/utils/priceFormat";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderPopUp() {
  const router = useRouter();
  const { cart } = useCartStore();
  console.log("isi ", cart);
  // console.log("type price ", typeof cart.totalAmount);

  // const existingOrder = localStorage.getItem("Order");
  // let orderItem: CartOrder[] = [];

  // orderItem = JSON.parse(existingOrder);
  // console.log("ini order item = ", orderItem.length);
  // const totalItem: number = orderItem.length;
  // let subTotalPrice: number = 0;

  // for (const item of orderItem) {
  //   subTotalPrice += item.transaction.totalPrice;
  // }

  return (
    <div className="fixed bottom-20 left-1/2 flex w-full max-w-sm -translate-x-1/2 items-center justify-between rounded-full border-2 border-gray-200 bg-white p-4">
      <div className="">
        <p className="text-xs text-black">Total Harga</p>
        <p className="text-sm font-bold text-black">
          {priceFormat(cart?.total_amount)}
        </p>
        {/* <p className="text-sm font-bold text-black">Rp21.000</p> */}
      </div>
      <button
        onClick={() => router.push("/cart")}
        className="relative rounded-full bg-green-500 px-4 py-2 text-center text-sm font-semibold text-white"
      >
        Lihat Pesananan
        <div className="absolute -top-3 right-0 rounded-xl bg-greenBum px-3 py-1 text-xs font-semibold text-white">
          {cart?.total_items}
        </div>
      </button>
    </div>
  );
}
