export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}