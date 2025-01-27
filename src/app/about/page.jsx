"use client";
import React from "react";
import "./page.css";
import Image from "next/image"; 
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import QualifiedTeamAboutPage from "@/component/qualifiedTeamAboutPage";
import PharmacyRegulationsMobile from "@/component/PharmacyRegulationsMobile";
import HowDoesItWorksMobile from "@/component/HowDoesItWorksMobile";
import CompanyInformation from "./companyInformation";
import CustomerReviews from "./customerReviews";
import PharmaRegulation from "./PharmaRegulation";
const Page = () => {
  return (
    <div>
    {/* Image Section */}
    <div className="relative flex justify-center items-center w-full h-[38rem] bg-gradient-to-r from-red-600 via-gray-800 to-black animate-gradient-bg overflow-hidden">

{/* Transparent Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-80"></div>

{/* Text Content */}
<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 z-20">
  {/* Left Section (Heading and Description) */}
  <div className="text-white z-20 flex flex-col justify-center">
  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight drop-shadow-lg shine-effect capitalize leading-tight">
   Company Information
</h1>

  </div>

  {/* Right Section (Company Information Heading and Details) */}
  <div>
    <div className="flex flex-col gap-6 sm:gap-4 md:pl-20 mt-7 text-center sm:text-left">
      {/* Left Information */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="w-full lg:w-[20rem] xl:w-[30rem] ">
          <p className="tracking-wide font-light text-white text-sm lg:text-base">
            <span className="block">
              This website is operated by Pharmica Ltd. Pharmica Ltd is
              registered Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Dolore, at.
            </span>
            <span className="block">
              in England and Wales under company number{" "}
              <span className="text-hoverUnderlineColor">9668055</span>
            </span>
            <span className="block">
              DUNS Number:{" "}
              <span className="text-hoverUnderlineColor">22-097-8327</span>
            </span>
            VAT Number:{" "}
            <span className="text-hoverUnderlineColor">GB 217 7259 95</span>
          </p>
        </div>
      </div>

      {/* Right Information */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start text-center sm:text-left">
        <div className="lg:w-full text-white text-sm lg:text-base">
          <h2 className="text-xl font-light">Registered Office:</h2>
          <p className="tracking-wide font-light">
            236 Gray&apos;s Inn Rd London WC1X 8HB. United Kingdom 020 7112
            9014
            <span className="block text-hoverUnderlineColor font-light">
              help@pharmica.co.uk
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<style jsx>{`
/* Define the gradient animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Apply the gradient animation to the background */
.animate-gradient-bg {
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease infinite;
}
`}</style>


 
    {/* <CompanyInformation/> */}

      {/* Customer Reviews */}
       <CustomerReviews/>

      {/* <PharmaRegulation/> */}

      {/* How Does It Work */}
      <div className="w-full relative  px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute top-0 left-0">
          <Image
            src="/bg1.png"
            height={60}
            width={100}
            alt="Background Graphic"
            className="w-40"
          />
        </div>

        {/* Content Component for Desktop */}
        <div className="container mx-auto sm:mb-[27rem] lg:mb-0 hidden sm:block">
          <HowDoesItWorks />
        </div>

        {/* Content Component for Mobile */}
        <div className="container mx-auto block sm:hidden">
          <HowDoesItWorksMobile />
        </div>
      </div>

      {/* Our Qualified Team */}
      <div className="  sm:my-0 sm:mb-0">
        <div className="w-full  border border-black bg-black px-4 sm:px-6 lg:px-8 ">
          <div className="container mx-auto  ">
            <QualifiedTeamAboutPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;