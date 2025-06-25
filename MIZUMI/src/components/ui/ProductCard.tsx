import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <div className="aspect-h-4 aspect-w-3 h-80 overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.new && <Badge variant="new">New</Badge>}
            {product.bestSeller && <Badge variant="sale">Best Seller</Badge>}
          </div>
        </div>
        <div className="mt-3 flex flex-col">
          <h3 className="text-base font-medium text-neutral-900">{product.name}</h3>
          <p className="mt-1 text-sm text-neutral-500">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
          <p className="mt-1 font-medium text-neutral-900">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;