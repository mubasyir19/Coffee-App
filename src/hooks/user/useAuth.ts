"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { PayloadAccount } from "@/data-types";

interface User {
  id: string;
  fullname: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("authToken") ?? "";

    if (token) {
      const jwtToken = atob(token);
      console.log("ini token nya = ", jwtToken);

      const fetchUser = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/verify`,
            {
              // method: "GET",
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            },
          );

          console.log("ini response nya = ", response);

          if (!response.ok) {
            throw new Error("User not authenticated");
          }

          const data = await response.json();
          setIsVerified(true);
          console.log("data response = ", data);
          const payload = jwtDecode<PayloadAccount>(jwtToken);
          setUser(payload);
        } catch (error) {
          console.log("error = ", error);
          setUser(null);
        }
      };

      fetchUser();
    }
  }, [isVerified]);

  return { user, isVerified };
}
