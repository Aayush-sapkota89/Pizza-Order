import React, { useState } from 'react';
import { PizzaCard } from './PizzaCard';
import { pizzas } from '../data/pizzas';
import { Pizza } from '../types';

interface PizzaGridProps {
  onCustomize: (pizza: Pizza) => void;
}

export const PizzaGrid: React.FC<PizzaGridProps> = ({ onCustomize }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Pizzas' },
    { id: 'classic', name: 'Classic' },
    { id: 'premium', name: 'Premium' },
    { id: 'specialty', name: 'Specialty' },
  ];

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Delicious Pizzas
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handcrafted with love using the finest ingredients and traditional Italian techniques
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-yellow-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onCustomize={onCustomize}
          />
        ))}
      </div>
    </div>
  );
};