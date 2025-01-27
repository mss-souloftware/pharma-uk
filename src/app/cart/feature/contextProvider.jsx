"use client";
import React, { useReducer, createContext } from "react";
import cartReducer from "./cartReducer";
 
// Initialize the context
export const CartContext = createContext();

// ContextProvider component
const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { products: [] });
 

   

  return (
    <CartContext.Provider value={{ cart, dispatch }}> 
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
