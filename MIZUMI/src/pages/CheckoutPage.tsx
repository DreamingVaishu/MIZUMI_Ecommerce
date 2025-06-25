import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, User, Home, Truck, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const CheckoutPage: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Process order
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 2000);
  };

  const shippingCost = 5;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/cart" className="inline-flex items-center text-sm text-neutral-600 hover:text-indigo-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Cart
      </Link>
      
      <div className="mb-12">
        <h1 className="text-2xl font-medium text-neutral-900 mb-8">Checkout</h1>
        
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? 'bg-indigo-900 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              <User className="h-5 w-5" />
            </div>
            <span className="ml-3 text-sm font-medium text-neutral-900">Personal Info</span>
          </div>
          <div className="h-px w-12 bg-neutral-300"></div>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? 'bg-indigo-900 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              <Home className="h-5 w-5" />
            </div>
            <span className="ml-3 text-sm font-medium text-neutral-900">Shipping</span>
          </div>
          <div className="h-px w-12 bg-neutral-300"></div>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
              currentStep >= 3 ? 'bg-indigo-900 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}>
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="ml-3 text-sm font-medium text-neutral-900">Payment</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-2">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-neutral-900">Personal Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                  />
                </div>
              </div>
            )}
            
            {/* Step 2: Shipping */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-neutral-900">Shipping Address</h2>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
                      Postal/Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-indigo-700 mr-2" />
                  <span className="text-sm text-neutral-700">
                    Standard shipping (3-5 business days)
                  </span>
                </div>
              </div>
            )}
            
            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-neutral-900">Payment Information</h2>
                
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-neutral-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expDate" className="block text-sm font-medium text-neutral-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-neutral-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      className="w-full rounded-md border-neutral-500 shadow-sm focus:border-indigo-900 focus:ring-indigo-500 border border-dark"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-indigo-700 mr-2" />
                  <span className="text-sm text-neutral-700">
                    All transactions are secure and encrypted
                  </span>
                </div>
              </div>
            )}
            
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
              <Button 
                variant="primary" 
                type="submit"
                disabled={isSubmitting}
                className="ml-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Processing...
                  </span>
                ) : currentStep < 3 ? 'Continue' : 'Place Order'}
              </Button>
            </div>
          </motion.div>
        </form>
        
        {/* Order Summary */}
        <motion.div 
          className="rounded-lg bg-neutral-50 p-6 h-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg font-medium text-neutral-900 mb-6">Order Summary</h2>
          
          <div className="max-h-60 overflow-auto space-y-4 mb-6">
            {cart.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-900">
                        {item.product.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-600">
                        {item.color}, {item.size}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-neutral-900">
                      ${item.product.price} x {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4 border-t border-neutral-200 pt-4">
            <div className="flex justify-between">
              <p className="text-neutral-600">Subtotal</p>
              <p className="font-medium text-neutral-900">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-600">Shipping</p>
              <p className="font-medium text-neutral-900">${shippingCost.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-600">Tax</p>
              <p className="font-medium text-neutral-900">${tax.toFixed(2)}</p>
            </div>
            <div className="border-t border-neutral-200 pt-4 flex justify-between">
              <p className="text-base font-medium text-neutral-900">Total</p>
              <p className="text-base font-medium text-neutral-900">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;