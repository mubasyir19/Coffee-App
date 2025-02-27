import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface RegisterForm {
  fullname: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  password: string;
}

export default function useRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterForm>({
    fullname: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/customer/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registrasi gagal.");
      }

      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        router.push("/login");
      }, 1000);
    } catch (error) {
      setError("Terjadi kesalahan.");
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
    handleSubmit,
    closeModal,
  };
}
