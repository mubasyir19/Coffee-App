import { Product } from "@/data-types";
import { useEffect, useState } from "react";

export default function useProductDetail(productId: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const productDetail = async () => {
      if (!productId) {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/product/id/${productId}`,
        );
        const result = await response.json();
        console.log("ini data response = ", result.data);
        setProduct(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error(String(error)));
        }
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    productDetail();
  }, [productId]);

  return { product, loading, error };
}
