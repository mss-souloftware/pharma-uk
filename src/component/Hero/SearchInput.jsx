import React, { useState } from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion
import Image from "next/image";

const SearchInput = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Start from below the screen (y: 50)
      animate={{ opacity: 1, y: 0 }}   // End at the original position (y: 0)
      transition={{ duration: 0.5 }}    // Animation duration of 0.5s
      className="relative"
    >
     <input
  className="rounded-lg p-2 w-full max-w-[20rem] bg-transparent border-2 border-hoverUnderlineColor focus:border-hoverUnderlineColor pl-10 pr-4 transition-all duration-300"
  type="text"
  value={searchItem}
  onChange={handleInputChange} 
  placeholder="Type to search"
/>

      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <Image src="/icons/searchIcon.svg" className="w-5 h-5 " alt="icon" height={29} width={29} />
      </span>
    </motion.div>
  );
};

export default SearchInput;
