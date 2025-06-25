import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import CategoryCard from '../components/ui/CategoryCard';
import { 
  getFeaturedProducts, 
  getNewArrivals, 
  getBestSellers,
  categories
} from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6311155/pexels-photo-6311155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Hero background" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        
        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-8xl font-large text-white tracking-wider mb-6">
              MIZUMI
            </h1>
            <p className="mx-auto max-w-xl text-lg sm:text-xl text-white mb-8">
              Modern colathing brand 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Explore Collection
              </Button>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium text-neutral-900 mb-4">Shop by Category</h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              Explore our collection of mindfully crafted clothing and accessories
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2 
              className="text-2xl font-medium text-neutral-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              New Arrivals
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/new-arrivals" className="flex items-center text-indigo-900 hover:text-indigo-700 transition-colors">
                <span className="text-sm font-medium">View All</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newArrivals.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Banner */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2 
              className="text-3xl font-medium text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Crafted with Care For You
            </motion.h2>
            <motion.p 
              className="text-lg text-indigo-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our collection embraces the philosophy of wabi-sabi, finding beauty in imperfection and simplicity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-900">
                  Learn About Our Process
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <svg className="h-full w-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,500 C0,500 200,300 500,300 C800,300 1000,500 1000,500 C1000,500 800,700 500,700 C200,700 0,500 0,500 Z" fill="white" />
          </svg>
        </div>
      </section>
      
      {/* Best Sellers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2 
              className="text-2xl font-medium text-neutral-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Best Sellers
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/category/all" className="flex items-center text-indigo-900 hover:text-indigo-700 transition-colors">
                <span className="text-sm font-medium">View All Products</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bestSellers.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-xl text-center">
            <motion.h2 
              className="text-2xl font-medium text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Community
            </motion.h2>
            <motion.p 
              className="text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sign up for our newsletter to receive updates on new collections and exclusive offers.
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-md border-neutral-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"
                required
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;