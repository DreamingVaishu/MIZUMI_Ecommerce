import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div 
      className="relative h-64 overflow-hidden rounded-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/category/${category.id}`}>
        <div className="absolute inset-0 z-10 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20" />
        <img 
          src={category.image} 
          alt={category.name} 
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="text-2xl font-medium text-white tracking-wide">
            {category.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;