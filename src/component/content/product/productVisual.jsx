import React from "react";

const ProductVisual = () => {
  return (
    <div className="  px-6 py-2 ">
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center   space-y-6">
         
 {/* Dummy Text Section */}
 <div className="text-center max-w-4xl">
        
 <p className="[word-spacing:0.1em] text-lg text-center " style={{ letterSpacing: "0.5px", lineHeight:"44.6px" }}>
  Discover the latest in cutting-edge technology with our new product. Designed to enhance your experience, it delivers performance, style, and reliability in one seamless package.
</p>

      </div>
        {/* Video Container */}
        <div className="w-auto py-5 xl:max-w-[50rem] mx-auto">
          <video
            src="/2340-157269921_tiny.mp4"
            muted
            controls
            className="w-full rounded-lg "
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
