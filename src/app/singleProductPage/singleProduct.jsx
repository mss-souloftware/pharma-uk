"use client";

import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { CartContext } from "../cart/feature/contextProvider";
import Image from "next/image";
import SingleProductDetail from "./SingleProductDetail";
import PharmaRegulation from "../about/PharmaRegulation";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";

const SingleProduct = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch("/ProductContent.json");
        const data = await res.json();
        
        let foundProduct = null;
        Object.values(data).some((category) => {
          foundProduct = category.find((p) => String(p.id) === String(id));
          return foundProduct;
        });
        
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: "Add", product: { ...product, quantity } });
    }
  };

  if (!product) {
    return <p className="text-center text-gray-600 dark:text-white">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 mt-20 px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-10">
            {product.title}
          </h1>
          <div className="flex justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src="/rankStarIcon.png" height={29} width={29} alt="starIcon" />
            ))}
          </div>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
            {product.description}
          </p>

          {/* Price Checker */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="font-bold mb-4">Price Checker</h2>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <span className="text-gray-600">Quantity</span>
              <div className="flex items-center gap-2 border p-2 rounded-md">
                <button
                  className="px-3 py-1 bg-hoverUnderlineColor text-white rounded"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  className="px-3 py-1 bg-hoverUnderlineColor text-white rounded"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-2xl text-hoverUnderlineColor font-semibold mb-4">
              £{(product.price * quantity).toFixed(2)}
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto px-6 py-3 bg-hoverUnderlineColor text-white rounded-md transition-all hover:bg-hoverUnderlineColor focus:ring-4 focus:ring-hoverUnderlineColor"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="bg-white p-6 rounded-2xl shadow-xl ">
         
        <SingleProductDetail product={product} />
      </div>

      {/* Additional Sections */}
      <PharmaRegulation />
      <HowDoesItWorks />
    </div>
  );
};

export default SingleProduct;