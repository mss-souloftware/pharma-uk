"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import CartProduct from "./cartProduct";
import { CartContext } from "./feature/contextProvider";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import WeeklyPlan from "./feature/weeklyPlan"; 
import StepNavigation from "../stepsNavigation/page";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [selectedWeeks, setSelectedWeeks] = useState({});

  const products = Array.isArray(cart.products) ? cart.products : [];

  // Handle week selection for each product
  const handleWeekSelection = (product, selectedWeek) => {
    setSelectedWeeks((prev) => ({
      ...prev,
      [product.id]: selectedWeek,
    }));
  };

  // Calculate total cart price including delivery charges
  const totalCartPrice = products.reduce((acc, product) => {
    const productTotalPrice = product.price * product.quantity;
    const productDeliveryCharge = product.deliveryCharge || 15.0;
    return acc + productTotalPrice + productDeliveryCharge;
  }, 0);

  // Calculate total delivery charges separately
  const totalDeliveryCharges = products.reduce((acc, product) => {
    return acc + (product.deliveryCharge || 15.0);
  }, 0);

  // Calculate total items
  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // Check if at least one product has a selected week OR if any product is in the cart
  const showContactButton =
    products.length > 0 &&
    (Object.values(selectedWeeks).some((week) => week) || products.some((product) => !product.weekPlan));

  return (
    <section className="py-8 md:py-16 relative">
      <StepNavigation />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="font-manrope text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 mb-8">
          Shopping <span className="text-hoverUnderlineColor">Cart</span>
        </h2>

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
                <WeeklyPlan
                  weekPlan={product.weekPlan} 
                  selectedWeek={selectedWeeks[product.id]}
                  onPlanClick={(selectedWeek) =>
                    handleWeekSelection(product, selectedWeek)
                  }
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
            <p className="font-manrope font-medium text-lg text-gray-900">
              Total Items
            </p>
            <h6 className="font-manrope font-medium text-lg text-gray-700">
              {totalItems}
            </h6>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="font-manrope font-medium text-lg text-gray-900">
              Delivery Charges
            </p>
            <h6 className="font-manrope font-medium text-lg text-gray-700">
              ${totalDeliveryCharges.toFixed(2)}
            </h6>
          </div>
          <div className="flex items-center justify-between py-6">
            <p className="font-manrope font-medium text-2xl text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-medium text-2xl text-hoverUnderlineColor">
              ${totalCartPrice.toFixed(2)}
            </h6>
          </div>
        </div>

        {/* Show Contact Information button */}
        {showContactButton && (
          <div className="justify-center flex my-7 transition-all duration-500 opacity-100">
            <Link href="/cartAddress">
            <button 
            className="py-4 xl:px-5 sm:py-4 xl:py-6 md:px-6 md:py-5 lg:py-5 sm:w-[20%] w-[30vw] sm:h-[4vh] h-[4vh] md:w-[20%] md:h-[3vh] lg:h-[4vh] lg:w-[12rem] sm:text-base text-xs bg-hoverUnderlineColor text-white font-normal rounded-lg shadow-lg transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300 flex items-center justify-center"
          >
            <span className="flex justify-center text-center text-sm ">
              Contact Information
            </span>
          </button>
            </Link>
          </div>
        )}

        <HowDoesItWorks />
      </div>
    </section>
  );
};

export default Cart;
