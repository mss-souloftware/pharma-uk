import React from "react";

const ProductHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-hoverUnderlineColor">
        Find Your Treatment
      </h2>
       <span className="text-gray-600 max-w-[80rem] py-10">
        <p><span className="text-hoverUnderlineColor">iFeelShy {" "}</span> provides a wide range of treatments through our easy-to-use online prescription service. Our platform ensures a safe, discreet, and convenient experience, with all medications dispensed from our GPhC-registered pharmacy. Benefit from fast, reliable same-day or express delivery across the UK. Choose iFeelShy for trusted, hassle-free online pharmacy services</p>
    </span>
    </div>
  );
};

export default ProductHeading;
