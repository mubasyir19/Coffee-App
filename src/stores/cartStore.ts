import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  cart: {
    totalItems: number;
    totalAmount: number;
    items: CartItem[];
  };
  addCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  cart: {
    totalItems: 0,
    totalAmount: 0,
    items: [],
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
