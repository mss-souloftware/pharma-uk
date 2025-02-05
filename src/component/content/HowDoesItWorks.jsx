import Image from "next/image";
import "../../app/about/page.css";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';  // Import the skeleton loader library
import ProductVisual from "./product/productVisual";

const HowDoesItWorks = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from JSON file with caching
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      const cachedSections = localStorage.getItem('howDoesItWorksSections');

      // Use cached data if available
      if (cachedSections) {
        setSections(JSON.parse(cachedSections));
        setIsLoading(false); // Stop loading if using cache
        return;
      }

      try {
        const response = await fetch("/HowDoesItWorks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSections(data.categories || []); // Set sections if available

        // Cache data in local storage
        localStorage.setItem('howDoesItWorksSections', JSON.stringify(data.categories));
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false); // Stop loading
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
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg transition-all shadow-lg hover:scale-105"
        >
          <Skeleton height={160} width="100%" className="mb-4 rounded-md" />
          <Skeleton width="60%" height={20} className="mb-2" />
          <Skeleton width="80%" height={40} className="mb-4" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto h-auto my-24 lg:px-12 relative">
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl   font-semibold leading-tight lg:leading-[91px] text-center sm:mb-2 ">
          How Does It&nbsp; Work?
        </h2>

        {/* Product Visual Section */}
        <ProductVisual />

        {/* Display loading skeleton or content */}
        {isLoading ? renderSkeleton() : (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
         {sections.map((section, index) => (
           <div
             key={index}
             className="flex group flex-col items-center justify-center p-6 h-[30rem] rounded-lg transition-all hover:shadow-lg hover:scale-105 hover:shadow-4xl relative"
           >
             {/* Red line on hover */}
             <div className="absolute top-0 left-0 w-full h-[4px] bg-hoverUnderlineColor scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
             
             <Image
               src={section.image}
               alt={section.name || "Section image"}
               width={400}
               height={160}
               className="w-full h-40 object-cover rounded-md mb-4"
             />
             <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 text-center">
               {section.name}
             </h3>
             <p className="  font-light sm:text-base lg:text-base text-center [word-spacing:0.1em] text-lg">
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