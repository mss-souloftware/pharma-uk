import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const CategoryList = ({ categories, selectedCategory, onSelectCategory, isLoading }) => {
  return (
    <div className="flex overflow-x-auto border-2 w-[60rem] rounded-3xl space-x-2 mt-8 justify-evenly mx-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200">
      {isLoading
        ? [...Array(4)].map((_, index) => (
            <div key={index} className="py-2 w-28">
              <Skeleton width={120} height={40} />
            </div>
          ))
        : categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onSelectCategory(category)}
              className={`flex justify-center items-center m-1 text-sm w-36 h-10 rounded-full transition-all duration-300 ${
                selectedCategory?.name === category.name ? "bg-hoverUnderlineColor text-white" : "bg-transparent text-gray-800"
              }`}
            >
              <Image src={category.image} alt={category.name} width={32} height={32} className="w-6 h-6" priority />
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
    </div>
  );
};

export default React.memo(CategoryList);
