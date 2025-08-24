import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Wanda Software</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating immersive simulation experiences that bring virtual worlds to life. 
              Join millions of players in our realistic gaming adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/games" className="text-gray-300 hover:text-blue-500 transition-colors">Our Games</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-blue-500 transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Bug Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Wanda Software. All rights reserved. | 
            <a href="#" className="hover:text-blue-500 transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-blue-500 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;