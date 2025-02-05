"use client"; 
import React, { useEffect, useState } from "react";
import Contact from "./contact";

const FaqsPage = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch FAQ data from JSON file
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const res = await fetch("/Faq.json");
        if (!res.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await res.json(); 
        
        // Check if the data contains the 'faqs' array and set it
        if (Array.isArray(data.faqs)) {
          setFaqData(data.faqs);
        } else {
          throw new Error("FAQ data is not an array or is missing the 'faqs' key");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFaqData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return ( 
    <section className="bg-white dark:bg-gray-900 container mx-auto">
  <div className="py-8 max-w-screen-xl sm:py-16 lg:px-7">
    <h2 className="mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight font-semibold text-hoverUnderlineColor dark:text-white text-center sm:text-left">
      Frequently asked questions
    </h2>
    <div className="grid pt-8 text-center sm:text-left border-t border-gray-200 md:gap-16  dark:border-gray-700 md:grid-cols-2 w-full xl:w-[120%] ">
      {faqData.map((faq, index) => (
        <div key={index} className="flex flex-col items-center sm:items-start mb-10 px-0 xl:px-0 ">
          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
            <svg
              className="flex-shrink-0 hidden sm:block mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"  
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-hoverUnderlineColor font-normal">{faq.title}</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 px-2 sm:px-0 font-light">{faq.content}</p>
        </div>
      ))}
    </div>
    <Contact />
  </div>
</section> 
  );
};

export default FaqsPage;
