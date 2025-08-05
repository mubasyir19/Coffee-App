import { Customer } from "./auth";
import { ProductCart } from "./product";

export interface CartOrder {
  id: string;
  total_amount: number;
  total_items: number;
  customer: Customer;
  products: ProductCart[];
}
