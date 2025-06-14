import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem, Customer } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  cartTotal: number;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  cartTotal,
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    phone: '',
    address: '',
    room: '',
  });

  const deliveryFee = 3.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + deliveryFee + tax;

  const handleCheckout = () => {
    // Here you would typically send the order to your backend
    alert('Order placed successfully! You will receive a confirmation email shortly.');
    onClearCart();
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white h-full w-full max-w-md overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <ShoppingBag className="h-16 w-16 mb-4" />
            <p className="text-lg">Your cart is empty</p>
            <p className="text-sm">Add some delicious pizzas!</p>
          </div>
        ) : (
          <>
            {!showCheckout ? (
              <>
                {/* Cart Items */}
                <div className="p-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{item.pizza.name}</h3>
                          <p className="text-sm text-gray-600">{item.size.name}</p>
                          {item.toppings.length > 0 && (
                            <p className="text-sm text-gray-600">
                              + {item.toppings.map(t => t.name).join(', ')}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-semibold">${item.totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="border-t border-gray-200 p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="p-4">
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              /* Checkout Form */
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={customer.name}
                      onChange={(e) => setCustomer(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={customer.email}
                      onChange={(e) => setCustomer(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={customer.phone}
                      onChange={(e) => setCustomer(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hotel Address *
                    </label>
                    <textarea
                      value={customer.address}
                      onChange={(e) => setCustomer(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Room Number
                    </label>
                    <input
                      type="text"
                      value={customer.room}
                      onChange={(e) => setCustomer(prev => ({ ...prev, room: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleCheckout}
                    disabled={!customer.name || !customer.email || !customer.phone || !customer.address}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Place Order - ${total.toFixed(2)}
                  </button>
                  
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Back to Cart
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};