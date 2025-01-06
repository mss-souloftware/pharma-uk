import React from "react";

const SebscribeSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full h-auto p-1 sm:p-4 md:p-4 mt-8 bg-hoverUnderlineColor border-2 border-transparent rounded-lg">
      {/* Text Section */}
      <div className="flex-shrink-0 text-center mx-auto  md:text-left mb-4 md:mb-0">
        <span className="text-xl sm:text-base md:text-xl lg:text-3xl">
          Subscribe to our newsletter
        </span>
      </div>

      {/* Input Section */}
      <div className="flex-shrink-0 flex-grow flex items-center justify-center mb-4 md:mb-0 md:mx-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="bg-transparent border-2 bg-white text-black border-solid border-hoverUnderlineColor rounded-md w-30 text-center mx-auto ml-0 sm:ml-auto md:ml-auto sm:w-60 md:w-60 lg:w-96 h-10 md:h-12 px-2"
        />
      </div>

      {/* Button Section */}
      <div className="flex-shrink-0 mr-0">
        <button className="w-28 sm:w-24 md:w-36 lg:w-48 h-8 md:h-12 mr-0 mb-3 sm:mb-0 md:mb-0 bg-black text-white border-2 border-solid border-hoverUnderlineColor rounded-xl shadow-xl hover:cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default SebscribeSection;
