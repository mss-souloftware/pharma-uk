"use client";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/qualifiedTeam.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Data has not been fetched:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto ">
        <div className="w-[full] h-60  rounded-lg mt-20">
          <div className="block text-center justify-center">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-hoverUnderlineColor font-extrabold p-1 mt-5">
              About Us
            </h2>
            <h4 className="lg:text-xl md:text-xl sm:text-base text-sm text-gray-500 mt-5">
              The UK’s trusted online pharmacy since 2015
            </h4>
            <p className="lg:text-base md:text-base sm:text-sm text-xs font-extralight  text-gray-700 mt-10 mx-10">
              Pharmica offers a wide range of treatments through our free online
              prescription service. Our ethos is that by providing cutting-edge
              technology to automate and innovate we can deliver a safer, more
              affordable health care experience. Our service is safe, discreet
              and convenient. All medicines are dispensed from our Central
              London-based registered pharmacy.
            </p>
          </div>
        </div>

        {/* Content Div */}
        <div className="flex w-full bg-gray-50">
          <div className="grid grid-rows-3 grid-cols-1 w-[80%] bg-gray-50 p-4 ">
            {/* First Child Div */}
            <div className="row-span-1 h-[20rem] flex border-2 border-solid border-hoverUnderlineColor ">
              <div className="ml-7 w-[50%] pr-5 border-solid border-r-2 border-gray-300">
                <h2 className="block  text-hoverUnderlineColor font-bold text-xl py-2 ">
                  Compnay Information
                </h2>
                <hr />

                <div className="mt-10 text-gray-600">
                  <span className="pl-2 pr-2  ">
                    &nbsp;This website is operated by Pharmica Ltd.&nbsp;
                    <span className="block mt-10 mb-3 pl-2 pr-2 leading-loose">
                      &nbsp;Pharmica Ltd is registered in England and Wales
                      under company number 9668055 (DUNS Number:
                      22-097-8327).&nbsp;
                    </span>
                    <span className="block mt-10 pl-2 pr-2">
                      &nbsp;VAT Number: GB 217 7259 95&nbsp;
                    </span>
                  </span>
                </div>
              </div>

              <div className="">
                <div className="mt-20 text-gray-600">
                  <span className="pl-2 pr-2  ">
                    &nbsp;Registered Office: 236 Gray's Inn Rd&nbsp;
                    <span className="block mt-10 mb-3 pl-2 pr-2 leading-loose">
                      &nbsp;London WC1X 8HB United Kingdom.&nbsp;
                    </span>
                    <span className="block mt-10 pl-2 pr-2">
                      &nbsp;020 7112 9014&nbsp;
                      <span className="text-hoverUnderlineColor font-bold text-base">
                        help@ifeelshy.co.uk
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="row-span-1"></div>

            {/* Second Child Div */}
          </div>

          <div className="grid grid-cols-1 grid-rows-2 w-[20%] bg-gray-50 p-4">
            <div className=" border-2 border-solid border-hoverUnderlineColor">
              <div>
                <span className="text-4xl font-semibold block text-center mt-4">
                  2324523
                </span>
                <span className="text-2xl block text-center mt-5">
                  customer reviews
                </span>
                <span className="flex items-center justify-center mt-5">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src="/rankStarIcon.png"
                      alt="Star Icon"
                      className="w-10 inline-block"
                    />
                  ))}
                </span>

                <div className="flex relative items-center text-center justify-center mt-0">
                  <div className="bg-transparent w-full sm:w-48 md:w-60 lg:w-[6vw]  rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                    {/* Trust Pilot Text */}
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-extrabold text-center mb-2 flex items-center justify-center">
                      Trust <span className="text-[#50C878]">Pilot</span>
                    </h2>

                    {/* Rating Text */}
                    <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                      <span className="text-xs sm:text-sm md:text-base lg:text-base text-[#50C878]">
                        Score 4.9
                      </span>
                    </div>
                  </div>

                  <div className="bg-transparent  w-full sm:w-48 md:w-60 lg:w-[6vw]  rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                    {/* feefo Text */}
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-extrabold text-center mb-2 flex items-center justify-center">
                      <span style={{ color: "#000" }}>feefo</span>
                    </h2>

                    {/* Rating Text */}
                    <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                      <span className="text-xs sm:text-sm md:text-base lg:text-base">
                        Rating 4.9/5
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto block text-center justify-center text-gray-600 ">
                  <p className="mx-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                  <div className="w-full flex justify-center items-center h-10 bg-hoverUnderlineColor my-5">
                    <Link href="/">
                      <span className="text-xl text-white hover:cursor-pointer hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-105">
                        Read More Reviews
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 ">
          <HowDoesItWorks />
        </div>

        {/* Qualified Team */}
        <div className="w-full h-auto mt-32 relative border-1 border-solid p-4">
          <div className="block ml-2 sm:ml-5 mt-2 sm:mt-5 text-hoverUnderlineColor">
            <h2 className="text-base sm:text-lg md:text-xl xl:text-3xl font-bold text-center sm:text-left">
              Our Qualified Dispensing Team
            </h2>
            <hr className="mt-1" />
          </div>
          <div className="m-2 sm:m-4 font-normal text-sm sm:text-base text-gray-700 text-center sm:text-left">
            All our pharmacists are based in the UK and are registered with the
            General Pharmaceutical Council.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-solid border-2 border-gray-300 shadow-md rounded-lg p-4 w-full"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <img
                    src={category.image}
                    alt=""
                    className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg mx-auto sm:mx-0"
                  />
                </div>
                {/* Text Section */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-hoverUnderlineColor font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-gray-600">
                    {category.specializes}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-gray-600">
                    {category.work}
                  </p>
                  <p className="text-sm sm:text-base font-normal text-gray-500 mt-2">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
