import Image from "next/image";
import "../../app/about/page.css";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';  // Import the skeleton loader library

const HowDoesItWorks = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/HowDoesItWorks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSections(data.categories); // Assuming the sections are in 'categories'
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error(err.message);
        setIsLoading(false); // Set loading to false even in case of error
      }
    };

    fetchData();
  }, []);

  // Render skeleton loader for the product card
  const renderSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array(3).fill().map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-50 p-4 transition-all"
        >
          {/* Skeleton Image */}
          <Skeleton height={160} width="100%" className="mb-4" />

          {/* Skeleton Title */}
          <Skeleton width="60%" height={20} className="mb-2" />

          {/* Skeleton Description */}
          <Skeleton width="80%" height={40} className="mb-4" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto h-[30rem] my-24 lg:px-12 relative">
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-semibold text-center sm:mb-12 xl:mb-16 text-black">
          How Does It&nbsp;
          <span className="relative text-hoverUnderlineColor tracking-widest">
            Work
          </span>
        </h2>
        {/* Display skeleton or content depending on loading state */}
        {isLoading ? renderSkeleton() : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-4 transition-all"
              >
                <Image
                  src={section.image}
                  alt={section.name}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-base sm:text-lg lg:text-xl font-normal text-gray-900 mb-2 text-center">
                  {section.name}
                </h3>
                <p className="text-sm font-light sm:text-base lg:text-base text-gray-700 text-center">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HowDoesItWorks;
