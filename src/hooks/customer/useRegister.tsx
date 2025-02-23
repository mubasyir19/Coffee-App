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

export const Register = () => {
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
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        router.push(`/login`);
        setLoading(false);
      } else if (response.status === 401) {
        setError(data.message);
        // setIsModalOpen(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Error Login");
      }
    }
  };

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
