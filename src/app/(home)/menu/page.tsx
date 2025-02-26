"use client";

import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/services/data";
import React from "react";

export default function MenuPage() {
  const scrollToTag = (id: string) => {
    const tag = document.getElementById(id);
    if (tag) {
      tag.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white pt-8">
      <section className="px-4">
        <div className="grid grid-cols-2 rounded-full border border-gray-200 bg-gray-100 p-1">
          <button className="rounded-full bg-green-700 py-2 text-center">
            <p className="text-xs font-medium text-white">Dine in</p>
          </button>
          <button className="rounded-full py-2 text-center">
            <p className="text-xs font-medium text-black">Take Away</p>
          </button>
        </div>
      </section>
      <section className="mt-4 flex">
        <div className="sticky top-0 h-screen w-20 bg-gray-100 pb-28">
          <button
            onClick={() => scrollToTag("Kopi-Kreasi")}
            className="w-full border-l-4 border-green-700 bg-white p-2 text-start text-xs text-green-700"
          >
            Kopi Kreasi
          </button>
          <button
            onClick={() => scrollToTag("Non-Coffee")}
            className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500"
          >
            Non-Coffee
          </button>
          <button
            onClick={() => scrollToTag("Tea")}
            className="w-full border-l-4 border-gray-100 bg-gray-100 p-2 text-start text-xs text-gray-500"
          >
            Tea
          </button>
        </div>
        <div className="w-full px-2 pb-28">
          {categories.map((category) => (
            <div key={category.id}>
              <p
                id="Kopi-Kreasi"
                className="my-5 text-base font-semibold text-black"
              >
                {category.name}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {products
                  .filter((product) => product.categoryID === category.id)
                  .map((product) => (
                    <div key={product.id}>
                      <ProductCard
                        id={product.id}
                        sourceImage={product.image}
                        title={product.name}
                        price={product.price}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
