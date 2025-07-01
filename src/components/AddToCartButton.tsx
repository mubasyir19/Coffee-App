import useCartStore from "@/stores/cartStore";
import React from "react";

interface AddToCartButtonProps {
  item: {
    id: string;
    name: string;
    price: number;
  };
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addCart);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: 1 });
  };
  return (
    //   <button onClick={handleAddToCart}>Tambah ke Keranjang</button>
    <button
      onClick={handleAddToCart}
      className="mt-3 w-full rounded-full bg-greenBum py-3 text-center text-sm font-medium text-white"
    >
      Tambah ke Keranjang
    </button>
  );
}
