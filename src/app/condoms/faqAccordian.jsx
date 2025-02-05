"use client";
import React, { useEffect, useState } from "react";

const FAQAccordion = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/FaqAccordian.json");
        const data = await response.json();
        setFaqData(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
        setIsLoading(false); // Stop loading in case of error
      }
    };
    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto md:px-5 lg:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-relaxed mb-8 text-center sm:text-left">
        Frequently Asked Questions About{" "}
        <span className="text-hoverUnderlineColor">Condoms</span>
      </h2>

      <div className="space-y-4">
        {isLoading ? (
          // Skeleton Loader for FAQ items
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="border-b border-gray-200 overflow-hidden px-4 bg-gray-200 animate-pulse"
              >
                {/* Skeleton Button */}
                <div className="w-full text-left flex justify-between items-center py-4">
                  <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>

                {/* Skeleton Content */}
                <div className="transition-all duration-300 max-h-0 opacity-0">
                  <div className="py-4 px-4">
                    <div className="w-full h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 overflow-hidden px-4"
            >
              {/* Accordion Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center py-4 text-lg font-semibold text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <span className="text-hoverUnderlineColor">{item.question}</span>
                <svg
                  className={`transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Accordion Content with Transition */}
              <div
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-4 px-4 text-gray-700 text-center sm:text-left">
                  {Array.isArray(item.answer) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {item.answer.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;
