"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HowDoesItWorks from "./HowDoesItWorks";
import "./ProductList.css";
import Image from "next/image"; 
import HowDoesItWorksMobile from "../HowDoesItWorksMobile"; 
import QualifiedTeams from "./QualifiedTeams";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Content = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/Content.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCategories(data.categories);
        if (data.categories.length > 0) {
          setSelectedCategory(data.categories[0]);
          setActiveCategory(data.categories[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoriesClick = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  const renderSkeleton = (count) => (
    Array(count).fill().map((_, index) => (
      <div key={index} className="flex justify-center items-center py-2 w-full sm:w-28 md:w-32 lg:w-44 sm:px-2 md:px-4 lg:px-6 h-8 sm:h-8 md:h-10 lg:h-12">
        <Skeleton width={20} height={20} />
      </div>
    ))
  );

  const renderCategories = () => (
    categories.map((category, index) => (
      <button
        key={index}
        onClick={() => handleCategoriesClick(category)}
        className={`flex justify-center items-center py-2
          w-full sm:w-28 md:w-32 lg:w-44 
          h-8 sm:h-8 md:h-10 lg:h-12 
          border-2 border-solid border-hoverUnderlineColor 
          rounded-full transition-all duration-300 ${
            activeCategory === category
              ? "bg-hoverUnderlineColor text-white"
              : "bg-transparent text-gray-800"
          }`}
      >
        <Image
          src={category.image}
          alt={category.name || "Unnamed Category"}
          width={20}
          height={20}
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 ml-2 sm:ml-0 sm:mr-2"
          priority
        />
        <span className="truncate w-24">{category.name || "Unnamed Category"}</span>
      </button>
    ))
  );

  const renderSubcategories = () => {
    return selectedCategory ? selectedCategory.subcategories.map((subcategory, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-95">
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
          <h5 className="text-lg md:text-xl font-normal text-gray-900">{subcategory.name}</h5>
          <p className="text-xs md:text-base text-gray-700 mt-2">
            {subcategory.description ? 
              (subcategory.description.length > 60 ? subcategory.description.substring(0, 60) + "..." : subcategory.description) 
              : "No description available."}
          </p>
          <Link href={subcategory.link}>
            <button className="w-full py-2 mt-4 bg-hoverUnderlineColor text-white font-normal rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-sm lg:text-base">Goto Consulting</span>
            </button>
          </Link>
        </div>
      </div>
    )) : null;
  };

  return (
    <div className="container mx-auto h-auto mt-20 border-2 border-solid border-transparent pl-[1.7rem] pr-[1.7rem]">
      <div>
        <h1 className="flex items-center justify-center text-xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-5xl font-semibold text-hoverUnderlineColor">
          Find your treatment
        </h1>
        <p className="text-center w-[80%] mx-auto text-xs lg:text-base md:text-base sm:text-base font-normal mt-7 text-gray-700">
          At Pharmica we offer a wide range of treatments through our free online prescription service...
        </p>
      </div>

      {/* Categories Button */}
      <div className="flex overflow-x-auto space-x-2 md:space-x-3 sm:space-x-2 py-4 sm:py-6 md:py-4 mt-8 justify-between w-full scrollbar-thin scrollbar-thumb-hoverUnderlineColor scrollbar-track-gray-200 scrollbar-rounded-lg">
        {isLoading ? renderSkeleton(5) : renderCategories()}
      </div>

      {/* Display selected category */}
      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-normal text-center mb-8 text-black">
            Subcategories under{" "}
            <span className="text-hoverUnderlineColor">{selectedCategory.name}</span>
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {isLoading ? renderSkeleton(5) : renderSubcategories()}
          </div>
        </div>
      )}

      <div className="block sm:hidden">
        <HowDoesItWorksMobile />
      </div>
      <div className="mt-28 hidden sm:block">
        <HowDoesItWorks />
      </div>
      <QualifiedTeams />
      {error && <div className="text-red-500 text-center">{error}</div>} {/* Error Message */}
    </div>
  );
};

export default Content;