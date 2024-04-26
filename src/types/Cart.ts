import { Product } from './Product';

export type CartData = {
  id: number;
  name: string;
  price: number;
  banner: string;
  amount: number;
  total: number;
};



export type CartContextData = {
  cart: CartData[];
  cartAmount: number;
  addCart: (product: Product) => void;
};
