"use client";
import React, { useReducer, createContext, useEffect } from "react";
import cartReducer from "./cartReducer";
 
// Initialize the context
export const CartContext = createContext();

// ContextProvider component
const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { products: [] });

  // Load cart from local storage in the browser environment
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      dispatch({ type: "Load", products: storedCart });
    }
  }, []);

  // Sync cart state with local storage on updates
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart.products));
    }
  }, [cart.products]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
