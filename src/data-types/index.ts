export interface PayloadAccount {
  id: string;
  fullname: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  iat: number;
}

export interface Product {
  id: string;
  name: string;
  category_id: string;
  description: string;
  price: string;
  image_product: string;
}

interface ProductItem {
  id: string;
  productName: string;
  price: number;
}

interface TransactionDetails {
  totalItem: number;
  totalPrice: number;
}

export interface CartOrder {
  item: ProductItem;
  transaction: TransactionDetails;
}
