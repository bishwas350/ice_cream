import { createContext, useContext, useState, useEffect } from 'react';

// Create a new context for cart management
const CartContext = createContext();

// CartProvider wraps the app and provides cart functionality
export const CartProvider = ({ children }) => {
  // Initialize cart state (empty array by default)
  const [cart, setCart] = useState([]);

  // 🚀 Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 💾 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ➕ Add item to cart (or update quantity if already exists)
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If new item, add to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // ❌ Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // 🔢 Update item quantity (prevent <1)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // 🗑️ Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // 💰 Calculate total cart value
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 🔢 Calculate total number of items in cart
  const cartCount = cart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
export const useCart = () => {
  return useContext(CartContext);
};