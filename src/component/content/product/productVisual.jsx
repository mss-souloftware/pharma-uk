import React from "react";

const ProductVisual = () => {
  return (
    <div
      className="my-20 px-4 py-10 rounded-lg bg-gradient-to-br from-gray-800 via-black to-red-700 transition-all duration-500 ease-in-out shadow-xl"
    > 

      {/* Content Section */}
      <div className="flex justify-center items-center">
        {/* Video Container */}
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
          <video
            src="/2340-157269921_tiny.mp4"
            loop
            autoPlay
            muted
            controls
            className="w-full rounded-lg shadow-lg border-4 border-red-600 hover:scale-105 transform transition-transform duration-300"
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductVisual;
