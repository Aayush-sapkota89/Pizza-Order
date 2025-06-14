import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PizzaGrid } from './components/PizzaGrid';
import { PizzaCustomizer } from './components/PizzaCustomizer';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { Pizza } from './types';

function App() {
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  } = useCart();

  const handleCustomizePizza = (pizza: Pizza) => {
    setSelectedPizza(pizza);
  };

  const handleCloseCustomizer = () => {
    setSelectedPizza(null);
  };

  const handleAddToCart = (pizza: Pizza, size: any, toppings: any[], quantity: number) => {
    addToCart(pizza, size, toppings, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={getCartItemCount()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Hero />
      
      <PizzaGrid onCustomize={handleCustomizePizza} />
      
      {selectedPizza && (
        <PizzaCustomizer
          pizza={selectedPizza}
          onClose={handleCloseCustomizer}
          onAddToCart={handleAddToCart}
        />
      )}
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        cartTotal={getCartTotal()}
      />
      
      <Footer />
    </div>
  );
}

export default App;