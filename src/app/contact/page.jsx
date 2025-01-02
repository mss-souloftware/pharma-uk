"use client";
import React, { useEffect, useState } from "react";
import SimpleMap from "./map";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [information, setInformation] = useState(null);
  const [informationText, setInformationText] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ContactInformation.json");
        const data = await response.json();
        setInformation(data.informationData);
        setInformationText(data.informationText); // Set informationText data
      } catch (error) {
        console.error(error.message);
        console.log("some error occurs in fetching data ");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {/* Image Section */}
      <div
        className="relative z-10 flex justify-center items-center w-full h-[38rem] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/DoctorImages/doctorImg4.jpg')" }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>
        <div className="relative container w-full z-20 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-0 xl:left-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wider leading-relaxed text-white xl:mb-5 md:mb-4">
            <span className="block xl:text-5xl md:text-3xl tracking-wide text-xl">
              The UK&apos;s Trusted
            </span>
            <span className="block text-xl xl:mt-2 xl:text-5xl md:text-3xl tracking-wide">
              Online Pharmacy
            </span>
            <span className="mt-2 text-xl xl:text-5xl md:text-3xl tracking-wide">
              Since 2015
            </span>
          </h1>
          {/* Description */}
          <div className="justify-start lg:w-[40dvw] pt-2 mb-2 sm:mb-0 block">
            <span className="text-white text-xs sm:text-base px-1 xl:px-0">
              Pharmica offers a wide range of treatments through our free online
              prescription service. Our ethos is that by providing cutting-edge
              technology to automate and innovate, we can deliver a safer, more
              affordable healthcare experience. Our service is safe, discreet,
              and convenient. All medicines are dispensed from our Central
              London-based registered pharmacy.
            </span>
          </div>
        </div>
      </div>
      <SimpleMap />

      {/* Customer Reviews */}
      <div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="w-full grid container mx-auto grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-0">
          {/* Image Section */}
          <div className="  order-2 sm:order-1 ml-0 ">
            <div className="flex flex-wrap justify-between">
              {information &&
                information.map((item) => (
                 <div key={item.label} className="grid grid-cols-2 w-full gap-y-0 ">
                  <div>
                    <span className="font-bold">
                    {item.label}&nbsp; 
                    </span>
                    <Link href='/' className="text-hoverUnderlineColor text-base">
                    {item.href}
                    </Link> 
                  </div>
                   
                 </div>
                

                ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="grid grid-rows-5 gap-y-2 my-4 text-center sm:text-left order-1 sm:order-2">
            {/* Heading */}
            <div className="mb-2">
              <h1 className="text-4xl sm:text-base md:text-4xl lg:text-5xl font-extrabold">
                Customer Service&nbsp;
                <span className="relative text-black redunderline-background z-50 tracking-widest text-4xl sm:text-base md:text-5xl">
                  Opening Hours
                </span>
              </h1>
            </div>

            {/* Star Ratings */}
            <div className="flex justify-center sm:justify-start items-center mb-2 ">
              {informationText &&
                informationText.map((item, index) => (
                  <div key={index} className="mb-4 text-center">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.data, // Render HTML safely
                      }}
                      className="text-base leading-6"
                    ></p>
                  </div>
                ))}
            </div>

            {/* Review Count */}
            <div className="flex justify-center sm:justify-start mb-2">
              <span className="text-4xl sm:text-4xl md:text-4xl lg:text-[48px] font-bold text-hoverUnderlineColor">
                234,0094+
              </span>
            </div>

            {/* Description */}
            <div className="mb-2">
              <span
                className="text-xs sm:text-sm md:text-lg lg:text-lg"
                style={{ lineHeight: "1.3" }}
              >
                <span className="block sm:w-[300px] md:w-[400px] lg:w-[504px] mx-auto sm:mx-0 text-base">
                  Our customers trust us to deliver top-quality service.
                </span>
                Read more reviews on Google and{" "}
                <span className="text-green-500">TrustPilot!</span>
              </span>
            </div>

            {/* Learn More Button */}
            <div className="border border-hoverUnderlineColor bg-hoverUnderlineColor  h-[30px] w-[110px] sm:w-20 md:w-28  sm:h-8 md:h-8 rounded-lg mx-auto sm:mx-0 mt-3">
              <Link
                href="/"
                className="flex justify-center items-center h-full"
              >
                <span className=" text-white sm:text-sm md:text-base text-sm">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
