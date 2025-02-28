import { useEffect, useState } from "react";

interface User {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
}

export default function useProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}`,
        );
        const result = await response.json();

        setUser(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setMessage(error.message);
        } else {
          setMessage("Gagal mendapatkan profile");
        }
      }
    };

    fetchProfile();
  }, []);

  return { user, message };
}
