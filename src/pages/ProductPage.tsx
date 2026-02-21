import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../data/products';
import { Product } from '../types';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    const loadProductData = async () => {
      if (productId) {
        setIsLoading(true);
        try {
          const fetchedProduct = await fetchProductById(productId);
          if (fetchedProduct) {
            setProduct(fetchedProduct);
            setSelectedImage(fetchedProduct.images[0]);
            setSelectedSize(fetchedProduct.sizes[0]);
            setSelectedColor(fetchedProduct.colors[0].name);
          }
        } catch (error) {
          console.error('Error loading product data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadProductData();
  }, [productId]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart(product, quantity, selectedSize, selectedColor);
      setAddedToCart(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium text-neutral-900 mb-4">Product Not Found</h2>
        <p className="mb-8 text-neutral-600">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to={`/category/${product.category}`} className="inline-flex items-center text-sm text-neutral-600 hover:text-indigo-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-neutral-100">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`overflow-hidden rounded-md ${selectedImage === image ? 'ring-2 ring-indigo-700' : 'ring-1 ring-neutral-200'}`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-16 w-16 object-cover object-center"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {product.new && <Badge variant="new">New</Badge>}
            {product.bestSeller && <Badge variant="sale">Best Seller</Badge>}
          </div>

          <h1 className="text-2xl font-medium text-neutral-900">{product.name}</h1>
          <p className="text-xl font-medium text-neutral-900 mt-2">${product.price}</p>

          <div className="mt-8">
            <p className="text-neutral-600">{product.description}</p>
          </div>

          {/* Color Selection */}
          <div className="mt-8">
            <h2 className="text-sm font-medium text-neutral-900 mb-3">Color</h2>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`relative h-8 w-8 rounded-full border ${selectedColor === color.name
                      ? 'ring-2 ring-offset-2 ring-indigo-700'
                      : 'ring-1 ring-neutral-300'
                    }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Color: ${color.name}`}
                >
                  {selectedColor === color.name && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-neutral-900">Size</h2>
              <button className="text-sm text-indigo-700 hover:text-indigo-600">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`flex h-10 items-center justify-center rounded-md border ${selectedSize === size
                      ? 'border-indigo-700 bg-indigo-50 text-indigo-700'
                      : 'border-neutral-300 text-neutral-900 hover:bg-neutral-50'
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <h2 className="text-sm font-medium text-neutral-900 mb-3">Quantity</h2>
            <div className="flex h-10 w-32">
              <button
                type="button"
                className="flex items-center justify-center rounded-l-md border border-r-0 border-neutral-300 px-4 text-neutral-900 hover:bg-neutral-50"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-full border-y border-neutral-300 text-center text-neutral-900 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                type="button"
                className="flex items-center justify-center rounded-r-md border border-l-0 border-neutral-300 px-4 text-neutral-900 hover:bg-neutral-50"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor || addedToCart}
              className="flex items-center justify-center"
            >
              {addedToCart ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>

          {/* Additional Information */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="prose prose-sm max-w-none text-neutral-600">
              <p>Free shipping on all orders over $100.</p>
              <p>Easy 30-day returns.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;