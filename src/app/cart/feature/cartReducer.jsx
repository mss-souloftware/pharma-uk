import { toast } from "react-toastify"; // Import notification library

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Load":
      return {
        ...state,
        products: action.products || [],
      };

    case "Add":
      const products = state.products || [];
      const existingProductIndex = products.findIndex(
        (item) => item.id === action.product.id
      );

      if (existingProductIndex >= 0) {
        // No need to notify for increase in quantity
        const updatedProducts = products.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });

        return { ...state, products: updatedProducts };
      }

      toast.success(
        <div>
          <span style={{ color: "red", fontWeight: "bold" }}>
            {action.product.title}
          </span>{" "}
          added to the cart!
        </div>,
        {
          position: "top-right",
          autoClose: 1000,
        }
      );

      return { 
        ...state,
        products: [...products, { ...action.product, quantity: 1 }],
      };

    case "Remove":
      toast.info(`${action.product.title} removed from the cart!`, {
        position: "top-right",
        autoClose: 1000,
      });

      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };

    case "Increase":
      // Don't show toast for quantity increase
      return {
        ...state,
        products: state.products.map((product) => 
          product.id === action.product.id 
            ? { ...product, quantity: product.quantity + 1 } 
            : product
        ),
      };

    case "Decrease":
      // Don't show toast for quantity decrease
      const decreasingProduct = state.products.find(
        (product) => product.id === action.product.id
      );

      if (decreasingProduct && decreasingProduct.quantity === 1) {
        toast.warning(`${action.product.title} is at minimum quantity.`, {
          position: "top-right",
          autoClose: 1000,
        });
      }

      return {
        ...state,
        products: state.products.map((product) => 
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
