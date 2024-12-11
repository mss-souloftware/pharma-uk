import React from "react";
import About from "../button/About";
import FirstLeftContent from "./FirstLeftContent";
import SecondLeftContent from "./SecondLeftContent";
import ThirdLeftContent from "./ThirdLeftContent";

const LeftContent = () => {
  return (
    <div className="grid grid-rows-4 gap-4 w-full sm:w-full sm:grid-cols-1 sm:grid-rows-4 bg-[#FCFBFA] max-w-full mx-auto">
      {/* First Content */}
      <div className="row-span-1 p-2 border border-transparent flex justify-center">
        <FirstLeftContent />
      </div>

      {/* Second Content */}
      <div className="row-span-1 p-2 border border-transparent flex justify-center">
        <SecondLeftContent />
      </div>

      {/* Third Content */}
      <div className="row-span-1 p-2 border border-transparent flex justify-center">
        <ThirdLeftContent />
      </div>
    </div>
  );
};

export default LeftContent;
