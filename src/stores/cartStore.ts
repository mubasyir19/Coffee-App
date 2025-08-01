// import { getTokenCookies } from "@/utils/token";
import { Customer } from "@/types/auth";
import { Product } from "@/types/product";
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
    products: Product[];
  };
  isLoading: boolean;
  fetchCart: (customerId: string) => void;
  addCart: (item: CartItem) => void;
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
  addCart: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      } else {
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== itemId),
    })),
}));

export default useCartStore;
