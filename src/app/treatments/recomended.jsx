"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useCallback, } from "react"; 

const Recomended = ({headingName, title, description, image, weekPlan, medicineData, onFilter }) => {
  const [selectedWeek, setSelectedWeek] = useState(null); // Track selected week
  const treatmentBoxRef = useRef(null);

  // Handle clicks outside the weekly plan box
  const handleClickOutside = useCallback((event) => {
    if (treatmentBoxRef.current && !treatmentBoxRef.current.contains(event.target)) {
      setSelectedWeek(null);
    }
  }, []);

  // Attach the click event listener to the document
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="bg-gray-50 mx-auto container w-full p-10 rounded-lg justify-center flex flex-col  items-center px-4 sm:px-8 md:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-10 text-center mb-5 font-extrabold capitalize text-hoverUnderlineColor">
       {headingName}
      </h1>

      {/* Main Treatment Box */}
      <div
        ref={treatmentBoxRef}
        className="w-full max-w-screen-xl py-8 sm:py-4 lg:px-7 px-10 border-2 shadow-xl border-hoverUnderlineColor rounded-lg bg-white flex flex-col items-center "
        style={{ boxShadow: "0 4px 6px rgba(150, 25, 46, 0.3)" }}
      >
        {/* Treatment Details */}
        <div className="sm:flex sm:flex-col sm:justify-center items-center xl:grid lg:grid-cols-2 gap-8 mb-14">
          <div>
            <h3 className="xl:text-2xl text-lg my-3 font-bold text-hoverUnderlineColor">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="w-full xl:ml-40 sm:w-[300px] h-auto">
            <Image
              src={image}
              alt="Treatment image"
              height={0}
              width={300}
              className="w-full h-auto object-cover rounded-lg flex"
            />
          </div>
        </div>

        {/* Weekly Plan Table */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          24-Week Treatment Plan
        </h3>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-6 ">
          {medicineData.map((treatment, index) => (
            <button
              key={index}
              onClick={() => onFilter(treatment)}
              className={`px-4 py-2 text-white rounded-lg ${
                title === treatment.name ? "bg-hoverUnderlineColor" : "bg-gray-400"
              }`}
            >
              {treatment.name}
            </button>
          ))}
        </div>

        <table className="w-full text-center border-collapse border border-gray-300 ">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Week</th>
              <th className="border border-gray-300 px-4 py-2">Capsules</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {weekPlan?.map((plan, index) => (
              <tr
                key={index}
                onClick={() => setSelectedWeek(plan)}
                className={`cursor-pointer ${
                  selectedWeek?.week === plan.week
                    ? "bg-hoverUnderlineColor text-white"
                    : ""
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">{plan.week} Week</td>
                <td className="border border-gray-300 px-4 py-2">{plan.capsules} Capsules</td>
                <td className="border border-gray-300 px-4 py-2">${plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

      

        {/* Buy Now Button */}
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            selectedWeek ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href="/cart">
          <button 
          
            className="flex items-center justify-center px-4 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-2 my-5 mt-10 w-[30vw] sm:w-1/5 lg:w-48 sm:h-[6vh] h-[4vh] lg:h-[5vh] text-xs sm:text-sm lg:text-base text-white font-semibold rounded-lg shadow-lg bg-hoverUnderlineColor hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] transition-transform duration-300 ease-in-out"
            >
            Buy Now
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Recomended;