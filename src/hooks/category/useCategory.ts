import { Product } from "@/data-types";
import { useEffect, useState } from "react";

interface ListCategoryData {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}

export default function useCategory() {
  const [categories, setCategories] = useState<ListCategoryData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/categories`,
        );
        const result = await response.json();
        setCategories(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error(String(error)));
        }
        setCategories(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
