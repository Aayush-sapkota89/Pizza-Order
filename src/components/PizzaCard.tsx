import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { Pizza } from '../types';

interface PizzaCardProps {
  pizza: Pizza;
  onCustomize: (pizza: Pizza) => void;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, onCustomize }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'classic': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'specialty': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <div className={`aspect-w-16 aspect-h-12 bg-gray-200 ${!imageLoaded ? 'animate-pulse' : ''}`}>
          <img
            src={pizza.image}
            alt={pizza.name}
            className={`w-full h-48 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(pizza.category)}`}>
            {pizza.category.charAt(0).toUpperCase() + pizza.category.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium ml-1">4.8</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{pizza.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ${pizza.basePrice.toFixed(2)}
            <span className="text-sm font-normal text-gray-500 ml-1">from</span>
          </div>
          
          <button
            onClick={() => onCustomize(pizza)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Customize</span>
          </button>
        </div>
      </div>
    </div>
  );
};