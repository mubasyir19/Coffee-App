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
  ID: string;
  Name: string;
  CategoryID: string;
  Description: string;
  Price: string;
  Image: string;
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
