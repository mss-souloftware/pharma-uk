// Hair Loss
"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react"; 
import { CartContext } from "../cart/feature/contextProvider";

const ProductsCard = () => {
  const [products, setProducts] = useState([]); // Ensure it's an empty array
  const { cart, dispatch } = useContext(CartContext); // Destructure as an object
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/ProductContent.json");
        const data = await res.json();
        setProducts(data.HairLoss || []); // Ensure data.products is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "Add", product: product });
  };

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 md:px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product.id || index}
              className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:shadow-gray-500 dark:border-gray-500 dark:bg-gray-800 cursor-pointer"
              onClick={() => handleAddToCart(product)} // Add to cart when clicked anywhere on the card
            >
              <div className="h-56 w-full mb-4">
                <a href="#">
                  <Image
                    height={100}
                    width={400}
                    className="mx-auto h-full object-cover dark:hidden"
                    src={product.imageUrl}
                    alt={product.title}
                  />
                </a> 
              </div>

              <div className="pt-6 text-center sm:text-left">
                <a
                  
                  className="text-lg font-semibold text-hoverUnderlineColor hover:underline dark:text-white"
                >
                  {product.title}
                </a>
                <p className="text-gray-600 mt-5 text-center sm:text-left">
                {product.description.length > 20 ? product.description.substring(0, 70) + "..." : product.description}
                </p>
              </div>
              
              <button
                onClick={(e) => {  
                  handleAddToCart(product);
                }}
                className="w-full mt-4 flex flex-col sm:flex-row items-center gap-4 bg-hoverUnderlineColor justify-evenly py-2"
              >
                <p className="text-2xl font-normal text-white dark:text-white text-center sm:text-center">
                  <span className="text-sm pr-2">from</span> ${product.price}
                </p>
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
};

export default ProductsCard;
