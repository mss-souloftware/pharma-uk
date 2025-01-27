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
      <div className="relative flex justify-center items-center w-full h-[38rem] bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/aboutBg.jpg"
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100} // Ensures the image is sharp
        className="absolute inset-0 -z-10"
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-80"></div>

      {/* Text Content */}
      <div className="relative justify-start container mx-auto px-6 text-center sm:text-left text-white z-20">
  {/* Heading */}
  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg shine-effect capitalize ">
    <span className="block">The UK&apos;s Trusted</span>
    <span className="block">Online Pharmacy</span>
    <span className="block">Since 2015</span>
  </h1>

  {/* Red Horizontal Line */}
  <div className="md:w-[40rem] border-t-4 border-hoverUnderlineColor my-6"></div>

  {/* Description */}
  <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 lg:pr-64 ">
    Pharmica offers a wide range of treatments through our free online
    prescription service. Our ethos is that by providing cutting-edge
    technology to automate and innovate, we can deliver a safer, more
    affordable healthcare experience. Our service is safe, discreet, and
    convenient. All medicines are dispensed from our Central London-based
    registered pharmacy.
  </p>
</div>

    </div>

      {/* Main Content Section */}
    <CompanyInformation/>

      {/* Customer Reviews */}
       <CustomerReviews/>

      <PharmaRegulation/>

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