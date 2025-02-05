"use client"
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../cart/feature/contextProvider";
import Skeleton from "react-loading-skeleton"; 
import "react-loading-skeleton/dist/skeleton.css"; 
import Image from "next/image";
import { ToastContainer } from "react-toastify";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const { cart, dispatch } = useContext(CartContext);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/ProductContent.json");
        const data = await res.json();
        setProducts(data.Condoms || []);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "Add", product: product }); 
  };
  
  return (
    <section className="antialiased dark:bg-gray-900 md:py-12 px-5 md:px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading ? (
          // Render skeleton loaders while loading
          Array.from({ length: 6 }).map((_, index) => (
            <div
              className="relative border border-solid border-gray-300 rounded-lg shadow-sm p-4 flex flex-col"
              key={index}
            >
              <Skeleton
                height={150} // Adjust height as needed
                width="100%" // Full width for the skeleton
                className="rounded-lg"
                baseColor="#e0e0e0" // Base color for skeleton
                highlightColor="#f5f5f5" // Highlight color for skeleton
              />
              <div className="flex flex-col flex-grow justify-between mt-2">
                <Skeleton height={20} />
                <Skeleton height={15} />
                <Skeleton height={20} width={`50%`} />
              </div>
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <div
              className="relative border border-solid border-gray-300 rounded-lg shadow-sm hover:shadow-2xl hover:scale-[1.00] hover:-translate-y-1 transform transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 gap-x-4 mx-5 my-5 items-stretch h-[24rem] sm:h-[12rem] overflow-hidden bg-white hover:bg-gray-50"
              key={index}
            >
              {/* Image Section */}
              <div className="flex justify-center items-center relative overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt="productImg"
                  height={100}
                  width={200}
                  className="object-cover h-auto sm:h-full w-full p-4 sm:p-6" // Ensures the image fully fits and stays inside the box
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between px-4  py-6 sm:py-2 relative">
                <h1 className="text-sm font-semibold">
                  {product.title.length > 20
                    ? product.title.substring(0, 20) + "..."
                    : product.title}
                </h1>
                <p className="text-xs font-light ">
                  {product.description.length > 70
                    ? product.description.substring(0, 70) + "..."
                    : product.description}
                </p>
                <p className="text-sm font-semibold">${product.price}</p>

                <div className="flex  items-center ">
                  <button
                    onClick={(e) => {
                      handleAddToCart(product);
                      e.stopPropagation(); // Prevent click event on the card
                    }}
                    className="py-2 md:my-3 px-4 xl:px-8 bg-hoverUnderlineColor text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  >
                    <p className="text-base font-light">Add to Cart</p>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-white">No products available.</p>
        )}
      </div>
      <ToastContainer/>
    </section>
  );
};

export default ProductsCard;
