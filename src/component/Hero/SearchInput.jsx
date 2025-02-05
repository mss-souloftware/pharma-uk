import React from "react";
import { useState } from "react";

const SearchInput = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <div className="relative">
    <input
      className="rounded-lg p-2 w-full max-w-[20rem] border-2 border-gray-300 focus:border-red-500 pl-10 pr-4 transition-all duration-300"
      type="text"
      value={searchItem}
      onChange={handleInputChange}
      placeholder="Type to search"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 18l6-6m0 0a8 8 0 10-7 7 8 8 0 006-6z"
        />
      </svg>
    </span>
  </div>
  
  );
};

export default SearchInput;
