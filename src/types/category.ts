import { ProductData } from "./product";

export interface Category {
  id: string;
  name: string;
  products: ProductData[];
}
