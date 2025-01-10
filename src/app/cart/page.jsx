"use client";
import { useContext } from "react";
import CartProduct from "./cartProduct";
import { CartContext } from "./feature/contextProvider";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";

const Page = () => {
  // Correctly destructure the context object to get cart and dispatch
  const { cart, dispatch } = useContext(CartContext);

  // Ensure cart.products is an array and initialized
  const products = Array.isArray(cart.products) ? cart.products : []; // Use a default empty array if cart.products is undefined or not an array

  // Calculate total cart price including delivery charges
  const totalCartPrice = products.reduce((acc, product) => {
    const productTotalPrice = product.price * product.quantity;
    const productDeliveryCharge = product.deliveryCharge || 15.0; // Default delivery charge
    return acc + productTotalPrice + productDeliveryCharge;
  }, 0);

  // Calculate total delivery charges separately
  const totalDeliveryCharges = products.reduce((acc, product) => {
    return acc + (product.deliveryCharge || 15.0);
  }, 0);

  // Calculate total items
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <section className="py-8 md:py-16 relative">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="font-manrope text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight font-extrabold text-center text-gray-900 mb-8">
          Shopping <span className="text-hoverUnderlineColor">Cart</span>
        </h2>

        {/* Product list header */}
        <div className="hidden lg:grid grid-cols-2 py-6 text-gray-600">
          <div className="font-normal text-xl">Product</div>
        </div>

        {/* Render Cart Products */}
        {products.length > 0 ? (
          products.map((product, index) => {
            const productDeliveryCharge = product.deliveryCharge || 15.0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 gap-6 py-6 border-t border-gray-200"
              >
                <CartProduct
                  product={product}
                  deliveryCharge={productDeliveryCharge}
                  onIncrease={() => dispatch({ type: "Increase", product })}
                  onDecrease={() => dispatch({ type: "Decrease", product })}
                  onRemove={() => dispatch({ type: "Remove", product })}
                />
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No items in the cart.</p>
        )}

        {/* Cart Totals */}
        <div className="bg-gray-50 rounded-xl p-6 max-w-xl mx-auto mt-8">
          <div className="flex items-center justify-between py-4">
            <p className="font-manrope font-medium text-lg text-gray-900">Total Items</p>
            <h6 className="font-manrope font-medium text-lg text-gray-700">{totalItems}</h6>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="font-manrope font-medium text-lg text-gray-900">Delivery Charges</p>
            <h6 className="font-manrope font-medium text-lg text-gray-700">${totalDeliveryCharges.toFixed(2)}</h6>
          </div>
          <div className="flex items-center justify-between py-6">
            <p className="font-manrope font-medium text-2xl text-gray-900">Total</p>
            <h6 className="font-manrope font-medium text-2xl text-hoverUnderlineColor">
              ${totalCartPrice.toFixed(2)}
            </h6>
          </div>
        </div>
        <HowDoesItWorks />
      </div>
    </section>
  );
};

export default Page;
