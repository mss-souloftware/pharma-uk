"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import CartProduct from "./cartProduct";
import { CartContext } from "./feature/contextProvider";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import StepNavigation from "../stepsNavigation/page";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [selectedWeeks, setSelectedWeeks] = useState({});

  const products = Array.isArray(cart.products) ? cart.products : [];

  return (
    <section className="py-8 md:py-16 relative">
      <StepNavigation />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="font-manrope text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 mb-8">
          Shopping <span className="text-hoverUnderlineColor">Cart</span>
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
                    onIncrease={() => dispatch({ type: "Increase", product })}
                    onDecrease={() => dispatch({ type: "Decrease", product })}
                    onRemove={() => dispatch({ type: "Remove", product })}
                  />
                ))}
              </tbody>
            </table>
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