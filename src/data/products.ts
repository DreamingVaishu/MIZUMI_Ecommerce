import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'tops',
    name: 'Tops',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'bottoms',
    name: 'Bottoms',
    image: 'https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    image: 'https://images.pexels.com/photos/5885844/pexels-photo-5885844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/5709352/pexels-photo-5709352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'Shoes',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/5709352/pexels-photo-5709352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Kintsugi Linen Shirt',
    category: 'tops',
    price: 85,
    images: [
      'https://images.pexels.com/photos/6311159/pexels-photo-6311159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'Inspired by the Japanese art of kintsugi, this premium linen shirt features subtle golden thread details, symbolizing beauty in imperfection. Crafted from 100% organic linen for breathability and comfort.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Indigo', hex: '#3D5A80' },
      { name: 'Charcoal', hex: '#36454F' }
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Sashiko Pattern Tee',
    category: 'tops',
    price: 45,
    images: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'This premium cotton t-shirt features a traditional sashiko pattern embroidery, combining contemporary style with ancient Japanese textile techniques.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#000080' },
      { name: 'Sage', hex: '#9CAF88' }
    ],
    bestSeller: true
  },
  {
    id: '3',
    name: 'Wabi-Sabi Wide Leg Pants',
    category: 'bottoms',
    price: 20,
    images: [
      'https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'Embrace the beauty of imperfection with our Wabi-Sabi wide leg pants. Made from textured cotton-linen blend with a comfortable elastic waistband and deep pockets.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ecru', hex: '#F5F5DC' },
      { name: 'Black', hex: '#000000' },
      { name: 'Terracotta', hex: '#E2725B' }
    ],
    new: true
  },
  {
    id: '4',
    name: 'Kimono Inspired Jacket',
    category: 'outerwear',
    price: 21,
    images: [
      'https://images.pexels.com/photos/5885844/pexels-photo-5885844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/5686481/pexels-photo-5686481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'A modern take on the traditional kimono, this lightweight jacket features clean lines and a relaxed fit. Perfect for layering in any season.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Indigo', hex: '#3D5A80' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Olive', hex: '#708238' }
    ],
    featured: true
  },
  {
    id: '5',
    name: 'Furoshiki Tote Bag',
    category: 'accessories',
    price: 65,
    images: [
      'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'Inspired by traditional furoshiki wrapping cloth, this versatile tote bag is handcrafted from premium cotton canvas with Japanese wave pattern details.',
    sizes: ['One Size'],
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Indigo', hex: '#3D5A80' }
    ],
    bestSeller: true
  },
  {
    id: '6',
    name: 'Zen Garden Scarf',
    category: 'accessories',
    price: 55,
    images: [
      'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/6311328/pexels-photo-6311328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'This lightweight silk-blend scarf features a minimalist pattern inspired by zen garden sand patterns, adding an elegant touch to any outfit.',
    sizes: ['One Size'],
    colors: [
      { name: 'Sand', hex: '#E0C9A6' },
      { name: 'Slate', hex: '#708090' },
      { name: 'Blush', hex: '#DE5D83' }
    ],
    new: true
  },
  {
    id: '7',
    name: 'Origami Pleated Skirt',
    category: 'bottoms',
    price: 85,
    images: [
      'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/5710822/pexels-photo-5710822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'Featuring precision pleats inspired by origami techniques, this midi skirt combines structure with flowing movement for an elegant silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Moss', hex: '#8A9A5B' }
    ]
  },
  {
    id: '8',
    name: 'Shoji Screen Print Shirt',
    category: 'tops',
    price: 75,
    images: [
      'https://images.pexels.com/photos/9558233/pexels-photo-9558233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/9558757/pexels-photo-9558757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ],
    description: 'This relaxed button-up shirt features a subtle print inspired by traditional shoji screens, printed on lightweight organic cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Sage', hex: '#9CAF88' }
    ]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};