"use client";
import React, { useReducer, createContext, useEffect } from "react";
import cartReducer from "./cartReducer";

// Initialize the context
export const CartContext = createContext();

// ContextProvider component
const ContextProvider = ({ children }) => {
  const initialState = { 
    products: JSON.parse(localStorage.getItem("cart")) || [] // Load cart from local storage
  };

  const [cart, dispatch] = useReducer((state, action) => {
    const updatedState = cartReducer(state, action);

    // Sync state with local storage after every dispatch
    localStorage.setItem("cart", JSON.stringify(updatedState.products));
    return updatedState;
  }, initialState);

  // Sync state with local storage on initial load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "Load", products: storedCart });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
