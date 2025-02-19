import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const CategoryList = ({ categories, selectedCategory, onSelectCategory, isLoading }) => {
  return (
    <div className="flex overflow-x-auto border-2 w-full max-w-4xl rounded-3xl space-x-2 mt-4 px-4 py-2 justify-start mx-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 md:justify-center md:overflow-visible">
      {isLoading
        ? [...Array(4)].map((_, index) => (
            <div key={index} className="py-2 w-24 md:w-28">
              <Skeleton width={100} height={40} />
            </div>
          ))
        : categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onSelectCategory(category)}
              className={`flex items-center justify-center text-sm w-28 md:w-36  h-12 rounded-full transition-all duration-300 whitespace-nowrap px-3 
                ${
                  selectedCategory?.name === category.name 
                    ? "bg-hoverUnderlineColor text-white" 
                    : "bg-transparent text-gray-800"
                }`}
            >
              <Image src={category.image} alt={category.name} width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 hidden sm:block " priority />
              <span className="ml-3 inline-block">{category.name}</span>
            </button>
          ))}
    </div>
  );
};

export default React.memo(CategoryList);