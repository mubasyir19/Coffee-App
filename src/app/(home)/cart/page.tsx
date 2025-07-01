"use client";

import AddToCartButton from "@/components/AddToCartButton";
import useCartStore from "@/stores/cartStore";
import React from "react";

export default function CartPage() {
  const product = {
    id: "1",
    name: "Kopi Espresso",
    price: 5000,
  };

  const cartItems = useCartStore((state) => state.items);
  return (
    <>
      <section className="px-4">
        <div>
          <h1>{product.name}</h1>
          <p>Harga: Rp{product.price}</p>
          <AddToCartButton item={product} />
          <h2>Keranjang Belanja</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity}) - Rp{item.price * item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
