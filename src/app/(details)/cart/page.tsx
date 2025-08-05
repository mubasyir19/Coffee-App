"use client";

import ItemCart from "@/components/ItemCart";
import useCartStore from "@/stores/cartStore";
import { priceFormat } from "@/utils/priceFormat";
import { decodeToken, getTokenCookies } from "@/utils/token";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function CartPage() {
  const router = useRouter();
  const token = getTokenCookies();
  const payload = decodeToken(token as string);

  const { cart, fetchCart } = useCartStore();
  console.log("ini cart = ", cart);

  useEffect(() => {
    if (payload?.user_id) {
      fetchCart(payload.user_id);
    }
  }, [payload?.user_id, fetchCart]);

  return (
    <div className="relative bg-slate-100">
      <section className="fixed left-0 right-0 top-0 flex w-full items-center gap-8 bg-white px-4 py-4">
        <button onClick={() => router.back()}>
          <span>
            <ArrowLeftIcon className="size-5 text-black" />
          </span>
        </button>
        <p className="text-center text-lg font-semibold text-black">
          Detail Pesanan
        </p>
      </section>

      <section className="space-y-6 px-4 py-20">
        <section className="rounded-xl bg-white px-6 py-4">
          <p className="text-base font-semibold">Jenis Pesanan</p>
          <div className="mt-3 grid grid-cols-2 rounded-full border border-gray-200 bg-gray-100 p-1">
            <button className="rounded-full bg-green-700 py-2 text-center">
              <p className="text-xs font-medium text-white">Dine in</p>
            </button>
            <button className="rounded-full py-2 text-center">
              <p className="text-xs font-medium text-black">Take Away</p>
            </button>
          </div>
        </section>
        <div className="rounded-xl bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">Daftar Pesanan</p>
            <button
              onClick={() => router.push("/menu")}
              className="rounded-md bg-green-700 px-4 py-2 text-center text-xs font-semibold text-white"
            >
              Tambah Menu
            </button>
          </div>
          <div id="list-cart" className="mt-8 space-y-8">
            {cart.products.map((item) => (
              <ItemCart
                key={item.id}
                cartId={cart.id}
                customerId={cart.customer.id}
                productId={item.id}
                quantity={item.quantity}
                totalPrice={item.total_price}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white p-6">
          <p className="text-base font-semibold">Ringkasan Pembayaran</p>
          <div className="mt-5 space-y-2">
            <div className="">
              <div className="flex items-center justify-between">
                <p className="text-sm text-black">Subtotal</p>
                <p className="text-sm text-black">
                  {priceFormat(cart.total_amount)}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-black">Total Pembayaran</p>
              <p className="text-sm font-bold text-black">
                {priceFormat(cart.total_amount)}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl border-x-2 border-t-2 border-slate-300 bg-white p-4">
        <button
          // onClick={onOrder}
          className="mt-3 w-full rounded-full bg-green-600 py-3 text-center text-sm font-medium text-white"
        >
          Pilih Pembayaran
        </button>
      </section>
    </div>
  );
}
