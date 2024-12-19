"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContentSection from "./AboutContent";

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
        <h1 className="block flex items-center justify-center text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-hoverUnderlineColor">
          Find your treatment
        </h1>
        <p className="text-center w-full mx-auto text-xs lg:text-base md:text-base sm:text-base font-extrabold mt-7 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim earum quaerat dicta animi libero asperiores ut dolores, architecto numquam, culpa commodi excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deleniti.
        </p>
      </div>

      {/* Button to show all categories */}
      <div className="flex overflow-x-auto space-x-2 sm:space-x-1 py-4 sm:py-6 mt-8 justify-between w-full">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoriesClick(category)}
            className={`flex justify-center items-center py-2 px-2  sm:px-0 w-44  sm:w-28 md:w-28 lg:w-44 sm:text-xs md:text-xs text-xs lg:text-base h-8 xl:h-10 sm:h-8  border-2 border-solid border-hoverUnderlineColor rounded-full
              ${activeCategory === category ? 'bg-hoverUnderlineColor text-white' : 'bg-gray-100'}`}
          >
            {category.name || "Unnamed Category"} {/* Fallback text */}
          </button>
        ))}
      </div>

      {/* Display selected category */}
      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-hoverUnderlineColor">
            Subcategories under {selectedCategory.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {selectedCategory.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="bg-white rounded-xl  shadow-lg overflow-hidden relative group transform transition-all duration-300 hover:scale-95"
                style={{
                  backgroundImage: `url(${subcategory.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px", // Fixed height for the image
                }}
              >
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h5 className="text-2xl font-semibold text-white">{subcategory.name}</h5>
                    <p className="text-sm text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

      <div>
        <ContentSection />
      </div>
    </div>
  );
};

export default Content;
