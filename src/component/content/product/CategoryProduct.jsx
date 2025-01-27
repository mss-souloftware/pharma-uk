"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const CategoryProduct = () => {
  // Local state for categories, selectedCategory, and loading state
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Content.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        // Set categories only if they have changed
        if (data.categories.length > 0) {
          setCategories(data.categories);
          setSelectedCategory(data.categories[0]); // Default to the first category
        }

        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setIsLoading(false); // Stop loading even on error
      }
    };

    fetchData();
  }, []);

  // Memoizing category click handler
  const handleCategoriesClick = useCallback((category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    }
  }, [selectedCategory]);

  const renderSkeleton = (count) =>
    Array(count)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex justify-center items-center py-2 w-full sm:w-28 md:w-32 lg:w-44 sm:px-2 md:px-4 lg:px-6 h-8 sm:h-8 md:h-10 lg:h-12"
        >
          <Skeleton width={20} height={20} />
        </div>
      ));

  const renderCategories = () =>
    categories.map((category, index) => (
      <button
        key={index}
        onClick={() => handleCategoriesClick(category)}
        className={`flex justify-start items-center text-sm w-full sm:w-28 md:w-32 lg:w-44 h-8 sm:h-8 md:h-10 lg:h-12 border-2 border-solid border-hoverUnderlineColor rounded-full transition-all duration-300 ${
          selectedCategory === category
            ? "bg-hoverUnderlineColor text-white"
            : "bg-black text-white"
        }`}
      >
        <Image
          src={category.image}
          alt={category.name || "Unnamed Category"}
          width={10}
          height={10}
          className="w-4 h-4 sm:w-4 ml-2 sm:mx-3"
          priority
        />
        <span className="truncate w-24">{category.name || "Unnamed Category"}</span>
      </button>
    ));

  const renderSubcategories = () => {
    return selectedCategory
      ? selectedCategory.subcategories.map((subcategory, index) => (
          <div
            key={index}
            className="bg-black rounded-xl shadow-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-95"
          >
            <div
              style={{
                backgroundImage: `url(${subcategory.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
              }}
              className="w-full"
            />
            <div className="p-4">
              <h5 className="text-lg md:text-xl font-semibold text-white">
                {subcategory.name}
              </h5>
              <p className="text-xs md:text-base text-gray-300 mt-2">
                {subcategory.description
                  ? subcategory.description.length > 60
                    ? subcategory.description.substring(0, 70) + "..."
                    : subcategory.description
                  : "No description available."}
              </p>
              <Link href={subcategory.link}>
                <button className="w-full py-2 mt-4 bg-hoverUnderlineColor text-white font-normal rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-hoverUnderlineColor">
                  <span className="text-sm lg:text-base">Get to Consulting</span>
                </button>
              </Link>
            </div>
          </div>
        ))
      : null;
  };

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Categories Button Section */}
      <div className="flex overflow-x-auto space-x-2 md:space-x-3 sm:space-x-2 py-4 sm:py-6 md:py-4 mt-8 justify-between w-full scrollbar-thin scrollbar-thumb-hoverUnderlineColor scrollbar-track-gray-200 scrollbar-rounded-lg">
        {isLoading ? renderSkeleton(5) : renderCategories()}
      </div>

      {/* Display selected category */}
      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-normal text-center mb-8 text-hoverUnderlineColor">
            Subcategories Under{" "}
            <span className="text-hoverUnderlineColor">{selectedCategory.name}</span>
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {isLoading ? renderSkeleton(5) : renderSubcategories()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
