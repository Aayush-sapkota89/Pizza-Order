import React from 'react';
import { Clock, Star, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Authentic Italian Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Fresh ingredients, traditional recipes, delivered hot to your hotel room
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="opacity-90">30-45 minutes to your room</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="opacity-90">Fresh ingredients daily</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hotel Delivery</h3>
              <p className="opacity-90">Direct to your door</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};