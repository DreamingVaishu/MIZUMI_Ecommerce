import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const OrderConfirmationPage: React.FC = () => {
  // Generate a random order number
  const orderNumber = `MIZUMI-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-6 text-3xl font-medium text-neutral-900">Thank You for Your Order!</h1>
        <p className="mt-2 text-lg text-neutral-600">
          Your order has been received and is being processed.
        </p>
        
        <div className="mt-8 rounded-lg bg-neutral-50 p-6 text-left">
          <h2 className="text-lg font-medium text-neutral-900 mb-4">Order Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-neutral-600">Order Number:</p>
              <p className="font-medium text-neutral-900">{orderNumber}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-600">Date:</p>
              <p className="font-medium text-neutral-900">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-600">Estimated Delivery:</p>
              <p className="font-medium text-neutral-900">
                {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-neutral-600">
          <p>A confirmation email has been sent to your email address.</p>
          <p className="mt-2">
            For any questions about your order, please contact our customer service team.
          </p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
          <Button variant="outline">Track Order</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmationPage;