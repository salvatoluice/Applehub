import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setSubtotal((prevSubtotal) => prevSubtotal + product.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, subtotal, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
