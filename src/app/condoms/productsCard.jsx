"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { ToastContainer } from "react-toastify";  
import api from "@/config/axios"
const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products/categories/')
        console.log("Fetched Products:", response.data); 
        setProducts(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  

  // Navigate to SingleProduct page
  const handleProductClick = (product) => {
    router.push(`/singleProductPage?id=${product._id}`); // Assuming MongoDB ObjectId
  };

  return (
    <section className="antialiased dark:bg-gray-900 md:py-12 px-5 md:px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              className="relative border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col"
              key={index}
            >
              <Skeleton height={150} width="100%" className="rounded-lg" />
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
              className="relative border border-gray-300 rounded-lg shadow-sm hover:shadow-2xl hover:scale-[1.00] hover:-translate-y-1 transform transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 gap-x-4 mx-5 my-5 items-stretch h-[24rem] sm:h-[13rem] overflow-hidden bg-white hover:bg-gray-50"
              key={index}
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="flex justify-center items-center relative overflow-hidden">
                <Image
                  src={product.imageUrl || "/placeholder.png"}
                  alt={product.title}
                  height={100}
                  width={200}
                  className="object-cover h-auto sm:h-full w-full p-4 sm:p-6"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between px-4 py-6 sm:py-4">
                <h6 className="text-sm font-semibold">
                  {product.title?.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
                </h6>
                <p className="text-sm font-light">
                  {product.description?.length > 70 ? product.description.substring(0, 70) + "..." : product.description}
                </p>
                <div className="flex items-center">
                  <button
                    onClick={(e) => {
                      handleProductClick(product);
                      e.stopPropagation();
                    }}
                    className="py-2 md:my-3 px-7 xl:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all"
                  >
                    <p className="text-xs font-light">${product.price}</p>
                  </button>
                </div>
              </div>    
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-white">No products available.</p>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductsCard;
