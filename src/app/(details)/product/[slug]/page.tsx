import DetailProductCard from "@/components/DetailProductCard";
import QuantitySelector from "@/components/QuantitySelector";
import { getProductBySlug } from "@/services/productService";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  params: {
    slug: string;
  };
}

export default async function DetailProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  return (
    <div className="relative">
      <section className="fixed left-0 right-0 top-0 w-full bg-white py-4">
        <button className="absolute left-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black text-lg font-medium">
          <span>
            <ArrowLeftIcon className="h-5 w-3 text-black" />
          </span>
        </button>
        <p className="text-center text-lg font-semibold text-black">
          {product.data.name}
        </p>
      </section>
      <section className="px-4 py-20">
        <DetailProductCard
          id={product.data.id}
          title={product.data.name}
          imageProduct={product.data.image_product}
          description={product.data.description}
        />
      </section>
      <QuantitySelector product={product.data} />
    </div>
  );
}
