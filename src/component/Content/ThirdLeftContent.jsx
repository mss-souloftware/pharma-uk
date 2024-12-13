import React from "react";
import "./style/Content.css"; // Ensure this path is correct

const ThirdLeftContent = () => {
  return (
    <div className="row-span-1 border-transparent border-solid flex items-center text-left sm:text-center justify-between sm:justify-center">
      {/* Left */}
      <div className="mainContent  border-solid border-transparent inline-block sm:w-full sm:mb-4 sm:pr-4 sm:pl-4">
        <h1 className="text-3xl font-extrabold text-hoverUnderlineColor sm:text-lg tracking-widest">
          200+
        </h1>
        <p className="text-gray-600 sm:text-xs">
          Patient served every day
        </p>
      </div>

      {/* Right */}
      <div className="border-solid border-transparent inline-block sm:w-full sm:ml-0 sm:pl-4 sm:pr-4">
        <h1 className="text-3xl   font-extrabold text-hoverUnderlineColor sm:text-lg tracking-widest">
          1000+
        </h1>
        <p className="text-gray-600 sm:text-xs">
          Medical team around the world
        </p>
      </div>
    </div>
  );
};

export default ThirdLeftContent;
