"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const page = () => {
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
      <div className="container mx-auto bg-gray-50">
        <div className="w-[full] h-60 border-2 border-solid border-dotted border-gray-100 shadow-sm rounded-lg mt-10">
          <div className="block text-center justify-center">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-hoverUnderlineColor font-extrabold p-1 mt-5">
              About Us
            </h2>
            <h4 className="lg:text-xl md:text-xl sm:text-base text-sm text-gray-500 mt-5">
              The UK’s trusted online pharmacy since 2015
            </h4>
            <p className="lg:text-base md:text-base sm:text-sm text-xs font-extralight font-light text-gray-700 mt-10 mx-10">
              Pharmica offers a wide range of treatments through our free online
              prescription service. Our ethos is that by providing cutting-edge
              technology to automate and innovate we can deliver a safer, more
              affordable health care experience. Our service is safe, discreet
              and convenient. All medicines are dispensed from our Central
              London-based registered pharmacy.
            </p>
          </div>
        </div>

        <div className="container mx-auto w-full h-auto grid grid-rows-2 grid-cols-2 gap-16 mt-16 bg-gray-50 shadow-sm rounded-lg">
          {" "}
          {/* Company Information */}
          <div className="w-full h-auto md:h-[20rem] relative border-2 border-solid shadow-sm rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 border-dotted border-gray-100">
  <div className="col-span-1 sm:col-span-2 text-base sm:text-lg md:text-xl lg:text-xl font-light text-hoverUnderlineColor ml-5">
    Company Information
    <hr />
  </div>
  <div className="p-4 lg:p-4 border-b-2 sm:border-b-0 sm:border-r-2 border-solid border-dotted border-gray-300">
    <p className="mb-4">This website is operated by Pharmica Ltd.</p>
    <span className="block mb-4">
      Pharmica Ltd is registered in England and Wales under company number 9668055 (DUNS Number: 22-097-8327).
    </span>
    VAT Number: GB 217 7259 95
  </div>

  <div className="p-4">
    {/* Additional information for the second column */}
    Registered Office:
    <span className="block mb-2">236 Gray's Inn Rd London</span>
    <span className="block mb-2">WC1X 8HB</span>
    <span className="mb-4 block">United Kingdom 020 7112 9014</span>
    <span className="text-hoverUnderlineColor">
      help@ifeelshy.co.uk
    </span>
  </div>
