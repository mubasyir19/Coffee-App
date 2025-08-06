// import { getTokenCookies } from "@/utils/token";
import { Customer } from "@/types/auth";
import { ProductCart } from "@/types/product";
import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const initialCustomer = {
  id: "",
  fullname: "",
  username: "",
  email: "",
  phoneNumber: "",
  address: "",
};

interface CartState {
  items: CartItem[];
  cart: {
    id: string;
    total_items: number;
    total_amount: number;
    customer: Customer;
    products: ProductCart[];
  };
  isLoading: boolean;
  error: string | null;
  fetchCart: (customerId: string) => void;
  addCart: (customerId: string, productId: string, quantity: number) => void;
  updateItemCart: (
    customerId: string,
    productId: string,
    quantity: number,
  ) => void;
  removeFromCart: (customerId: string, itemId: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  cart: {
    id: "",
    total_items: 0,
    total_amount: 0,
    customer: initialCustomer,
    products: [],
  },
  isLoading: false,
  error: null,
  fetchCart: async (customerId) => {
    set({ isLoading: true });
    // const jwtToken = getTokenCookies();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart?customerId=${customerId}`,
        {
          headers: {
            // Authorization: `Bearer ${jwtToken}`
          },
        },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      console.error("Fetch cart failed:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  addCart: async (
    customerId: string,
    productId: string,
    quantity: number = 1,
  ) => {
    set({ isLoading: true });
    // const jwtToken = getTokenCookies();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ customerId, productId, quantity }),
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart?customerId=${customerId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${jwtToken}`,
        //   },
        // },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message || "Failed to add to cart" });
      } else {
        set({ error: "Failed to add to cart" });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  updateItemCart: async (
    customerId: string,
    productId: string,
    quantity: number,
  ) => {
    set({ isLoading: true });
    // const jwtToken = getTokenCookies();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ customerId, productId, quantity }),
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart?customerId=${customerId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${jwtToken}`,
        //   },
        // },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message || "Failed to add to cart" });
      } else {
        set({ error: "Failed to add to cart" });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  removeFromCart: async (customerId: string, itemId: string) => {
    set({ isLoading: true });
    // const jwtToken = getTokenCookies();
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart/delete/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${jwtToken}`,
          },
        },
      );

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_COFFEE}/cart?customerId=${customerId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${jwtToken}`,
        //   },
        // },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message || "Failed to remove item" });
      } else {
        set({ error: "Failed to remove item" });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  // set((state) => ({
  //   items: state.items.filter((i) => i.id !== itemId),
  // })),
}));

export default useCartStore;
