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
      <div
        className="relative z-10 flex justify-center items-center w-full h-[38rem] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/DoctorImages/doctorImg4.jpg')" }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>
        <div className="relative container w-full z-20 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-0 xl:left-8 md:left-8">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wider leading-relaxed text-white md:mb-3">
            <span className="block xl:text-5xl md:text-3xl tracking-wide text-xl">
              The UK&apos;s Trusted
            </span>
            <span className="block text-xl   xl:text-5xl md:text-3xl tracking-wide">
              Online Pharmacy
            </span>
            <span className=" text-xl xl:text-5xl md:text-3xl tracking-wide">
              Since 2015
            </span>
          </h1>
          <div className="justify-start lg:w-[40dvw] pt-2 mb-2 sm:mb-0 block">
            <span className="text-white font-normal text-xs sm:text-base px-1 xl:px-0">
              Pharmica offers a wide range of treatments through our free online
              prescription service. Our ethos is that by providing cutting-edge
              technology to automate and innovate, we can deliver a safer, more
              affordable health care experience. Our service is safe, discreet,
              and convenient. All medicines are dispensed from our Central
              London-based registered pharmacy.
            </span>
          </div>
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