import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:mt-0   md:mt-[40%] h-auto bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-12">
        {[...Array(3)].map((_, index) => (
          <div
          key={index}
          className="w-full h-96 p-5 border-4 border-hoverUnderlineColor rounded-lg shadow-lg transform transition-transform duration-300 cursor-pointer 
          hover:shadow-xl hover:bg-gray-200 ease-in-out"
          >
              <Link href="https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/">
            <div className="text-left group">
              <h1 className="text-2xl md:text-3xl font-bold text-hoverUnderlineColor mb-4 relative group-hover:text-red-600">
                Call NHS 111
                <span className="absolute left-0 mt-[1px] block w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </h1>
              <p className="text-sm md:text-base py-5 text-gray-800">
                Call NHS 111 if you urgently need medical help or advice but it&apos;s not a life-threatening situation.
              </p>
              <ul className="text-sm md:text-base font-bold list-inside">
                <li className="relative pl-6 mb-5">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-hoverUnderlineColor"></span>
                  About NHS 111
                </li>
                <li className="relative pl-6 mb-5">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-hoverUnderlineColor"></span>
                  Visit NHS 111 BSL interpreter service
                </li>
                <li className="relative pl-6 mb-5">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-hoverUnderlineColor"></span>
                  About out-of-hours services
                </li>
              </ul>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
