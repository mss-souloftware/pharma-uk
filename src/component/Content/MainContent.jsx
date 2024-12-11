import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const MainContent = () => {
  return (
    <div className="relative main-div max-w-full sm:max-w-[95vw] lg:max-w-[70vw] h-auto border-solid border-2 border-transparent rounded-lg flex flex-col sm:flex-row justify-center items-start mt-24 mx-auto">
      {/* Wrapping both left and right child content */}
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default MainContent;
