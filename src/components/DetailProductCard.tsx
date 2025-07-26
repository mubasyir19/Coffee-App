import Image from "next/image";
import React from "react";

interface DetailProductCardProps {
  id: string;
  title: string;
  imageProduct?: string;
  description: string;
}

export default function DetailProductCard({
  id,
  title,
  imageProduct,
  description,
}: DetailProductCardProps) {
  return (
    <div key={id} className="rounded-xl bg-white p-4 shadow-lg">
      {imageProduct ? (
        <Image
          src={imageProduct}
          alt={title}
          width={240}
          height={240}
          className="mx-auto h-60 w-auto object-cover"
        />
      ) : (
        <div className="flex h-60 w-full items-center justify-center bg-gray-200 text-gray-500">
          No image available
        </div>
      )}
      <h1 className="mt-2 text-center text-2xl font-semibold text-black">
        {title}
      </h1>
      <p className="mt-1 text-center text-base font-medium text-gray-400">
        {description}
      </p>
      {/* <p className='text-base font-medium text-gray-400'>Perpaduan manisnya gula aren dengan kopi dengan rasa yang khas dan menyegarkan</p> */}
    </div>
  );
}
