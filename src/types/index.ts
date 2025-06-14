export interface Pizza {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  category: 'classic' | 'premium' | 'specialty';
  sizes: PizzaSize[];
}

export interface PizzaSize {
  size: 'small' | 'medium' | 'large' | 'xlarge';
  name: string;
  multiplier: number;
}

export interface Topping {
  id: string;
  name: string;
  price: number;
  category: 'meat' | 'vegetable' | 'cheese' | 'sauce';
}

export interface CartItem {
  id: string;
  pizza: Pizza;
  size: PizzaSize;
  toppings: Topping[];
  quantity: number;
  totalPrice: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  room?: string;
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'baking' | 'ready' | 'delivered';
  estimatedTime: number;
  createdAt: Date;
}