// import { getTokenCookies } from "@/utils/token";
import { Customer } from "@/types/auth";
import { ProductData } from "@/types/product";
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
    totalItems: number;
    totalAmount: number;
    customer: Customer;
    products: ProductData[];
  };
  isLoading: boolean;
  error: string | null;
  fetchCart: (customerId: string) => void;
  addCart: (customerId: string, productId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  cart: {
    totalItems: 0,
    totalAmount: 0,
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
  // addCart: (item) =>
  //   set((state) => {
  //     const existingItem = state.items.find((i) => i.id === item.id);
  //     if (existingItem) {
  //       return {
  //         items: state.items.map((i) =>
  //           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
  //         ),
  //       };
  //     } else {
  //       return { items: [...state.items, { ...item, quantity: 1 }] };
  //     }
  //   }),
  removeFromCart: (itemId) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== itemId),
    })),
}));

export default useCartStore;
