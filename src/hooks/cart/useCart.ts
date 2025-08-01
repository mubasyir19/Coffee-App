import { useState } from "react";

export const useCart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCart = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart?customerId=${customerId}`,
      );
    } catch (error) {}
  };
};
