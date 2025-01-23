"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../cart/feature/contextProvider";
import Skeleton from "react-loading-skeleton"; // Import Skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const { cart, dispatch } = useContext(CartContext);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/ProductContent.json");
        const data = await res.json();
        setProducts(data.Condoms || []);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even on error
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "Add", product: product });
  };

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 md:px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          // Show Skeleton loader while loading
          Array(10)
            .fill()
            .map((_, index) => (
              <div key={index} className="relative rounded-t-full rounded-b-lg border border-gray-200 bg-white p-6 shadow-xl">
                {/* Skeleton for Image */}
                <Skeleton height={250} width="100%" className="mb-6 rounded-t-full" />
                {/* Skeleton for Title */}
                <Skeleton height={30} width="80%" className="mb-4" />
                {/* Skeleton for Description */}
                <Skeleton height={20} width="100%" className="mb-4" />
                {/* Skeleton for Button and Price */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Skeleton height={40} width="30%" />
                  <Skeleton height={25} width="40%" />
                </div>
              </div>
            ))
        ) : (
          // Once data is loaded, show actual product cards
          products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={product.id || index}
                className="relative rounded-t-full rounded-b-lg border border-gray-200 bg-white p-6 shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 dark:border-gray-500 dark:bg-gray-800 cursor-pointer"
                onClick={() => handleAddToCart(product)} // Add to cart when clicked anywhere on the card
              >
                {/* Image Section */}
                <div className="w-full h-56 mb-6 overflow-hidden rounded-t-full relative">
                  <a href="#">
                    <Image
                      height={250}
                      width={400}
                      className="w-full h-full object-cover rounded-t-full group-hover:scale-110 transition-transform duration-300"
                      src={product.imageUrl}
                      alt={product.title}
                    />
                  </a>
                  {/* Image Overlay for Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                </div>

                {/* Content Section */}
                <div className="pt-4 text-center sm:text-left">
                  <a
                    className="text-2xl font-extrabold text-hoverUnderlineColor hover:underline dark:text-white tracking-tight leading-tight"
                  >
                    {product.title}
                  </a>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 sm:mt-4">
                    {product.description.length > 20
                      ? product.description.substring(0, 70) + "..."
                      : product.description}
                  </p>
                </div>

                {/* Price and Button Section */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={(e) => {
                      handleAddToCart(product);
                      e.stopPropagation(); // Prevent click event on card
                    }}
                    className="w-full sm:w-auto py-3 px-8 bg-hoverUnderlineColor text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  >
                    <p className="text-lg font-normal">Add to Cart</p>
                  </button>
                  <div className="mt-2 sm:mt-0 flex justify-center items-center text-lg font-normal text-gray-800 dark:text-white">
                    <span className="text-sm">from</span>
                    <p className="ml-2 text-xl">${product.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-white">No products available.</p>
          )
        )}
      </div>
    </section>
  );
};

export default ProductsCard;
