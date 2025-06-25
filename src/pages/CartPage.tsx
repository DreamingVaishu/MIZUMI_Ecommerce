import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, itemCount, subtotal } = useCart();

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

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-md">
          <ShoppingBag className="mx-auto h-16 w-16 text-neutral-300" />
          <h2 className="mt-6 text-2xl font-medium text-neutral-900">Your cart is empty</h2>
          <p className="mt-2 text-neutral-600">
            Looks like you haven't added any items to your cart yet.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium text-neutral-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cart.map((item) => (
              <motion.div 
                key={`${item.product.id}-${item.size}-${item.color}`}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 border-b border-neutral-200 pb-6"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium text-neutral-900">
                        <Link to={`/product/${item.product.id}`} className="hover:text-indigo-700">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        {item.color}, {item.size}
                      </p>
                    </div>
                    <p className="text-base font-medium text-neutral-900">${item.product.price}</p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex h-8 w-24">
                      <button
                        type="button"
                        className="flex items-center justify-center rounded-l-md border border-r-0 border-neutral-300 px-2 text-neutral-900 hover:bg-neutral-50"
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.product.id, item.quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value)))}
                        className="w-full border-y border-neutral-300 text-center text-neutral-900 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button
                        type="button"
                        className="flex items-center justify-center rounded-r-md border border-l-0 border-neutral-300 px-2 text-neutral-900 hover:bg-neutral-50"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      type="button"
                      className="text-neutral-600 hover:text-red-600 transition-colors"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8">
            <Link to="/" className="inline-flex items-center text-sm text-neutral-600 hover:text-indigo-700">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <motion.div 
          className="rounded-lg bg-neutral-50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg font-medium text-neutral-900 mb-6">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-neutral-600">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</p>
              <p className="font-medium text-neutral-900">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-600">Shipping</p>
              <p className="font-medium text-neutral-900">$5.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-600">Tax</p>
              <p className="font-medium text-neutral-900">${(subtotal * 0.1).toFixed(2)}</p>
            </div>
            <div className="border-t border-neutral-200 pt-4 flex justify-between">
              <p className="text-base font-medium text-neutral-900">Total</p>
              <p className="text-base font-medium text-neutral-900">
                ${(subtotal + 5 + subtotal * 0.1).toFixed(2)}
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/checkout">
              <Button variant="primary" size="lg" fullWidth>
                Proceed to Checkout
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 text-center text-sm text-neutral-600">
            <p>We accept all major credit cards</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;