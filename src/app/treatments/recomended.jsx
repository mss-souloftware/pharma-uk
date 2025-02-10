"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../cart/feature/contextProvider";
import WeeklyPlan from "../cart/feature/weeklyPlan";

const Recomended = ({
  headingName,
  title,
  description,
  image,
  price,
  weekPlan,
  onBuy,
}) => {
  const { state, dispatch } = useContext(CartContext);
  const cart = state?.cart || [];

  // Handle Add to Cart
  const handleAddToCart = () => {
    const product = {
      id: title, 
      name: title,
      description,
      imageUrl: image,
      price,
      weekPlan,
    };

    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      console.log("This product is already in the cart.");
      return;
    }

    dispatch({
      type: "Add",
      product: {
        ...product,
        price: price || 20,
        quantity: 1,
      },
    });
  };

  const validImage = image && image !== "" ? image : "/fallback-image.jpg";
  const isProductInCart = cart.some((item) => item.id === title);

  return (
    <div className="bg-gray-50 mx-auto container w-full p-10 rounded-lg flex flex-col items-center">
      <h1 className="text-center text-2xl md:text-4xl font-semibold mt-5 mb-8 capitalize">
        {headingName}
      </h1>

      <div className="w-full max-w-screen-lg bg-white border-2 border-hoverUnderlineColor shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-6">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={validImage}
            alt="Treatment image"
            height={350}
            width={350}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-hoverUnderlineColor mb-4">
            {title}
          </h3>
          <p className="text-gray-700 text-sm leading-7 mb-6">
            {description}
          </p>
          <button
            onClick={handleAddToCart}
            className="py-3 px-6 text-white text-base font-medium rounded-lg bg-hoverUnderlineColor shadow-md transition-transform transform hover:scale-105 hover:bg-[#96192e] duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {isProductInCart && weekPlan && weekPlan.length > 0 && (
        <div className="mt-10 w-full max-w-screen-lg">
          <h2 className="text-2xl font-bold text-center">Weekly Plan</h2>
          <WeeklyPlan weekPlan={weekPlan} />
        </div>
      )}
    </div>
  );
};

export default Recomended;
