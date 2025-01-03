"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContentSection from "./AboutContent";
import HowDoesItWorks from "./HowDoesItWorks";
import './ProductList.css'
import Image from "next/image";
import ContentSection2 from "./QualifiedTeams";

const Content = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch the JSON data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Content.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
        setCategories(data.categories);
        setSelectedCategory(data.categories[0]); // Set default category as 'All Treatment'
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCategoriesClick = (category) => {
    setSelectedCategory(category); // Set the selected category
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto h-auto mt-20 border-2 border-solid border-transparent pl-[1.7rem] pr-[1.7rem]">
      <div>
        <h1 className="block flex items-center justify-center text-xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-5xl font-extrabold text-hoverUnderlineColor">
          Find your treatment
        </h1>
        <p className="text-center w-full mx-auto text-xs lg:text-base md:text-base sm:text-base font-extrabold mt-7 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim earum
          quaerat dicta animi libero asperiores ut dolores, architecto numquam,
          culpa commodi excepturi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eveniet, dicta? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Error, deleniti.
        </p>
      </div>

      {/* Button to show all categories */}
      <div className="flex overflow-x-auto space-x-2 md:space-x-3 sm:space-x-2 py-4 sm:py-6 md:py-4 mt-8 justify-between w-full scrollbar-thin scrollbar-thumb-hoverUnderlineColor scrollbar-track-gray-200 scrollbar-rounded-lg">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoriesClick(category)}
            className={`flex justify-center items-center py-2 
                     w-full sm:w-28 md:w-32 lg:w-44 
                     sm:px-2 md:px-4 lg:px-6 
                     text-xs sm:text-sm md:text-base lg:text-lg 
                     h-8 sm:h-8 md:h-10 lg:h-12 
                     border-2 border-solid border-hoverUnderlineColor 
                     rounded-full transition-all duration-300 ${
                       activeCategory === category
                         ? "bg-hoverUnderlineColor text-white"
                         : "bg-transparent text-gray-800"
                     }`}
          >
            {/* Icon on the left */}
            <Image
              src={category.image}
              alt={category.name}
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 ml-2 sm:ml-0 sm:mr-2"
            />
            <span className="truncate w-24">
              {category.name || "Unnamed Category"}
            </span>
          </button>
        ))}
      </div>

      {/* Display selected category */}
      {selectedCategory && (
        <div className="mt-8">
          <h3 className=" text-xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-8 text-hoverUnderlineColor">
            Subcategories under {selectedCategory.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {selectedCategory.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative transform transition-all duration-300 hover:scale-95"
              >
                <div
                  style={{
                    backgroundImage: `url(${subcategory.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px", // Fixed height for the image
                  }}
                  className="w-full"
                ></div>
                <div className="p-4">
                  <h5 className="text-xl font-semibold text-gray-900">
                    {subcategory.name}
                  </h5>
                  <p className="text-sm text-gray-700 mt-2">
                    {subcategory.description}
                  </p>
                  <Link href={subcategory.link}>
                    <button className="mt-4 py-2 px-6 bg-hoverUnderlineColor text-white rounded-full transition-transform transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-28">
        <HowDoesItWorks />
      </div>

      <div className="mt-28">
        <ContentSection />
      </div>

      <div className="mt-28">
              <ContentSection2/>
      </div>
    </div>
  );
};

export default Content;
