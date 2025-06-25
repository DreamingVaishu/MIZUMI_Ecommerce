import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Waves className="h-6 w-6 text-indigo-900" />
              <span className="ml-2 text-lg font-medium tracking-wide">MIZUMI</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-600">
              MIZUMI 
              <br></br>
              Modern clothing that balances simplicity, quality craftsmanship, and timeless design.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-indigo-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-indigo-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-indigo-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-indigo-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/tops" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/category/bottoms" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/category/outerwear" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">About</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about#philosophy" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/about#sustainability" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-indigo-700 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-center text-neutral-500">
            &copy; {new Date().getFullYear()} MIZUMI. All rights reserved.
            <br />
            Made and Publiched by VAISHNAV 
            <br />
            Daydreamingvaishu@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;