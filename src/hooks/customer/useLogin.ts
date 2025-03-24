import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

interface LoginForm {
  username: string;
  password: string;
}

export default function useLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/customer/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      //   console.log("ini result = ", data);
      if (!response.ok) {
        throw new Error(data.message || "Login gagal.");
      }

      const tokenBase64 = btoa(data.data);
      Cookies.set("authToken", tokenBase64, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });

      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        router.push("/home");
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        setError("Terjadi Kesalahan");
      }
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return {
    formData,
    error,
    isModalOpen,
    loading,
    handleChange,
    handleLogin,
    closeModal,
  };
}
