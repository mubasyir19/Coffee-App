export interface ProductData {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  description: string;
  price: number;
  image_product: string;
}

export interface ProductCart {
  id: string;
  name: string;
  description: string;
  price: number;
  image_product: string;
  quantity: number;
  total_price: number;
}
