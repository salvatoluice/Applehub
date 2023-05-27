import React, { createContext, useContext } from 'react';
import { CartContext } from './CartContex';
// import { CartContext } from './CartContext';

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const { cartItems } = useContext(CartContext);

  const calculateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <TotalContext.Provider value={calculateCartTotal()}>
      {children}
    </TotalContext.Provider>
  );
};
