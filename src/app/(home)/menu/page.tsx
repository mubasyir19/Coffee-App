import OrderPopUp from "@/components/OrderPopUp";
import ProductCard from "@/components/ProductCard";
import { getCategories } from "@/services/categoryService";
import { Category } from "@/types/category";
import React from "react";

export default async function MenuPage() {
  const categories = await getCategories();

  return (
    <div className="bg-white pt-8">
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
        <div className="sticky top-0 h-screen w-20 bg-gray-100 pb-40">
          {categories?.data?.map((category: Category) => (
            <button
              key={category.id}
              // onClick={() => scrollToTag(category.name)}
              className="w-full border-l-4 border-green-700 bg-white p-2 text-start text-xs text-green-700"
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="w-full px-2 pb-40">
          {categories?.data?.map((category: Category) => (
            <div key={category.id}>
              <p
                id={category.name}
                className="my-5 text-base font-semibold text-black"
              >
                {category.name}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {category.products?.map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      sourceImage={product.image_product}
                      title={product.name}
                      slug={product.slug}
                      price={Number(product.price)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <OrderPopUp />
    </div>
  );
}
