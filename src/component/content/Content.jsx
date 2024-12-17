"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContentSection from "./ContentSection1";

const Content = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the JSON data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Content.json")

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
  };

  return (
    <div className="container mx-auto h-auto mt-20 border-2 border-solid border-transparent pl-[1.7rem] pr-[1.7rem]">
      <div>
        <h1 className="block flex items-center justify-center text-xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-hoverUnderlineColor">
          Find your treatment
        </h1>
        <p className="text-center w-full mx-auto text-xs lg:text-base md:text-base sm:text-base font-extrabold mt-7 text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim earum
          quaerat dicta animi libero asperiores ut dolores, architecto numquam,
          culpa commodi excepturi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eveniet, dicta? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Error, deleniti.
        </p>
      </div>

      {/* Button to show all categories */}
      <div className="flex justify-between">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoriesClick(category)}
            className="flex justify-center items-center rounded-full py-2 px-4 w-20 sm:w-24 md:w-32 lg:w-40 sm:text-xs md:text-xs text-xs lg:text:base h-10 mt-8 border-2 border-solid border-hoverUnderlineColor rounded-md bg-gray-100"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {selectedCategory.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative"
                style={{
                  backgroundImage: `url(${subcategory.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px", // Fixed height for the image
                }}
              >
                <Link href={subcategory.link}>
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-7">
                    <div className="absolute top-0 left-0 w-full bg-gray-600 bg-opacity-60 text-white text-center py-4">
                      <h5 className="text-xl font-medium ">{subcategory.name}</h5>
                    </div> 
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
      <ContentSection/> 
      </div>
    </div> 
  );
};

export default Content;
