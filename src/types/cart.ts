import { Customer } from "./auth";
import { Product } from "./product";

export interface CartOrder {
  total_amount: number;
  total_items: number;
  customer: Customer;
  products: Product[];
}
