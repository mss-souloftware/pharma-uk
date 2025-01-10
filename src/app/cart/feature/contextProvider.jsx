import React, { useReducer, createContext } from 'react';
import cartReducer from './cartReducer';

// 2. Initialize the context
export const CartContext = createContext();

// 3. Set up the ContextProvider component
const ContextProvider = ({ children }) => {
  const initialState = { products: [] };
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
