import React from "react";

const AboutHero = () => {
  return (
    <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-[60%,40%] xl:grid-cols-[70%,30%] gap-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-10">
      {/* Left Section - Headline */}
      <div >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight lg:leading-[71px] max-w-2xl ">
  The UK&apos;s Trusted Online Pharmacy Since 2015
</h2>

      </div>

      {/* Right Section - Paragraph */}
      <div className="flex items-center">
        <p className="text-base xl:pr-16 lg:leading-[35.06px] ">
          Pharmica offers a wide range of treatments through our free online prescription service.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
