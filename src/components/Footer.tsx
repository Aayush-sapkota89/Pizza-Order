import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hotel Lemon Pizza</h3>
            <p className="text-gray-400 mb-4">
              Authentic Italian pizza delivered fresh to your hotel room. 
              Made with love and the finest ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">(555) 123-PIZZA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">orders@hotellemon.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">Downtown Hotel District</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div>
                  <p>Mon-Thu: 11am - 11pm</p>
                  <p>Fri-Sat: 11am - 12am</p>
                  <p>Sunday: 12pm - 10pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Menu</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Delivery Info</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hotel Lemon Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};