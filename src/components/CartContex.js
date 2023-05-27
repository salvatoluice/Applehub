// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//     setSubtotal((prevSubtotal) => prevSubtotal + product.price);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, subtotal, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // Increase the quantity of the existing product
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add the product to the cart with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }

    setSubtotal((prevSubtotal) => prevSubtotal + product.price);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, subtotal, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
