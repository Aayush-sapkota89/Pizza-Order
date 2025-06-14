import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Pizza, PizzaSize, Topping } from '../types';
import { pizzaSizes, toppings } from '../data/pizzas';

interface PizzaCustomizerProps {
  pizza: Pizza;
  onClose: () => void;
  onAddToCart: (pizza: Pizza, size: PizzaSize, toppings: Topping[], quantity: number) => void;
}

export const PizzaCustomizer: React.FC<PizzaCustomizerProps> = ({
  pizza,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>(pizzaSizes[1]); // Default to medium
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState(1);

  const toggleTopping = (topping: Topping) => {
    setSelectedToppings(prev => {
      const exists = prev.find(t => t.id === topping.id);
      if (exists) {
        return prev.filter(t => t.id !== topping.id);
      } else {
        return [...prev, topping];
      }
    });
  };

  const calculatePrice = () => {
    const basePrice = pizza.basePrice * selectedSize.multiplier;
    const toppingsPrice = selectedToppings.reduce((sum, topping) => sum + topping.price, 0);
    return (basePrice + toppingsPrice) * quantity;
  };

  const handleAddToCart = () => {
    onAddToCart(pizza, selectedSize, selectedToppings, quantity);
    onClose();
  };

  const groupedToppings = toppings.reduce((acc, topping) => {
    if (!acc[topping.category]) {
      acc[topping.category] = [];
    }
    acc[topping.category].push(topping);
    return acc;
  }, {} as Record<string, Topping[]>);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Customize Your {pizza.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Description */}
            <div>
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">{pizza.description}</p>
            </div>

            {/* Right Column - Customization Options */}
            <div>
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Choose Size</h3>
                <div className="grid grid-cols-2 gap-3">
                  {pizzaSizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedSize.size === size.size
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">{size.name}</div>
                      <div className="text-sm text-gray-600">
                        ${(pizza.basePrice * size.multiplier).toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Toppings Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Add Toppings</h3>
                {Object.entries(groupedToppings).map(([category, categoryToppings]) => (
                  <div key={category} className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2 capitalize">
                      {category === 'meat' ? 'Meat' : category === 'vegetable' ? 'Vegetables' : category}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {categoryToppings.map((topping) => (
                        <button
                          key={topping.id}
                          onClick={() => toggleTopping(topping)}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                            selectedToppings.find(t => t.id === topping.id)
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="font-medium">{topping.name}</span>
                          <span className="text-gray-600">+${topping.price.toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900">
                Total: ${calculatePrice().toFixed(2)}
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};