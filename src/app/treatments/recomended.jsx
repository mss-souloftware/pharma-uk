"use client";
import Image from "next/image";
import React, { useContext } from "react"; 
import { CartContext } from "../cart/feature/contextProvider";
import WeeklyPlan from "../cart/feature/weeklyPlan";

const Recomended = ({ headingName, title, description, image, price, weekPlan, onBuy }) => {
  const { state, dispatch } = useContext(CartContext);
  const cart = state?.cart || [];

  // Handle Add to Cart 
  const handleAddToCart = () => {
    const product = {
      id: title, // You can use a unique id or title as the identifier
      name: title,
      description,
      imageUrl:image,
      price,
      weekPlan: weekPlan,  // Pass the weekly plan with the product
    };

    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      console.log("This product is already in the cart.");
      return;
    }

    // Dispatch action to add the product with weeklyPlan to the cart
    dispatch({
      type: "Add",
      product: { 
        ...product, 
        price: price || 20, // Default price if not provided
        quantity: 1,
      },
    });
  };

  // Fallback image
  const validImage = image && image !== "" ? image : "/fallback-image.jpg";

  // Check if the product is in the cart
  const isProductInCart = cart.some((item) => item.id === title);

  return (
    <div className="bg-gray-50 mx-auto container w-full p-10 rounded-lg justify-center flex flex-col items-center px-4 sm:px-8 md:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-10 text-center mb-5 font-extrabold capitalize text-hoverUnderlineColor">
        {headingName}
      </h1>

      <div className="w-full max-w-screen-xl py-8 sm:py-4 lg:px-7 px-10 border-2 shadow-xl border-hoverUnderlineColor rounded-lg bg-white flex flex-col items-center">
        <div className="sm:flex sm:flex-col sm:justify-center items-center xl:grid lg:grid-cols-2 gap-8 mb-14">
          <div>
            <h3 className="xl:text-2xl text-lg my-3 font-bold text-hoverUnderlineColor">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="w-full xl:ml-40 sm:w-[300px] h-auto">
            <Image
              src={validImage}
              alt="Treatment image"
              height={300}
              width={300}
              className="w-full h-auto object-cover rounded-lg flex"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={handleAddToCart} // Pass the product object with weeklyPlan and price
            className="px-4 py-2 text-white rounded-lg bg-hoverUnderlineColor"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Only show WeeklyPlan if the product is added to the cart */}
      {isProductInCart && weekPlan && weekPlan.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center">Weekly Plan</h2>
          <WeeklyPlan weekPlan={weekPlan} />
        </div>
      )}
    </div>
  );
};

export default Recomended;
