"use client";
import React, { useState, useEffect } from "react";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching dynamic product data
    const fetchData = async () => {
      try {
        const res = await fetch("/CondomsProductContent.json"); // Assuming JSON data in the public directory
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 md:px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id || index}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:shadow-gray-500 dark:border-gray-500 dark:bg-gray-800"
          >
            <div className="h-56 w-full mb-4">
              <a href="#">
                <img
                  className="mx-auto h-full object-cover dark:hidden"
                  src={product.imageUrl}
                  alt={product.title}
                />
                <img
                  className="mx-auto hidden h-full object-cover dark:block"
                  src={product.imageUrlDark}
                  alt={product.title}
                />
              </a>
            </div>

            <div className="pt-6 text-center sm:text-left">
              <a
                href="#"
                className="text-lg font-semibold text-hoverUnderlineColor hover:underline dark:text-white"
              >
                {product.title}
              </a>

              <div className="mt-2 flex justify-center sm:justify-start items-center gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`h-4 w-4 ${
                      index < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                  </svg>
                ))}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviews} reviews)
                </p>
              </div>

              <p className="text-gray-600 mt-5 text-center sm:text-left">
                {product.description}
              </p>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-2xl font-extrabold text-hoverUnderlineColor dark:text-white text-center sm:text-left">
                  ${product.price}
                </p>

                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCard;
