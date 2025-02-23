import React from "react";

interface DetailProductCardProps {
  title: string;
  description: string;
}

export default function DetailProductCard({
  title,
  description,
}: DetailProductCardProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-lg">
      <div className="h-60 w-full bg-gray-400"></div>
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
