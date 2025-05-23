"use client";
import React, { useContext, useState } from "react";
import CartProduct from "./cartProduct";  // aapka cart product component
import { CartContext } from "./feature/contextProvider"; // cart context
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import StepNavigation from "../stepsNavigation/page";
import WeeklyPlan from "./feature/weeklyPlan";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const products = Array.isArray(cart.products) ? cart.products : [];

  const [loading, setLoading] = useState(false);

  // Calculate totals
  const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalProductPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const totalDeliveryCharge = products.reduce((sum, product) => sum + (product.deliveryCharge || 15.0), 0);
  const grandTotal = totalProductPrice + totalDeliveryCharge;

  // Order submit handler
  const handleOrderSubmit = async () => {
    if (products.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    const orderPayload = {
      products: products.map(product => ({
        productId: product.id,
        quantity: product.quantity,
        size: product.packet ? product.selectedSize : null,
        weeklyPlan: product.weeklyPlan ? product.selectedPlan : null,
        price: product.price,
        deliveryCharge: product.deliveryCharge || 15.0,
      })),
      totalProducts,
      totalProductPrice,
      totalDeliveryCharge,
      grandTotal,
    };

    try {
      const response = await fetch("http://localhost:1545/api/v1/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
              console.error("API error response:", errorData); // <== This will show the server error details

      }

      const data = await response.json();
      console.log("Order Placed Successfully:", data);

      // Redirect to payment page
      window.location.href = "/paymentForm";
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong while placing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 md:py-16 relative">
      <StepNavigation />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="font-manrope text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 mb-8">
          Shopping <span className="text-[#1AB8A3]">Cart</span>
        </h2>

        {products.length > 0 ? (
          <div className="container mx-auto px-4 py-8">
            <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left">Product</th>
                  <th className="border border-gray-300 p-4 text-left">Title</th>
                  <th className="border border-gray-300 p-4 text-left">Size</th>
                  <th className="border border-gray-300 p-4 text-center">Quantity</th>
                  <th className="border border-gray-300 p-4 text-center">Total Price</th>
                  <th className="border border-gray-300 p-4 text-center">Clear</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    weeklyPlan={WeeklyPlan}
                    onIncrease={() => dispatch({ type: "Increase", product })}
                    onDecrease={() => dispatch({ type: "Decrease", product })}
                    onRemove={() => dispatch({ type: "Remove", product })}
                  />
                ))}
              </tbody>
            </table>

            {/* Order Summary */}
            <div className="flex justify-end mt-6">
              <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-base font-semibold text-gray-700 mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total Products:</span>
                  <span className="font-semibold text-sm">{totalProducts}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total Price:</span>
                  <span className="font-semibold text-sm">${totalProductPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Delivery Charges:</span>
                  <span className="font-semibold text-sm">${totalDeliveryCharge.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-base">
                  <span>Grand Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>

                {/* Payment Button */}
                <button
                  className={`w-full mt-4 bg-[#1AB8A3] text-white font-semibold py-2 rounded-lg hover:bg-[#15907F] transition duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleOrderSubmit}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Proceed to Payment"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No items in the cart.</p>
        )}

        <HowDoesItWorks />
      </div>
    </section>
  );
};

export default Cart;
