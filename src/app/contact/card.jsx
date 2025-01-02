import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:mt-0  mt-[40rem] md:mt-[40%] h-auto bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-12">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full h-96 p-5 border-4 border-hoverUnderlineColor rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-hoverUnderlineColor mb-4">
                Call NHS 111
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
