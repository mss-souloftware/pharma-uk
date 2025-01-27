import PharmacyRegulationsMobile from "@/component/PharmacyRegulationsMobile";
import Image from "next/image";
import React from "react";

const PharmaRegulation = () => {
  return (
    <>
      <div
        className="mx-auto container sm:grid grid-cols-1 lg:grid-cols-2 hidden   " // Hide on mobile, show on larger screens
      >
<div className="">
    <h1>Pharmacy regulation</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque. Ultricies arcu sed tempor integer. Nulla aliquet tellus vel dictum tempus.</p>
</div>
        <div className="">
        <Image
  src="/pharma.jpg"
  height={200}
  width={200}
  alt="pharma"
  layout="intrinsic"
  className="w-full object-contain"
/>

        </div>
      </div>

      {/* Pharmacy Regulations Mobile */}
      <div className="sm:hidden block">
        {" "}
        {/* Only visible on mobile */}
        <PharmacyRegulationsMobile />
      </div>
    </>
  );
};

export default PharmaRegulation;
