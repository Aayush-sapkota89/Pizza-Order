import { Pizza, PizzaSize, Topping } from '../types';

export const pizzaSizes: PizzaSize[] = [
  { size: 'small', name: '10" Small', multiplier: 1 },
  { size: 'medium', name: '12" Medium', multiplier: 1.3 },
  { size: 'large', name: '14" Large', multiplier: 1.6 },
  { size: 'xlarge', name: '16" X-Large', multiplier: 2 },
];

export const toppings: Topping[] = [
  // Meat
  { id: 'pepperoni', name: 'Pepperoni', price: 2.50, category: 'meat' },
  { id: 'sausage', name: 'Italian Sausage', price: 2.50, category: 'meat' },
  { id: 'bacon', name: 'Crispy Bacon', price: 3.00, category: 'meat' },
  { id: 'ham', name: 'Ham', price: 2.50, category: 'meat' },
  { id: 'chicken', name: 'Grilled Chicken', price: 3.50, category: 'meat' },
  
  // Vegetables
  { id: 'mushrooms', name: 'Fresh Mushrooms', price: 1.50, category: 'vegetable' },
  { id: 'peppers', name: 'Bell Peppers', price: 1.50, category: 'vegetable' },
  { id: 'onions', name: 'Red Onions', price: 1.00, category: 'vegetable' },
  { id: 'olives', name: 'Black Olives', price: 1.50, category: 'vegetable' },
  { id: 'tomatoes', name: 'Fresh Tomatoes', price: 1.50, category: 'vegetable' },
  { id: 'spinach', name: 'Fresh Spinach', price: 2.00, category: 'vegetable' },
  { id: 'jalapenos', name: 'Jalapeños', price: 1.50, category: 'vegetable' },
  
  // Cheese
  { id: 'extra-cheese', name: 'Extra Mozzarella', price: 2.00, category: 'cheese' },
  { id: 'parmesan', name: 'Parmesan', price: 2.50, category: 'cheese' },
  { id: 'feta', name: 'Feta Cheese', price: 3.00, category: 'cheese' },
  { id: 'goat-cheese', name: 'Goat Cheese', price: 3.50, category: 'cheese' },
];

export const pizzas: Pizza[] = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Fresh mozzarella, tomato sauce, fresh basil, and olive oil',
    basePrice: 14.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    category: 'classic',
    sizes: pizzaSizes,
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni Classic',
    description: 'Traditional pepperoni with mozzarella cheese and tomato sauce',
    basePrice: 16.99,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
    category: 'classic',
    sizes: pizzaSizes,
  },
  {
    id: 'supreme',
    name: 'Supreme Deluxe',
    description: 'Pepperoni, sausage, mushrooms, bell peppers, onions, and olives',
    basePrice: 21.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    category: 'premium',
    sizes: pizzaSizes,
  },
  {
    id: 'hawaiian',
    name: 'Hawaiian Paradise',
    description: 'Ham, pineapple, and mozzarella cheese with tomato sauce',
    basePrice: 18.99,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    category: 'classic',
    sizes: pizzaSizes,
  },
  {
    id: 'meat-lovers',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, bacon, ham, and ground beef',
    basePrice: 24.99,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
    category: 'premium',
    sizes: pizzaSizes,
  },
  {
    id: 'veggie-garden',
    name: 'Veggie Garden',
    description: 'Mushrooms, bell peppers, onions, tomatoes, olives, and spinach',
    basePrice: 19.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'specialty',
    sizes: pizzaSizes,
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken Ranch',
    description: 'Grilled chicken, BBQ sauce, red onions, and cilantro',
    basePrice: 22.99,
    image: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg',
    category: 'specialty',
    sizes: pizzaSizes,
  },
  {
    id: 'white-pizza',
    name: 'White Pizza Special',
    description: 'Ricotta, mozzarella, parmesan, garlic, and fresh herbs',
    basePrice: 20.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    category: 'specialty',
    sizes: pizzaSizes,
  },
];