import { useState, useCallback } from 'react';
import { CartItem, Pizza, PizzaSize, Topping } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((pizza: Pizza, size: PizzaSize, toppings: Topping[], quantity: number = 1) => {
    const basePrice = pizza.basePrice * size.multiplier;
    const toppingsPrice = toppings.reduce((sum, topping) => sum + topping.price, 0);
    const totalPrice = (basePrice + toppingsPrice) * quantity;

    const newItem: CartItem = {
      id: `${pizza.id}-${size.size}-${Date.now()}`,
      pizza,
      size,
      toppings,
      quantity,
      totalPrice,
    };

    setCartItems(prev => [...prev, newItem]);
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const basePrice = item.pizza.basePrice * item.size.multiplier;
        const toppingsPrice = item.toppings.reduce((sum, topping) => sum + topping.price, 0);
        const totalPrice = (basePrice + toppingsPrice) * newQuantity;
        
        return { ...item, quantity: newQuantity, totalPrice };
      }
      return item;
    }));
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };
};