const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      const products = state.products || [];
      const existingProductIndex = products.findIndex(
        (item) => item.id === action.product.id
      );

      if (existingProductIndex >= 0) {
        const updatedProducts = products.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });

        return { ...state, products: updatedProducts };
      }

      return { 
        ...state,
        products: [...products, { ...action.product, quantity: 1 }],
      };

    case "Remove":
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.product.id),
      };

    case "Increase":
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.product.id 
            ? { ...product, quantity: product.quantity + 1 } 
            : product
        ),
      };

    case "Decrease":
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.product.id && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
