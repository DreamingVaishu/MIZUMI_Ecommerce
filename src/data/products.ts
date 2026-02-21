import { Product, Category } from '../types';
import { supabase } from '../lib/supabase';

// Helper to handle mapping if Supabase column names differ (e.g., snake_case to camelCase)
const mapProduct = (p: any): Product => ({
  id: p.id,
  name: p.name,
  category: p.category,
  price: Number(p.price),
  images: p.images,
  description: p.description,
  sizes: p.sizes,
  colors: p.colors,
  featured: p.featured,
  new: p.new,
  bestSeller: p.best_seller
});

export const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
  return data as Category[];
};

export const fetchProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data.map(mapProduct);
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*').eq('featured', true);
  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
  return data.map(mapProduct);
};

export const fetchNewArrivals = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*').eq('new', true);
  if (error) {
    console.error('Error fetching new arrivals:', error);
    return [];
  }
  return data.map(mapProduct);
};

export const fetchBestSellers = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*').eq('best_seller', true);
  if (error) {
    console.error('Error fetching best sellers:', error);
    return [];
  }
  return data.map(mapProduct);
};

export const fetchProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*').eq('category', categoryId);
  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
  return data.map(mapProduct);
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  if (error) {
    console.error('Error fetching product by id:', error);
    return null;
  }
  return mapProduct(data);
};

// Keep old exports as fallbacks/placeholders for now to prevent immediate crashes, 
// but we should update components to use the fetch* versions.
export const products: Product[] = [];
export const getFeaturedProducts = () => [];
export const getNewArrivals = () => [];
export const getBestSellers = () => [];
export const getProductsByCategory = (categoryId: string) => [];
export const getProductById = (id: string) => undefined;