</div>

          {/* Customer Review */}
          <div className="w-full h-full border-2 border-solid border-dotted border-gray-100 shadow-sm rounded-lg p-0 flex flex-col items-center justify-center">
            {/* Title */}
            <div className="text-base sm:text-xl md:text-2xl lg:text-4xl font-extrabold mb-4 text-hoverUnderlineColor">
              {" "}
              243,0094
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Customer Reviews
            </h2>

            <div className="flex justify-center items-center mb-2">
              <img
                className="w-6 sm:w-8 md:w-10 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-6 sm:w-8 md:w-10 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-6 sm:w-8 md:w-10 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-6 sm:w-8 md:w-10 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-6 sm:w-8 md:w-10 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
            </div>

            {/* Review Sections */}
            <div className="w-full flex justify-center space-x-3 mb-0">
              {/* Google Review */}
              <div className="flex flex-col items-center">
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2">
                  <span style={{ color: "#4285F4" }}>𝖦</span>
                  <span style={{ color: "#FBBC05" }}>𝗈</span>
                  <span style={{ color: "#34A853" }}>𝗈</span>
                  <span style={{ color: "#FBBC05" }}>𝗀</span>
                  <span style={{ color: "#EA4335" }}>𝗅</span>
                  <span style={{ color: "#4285F4" }}>𝖾</span>
                </div>
              </div>

              {/* TrustPilot Review */}
              <div className="flex flex-col items-center">
                <div className="text-lg font-medium mb-6">
                  {" "}
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-center mb-2 flex items-center justify-center">
                    Trust <span className="text-[#50C878]">Pilot</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Add more reviews if needed */}
            <div className="w-full text-center mb-4">
              <p className="text-md font-light text-gray-500 px-12">
                Our customers trust us to deliver top-quality service. Read more
                reviews on Google and TrustPilot!
              </p>
            </div>
          </div>
          {/* Pharmicy Regulations */}
          <div className="w-full h-[20rem] md:h-[25rem] relative shadow-sm rounded-lg grid grid-cols-2 gap-4 border-dotted border-2 border-gray-100">
            <div className="col-span-2 text-base sm:text-base md:text-base xl:text-xl font-light text-hoverUnderlineColor ml-5">
              Pharmacy Regulation
              <hr />
            </div>

            <div className="p-4 border-r-2 border-dotted border-gray-300 md:text-base">
              <p className="mb-4 text-xs sm:text-sm md:text-base">
                The pharmacy is registered with the General Pharmaceutical
                Council with number 9012030.
              </p>
              <span className="block mb-4 text-xs sm:text-sm md:text-base">
                The superintendent pharmacist for Pharmica is: Ana Carolina
                Osorio De Faria Goncalves GPhC Number: 2088658
              </span>
              <ul>
                <li className="block text-xs sm:text-sm md:text-base">
                  Dr Munawar Iqbal (GPhC Number 2059871)
                </li>
                <li className="block text-xs sm:text-sm">Anika Jagot (GPhC Number 2079699)</li>
              </ul>
            </div>

            <div className="p-4 text-xs sm:text-sm">
              {/* Additional information for the second column */}
              For more information or to view registration details visit the{" "}
              <span className="text-hoverUnderlineColor font-extrabold">
                {" "}
                General Pharmaceutical Council's website.{" "}
              </span>
              <span className="block mb-2">
                <img src="/registeredPharma.png" alt="" className="w-20 py-4" />
              </span>
              <span className="block mb-2">Responsible Pharmacist:</span>
              <span className="mb-4 block">United Kingdom 020 7112 9014</span>
              <ul>
                <li>Rehma Gill (GPhC number 2225869)</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="border-solid border-dotted border-gray-300 relative grid grid-cols-2 w-full">
            {/* Column 1: Image with Overlay Text */}
            <div className="relative w-[12vw] h-full border-2 border-dotted border-gray-300 rounded-lg">
              {/* Image */}
              <img
                src="/DoctorImages/doctorImg1.jpg"
                alt="Doctor"
                className="w-full h-full object-cover"
              />

              {/* Overlay Text */}
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center pt-1">
                <Link
                  href="/contact"
                  className="bg-gray-500 text-white px-2 py-1 font-medium text-center rounded-b-md bg-opacity-80 cursor-pointer hover:text-hoverUnderlineColor transform transition duration-300 ease-in-out"
                >
                  Need help? Talk to our friendly experts now
                </Link>
              </div>
            </div>

            {/* Column 2: Additional Content */}
            <div className="w-[14vw]  h-full flex items-center justify-center text-center">
              <div className="w-full h-full border-2 border-dotted border-gray-300 rounded-lg p-4 bg-gray-200 ">
                <h2 className="text-base sm:text-xl lg:text-xl my-4 text-center text-hoverUnderlineColor">
                  How it works
                </h2>

                <div className="flex items-center mb-12">
                  {/* Image */}
                  <img
                    src="/consultin.png"
                    alt="Consultation"
                    className="w-8 mr-2"
                  />
                  {/* Text */}
                  <span className="text-sm sm:text-sm lg:text-sm text-gray-700">
                    Complete online consultation
                  </span>
                </div>

                <div className="flex items-center mb-12">
                  {/* Image */}
                  <img
                    src="/treatment.jpg"
                    alt="Treatment"
                    className="w-8 mr-2"
                  />
                  {/* Text */}
                  <span className="text-sm sm:text-sm lg:text-sm text-gray-700">
                    Select your treatment
                  </span>
                </div>

                <div className="flex items-center mb-12">
                  {/* Image */}
                  <img
                    src="/Deliveri.png"
                    alt="Delivery"
                    className="w-10 mr-2"
                  />
                  {/* Text */}
                  <span className="text-sm sm:text-sm lg:text-sm text-gray-700">
                    Express delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Qualified Team  */}
          <div className="w-[50%] h-full relative border-1 border-dotted bg-gray-50">
            <div className="block ml-5 mt-5 text-hoverUnderlineColor">
              <h2 className="text-base sm:text-base md:text-base xl:text-xl font-light">Our Qualified Dispensing Team</h2>
              <hr />
            </div> 
            <div className="m-4 font-normal">
            All our pharmacists are based in the UK and are registered with the General Pharmaceutical Council.
            </div>  

            <div className=" grid grid-rows-4 grid-cols-1 w-full h-full relative  border-1 border-dotted border-gray-50">
            {
              categories.map((category, index)=>(
                <div key={index} className="grid grid-rows-1 grid-cols-2 gap-y-3 border-solid border-2 relative border-gray-300 shadow-md rounded-lg text-left w-[97%] h-[12rem] block mx-auto justify-items-center  ">
                  <div>
                    <img src={category.image} alt="" className="w-10 h-10 sm:w-14 sm:h-14  md:w-40 md:h-full rounded-lg flex " />
                  </div>
                   <div className="grid grid-rows-4 grid-cols-1 ">
                    <div className="mb-0 flex items-center">
                      <span className="text-2xl h-1 text-hoverUnderlineColor">{category.name}</span>
                    </div>
                    <div className="mb-0 flex items-center">
                      <span className="text-sm h-1">{category.specializes}</span>
                    </div>
                    <div className="mb-4 flex items-center">
                      <span className="text-sm h-1">{category.work}</span>
                    </div>

                    <div className="mb-4 flex items-center">
                      <p className="text-sm font-normal text-gray-600">{category.description}</p>
                    </div>

                   </div>
                </div>
              ))
            }
            </div>
          </div>
      </div>
    </>
  );
};

export default page;
