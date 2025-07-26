import { useEffect, useState } from "react";

interface ListProductData {
  id: string;
  name: string;
  category_id: string;
  description: string;
  price: number;
  image_product: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function useProduct() {
  const [products, setProducts] = useState<ListProductData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/products`,
        );
        const result = await response.json();
        setProducts(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error(String(error)));
        }
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
