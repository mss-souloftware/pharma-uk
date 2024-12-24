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

        <div className="container mx-auto w-full h-auto grid gap-8 mt-16">
  {/* Company Information */}
  <div className="w-full h-auto border-2 shadow-sm rounded-lg grid grid-cols-1 sm:grid-cols-2   gap-4  order-1 sm:order-1">
    <div className="col-span-1 sm:col-span-2 text-base sm:text-lg md:text-xl lg:text-xl font-light text-hoverUnderlineColor ml-5">
      Company Information
      <hr />
    </div>
    <div className="p-4 lg:p-4 border-b-2 sm:border-b-0 sm:border-r-2 ">
      <p className="mb-4">This website is operated by Pharmica Ltd.</p>
      <span className="block mb-4">
        Pharmica Ltd is registered in England and Wales under company number
        9668055 (DUNS Number: 22-097-8327).
      </span>
      VAT Number: GB 217 7259 95
    </div>
    <div className="p-4">
      Registered Office:
      <span className="block mb-2">236 Gray&apos;s Inn Rd London</span>
      <span className="block mb-2">WC1X 8HB</span>
      <span className="mb-4 block">United Kingdom 020 7112 9014</span>
      <span className="text-hoverUnderlineColor">help@ifeelshy.co.uk</span>
    </div>
  </div>

  {/* Customer Review */}
  <div className="w-full h-auto  p-4 flex flex-col items-center justify-center order-2 sm:order-2">
    <div className="text-base sm:text-xl md:text-2xl lg:text-4xl font-extrabold mb-4 text-hoverUnderlineColor">
      243,0094
    </div>
    <h2 className="text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
    <div className="flex justify-center items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          className="w-6 sm:w-8 md:w-10 lg:w-8"
          src="/rankIcon.png"
          alt="Star"
        />
      ))}
    </div>
    <p className="text-md font-light text-gray-500 text-center px-4">
      Our customers trust us to deliver top-quality service. Read more reviews
      on Google and TrustPilot!
    </p>
  </div>

  {/* Pharmacy Regulations */}
  <div className="w-full h-auto border-2 shadow-sm rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4  order-3 sm:order-3">
    <div className="col-span-1 sm:col-span-2 text-base sm:text-lg md:text-xl font-light text-hoverUnderlineColor ml-5">
      Pharmacy Regulation
      <hr />
    </div>
    <div className="p-4 border-b-2 sm:border-b-0 sm:border-r-2 ">
      <p className="mb-4">
        The pharmacy is registered with the General Pharmaceutical Council with
        number 9012030.
      </p>
      <span className="block mb-4">
        The superintendent pharmacist for Pharmica is: Ana Carolina Osorio De
        Faria Goncalves GPhC Number: 2088658
      </span>
      <ul>
        <li>Dr Munawar Iqbal (GPhC Number 2059871)</li>
        <li>Anika Jagot (GPhC Number 2079699)</li>
      </ul>
    </div>
    <div className="p-4">
      For more information or to view registration details visit the{" "}
      <span className="text-hoverUnderlineColor font-extrabold">
        General Pharmaceutical Council&apos;s website.
      </span>
      <img src="/registeredPharma.png" alt="" className="w-20 py-4" />
      <span>Responsible Pharmacist:</span>
      <ul>
        <li>Rehma Gill (GPhC number 2225869)</li>
      </ul>
    </div>
  </div>

  {/* How It Works Section */}
</div>
  <div className="mt-40 ">
<HowDoesItWorks/>
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
