import { toast } from "react-toastify"; // Import notification library

const updateLocalStorage = (products) => {
  localStorage.setItem("cart", JSON.stringify(products));
};

const cartReducer = (state, action) => {
  let updatedProducts;

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
        updatedProducts = products.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
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
        updatedProducts = [...products, { ...action.product, quantity: 1 }];
      }

      updateLocalStorage(updatedProducts);
      return { ...state, products: updatedProducts };

    case "Remove":
      updatedProducts = state.products.filter(
        (product) => product.id !== action.product.id
      );

      toast.info(`${action.product.title} removed from the cart!`, {
        position: "top-right",
        autoClose: 1000,
      });

      updateLocalStorage(updatedProducts);
      return { ...state, products: updatedProducts };

    case "Increase":
      updatedProducts = state.products.map((product) =>
        product.id === action.product.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      updateLocalStorage(updatedProducts);
      return { ...state, products: updatedProducts };

    case "Decrease":
      updatedProducts = state.products.map((product) =>
        product.id === action.product.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      const decreasingProduct = state.products.find(
        (product) => product.id === action.product.id
      );

      if (decreasingProduct && decreasingProduct.quantity === 1) {
        toast.warning(`${action.product.title} is at minimum quantity.`, {
          position: "top-right",
          autoClose: 1000,
        });
      }

      updateLocalStorage(updatedProducts);
      return { ...state, products: updatedProducts };

    default:
      return state;
  }
};

export default cartReducer;
