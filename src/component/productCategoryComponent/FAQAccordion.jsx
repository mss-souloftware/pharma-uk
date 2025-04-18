"use client";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";

const FAQAccordion = ({ slug }) => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQData = async () => {
      if (!slug) return;

      setIsLoading(true);
      setError(null);

      try {
        // Step 1: Get categories
        const categoryRes = await api.get("/products/categories");
        const categoryList = categoryRes.data.data || [];

        const currentCategory = categoryList.find(
          (cat) => cat.name.toLowerCase().replace(/\s+/g, "-") === slug
        );

        if (!currentCategory) {
          throw new Error("Category not found for slug");
        }

        const categoryId = currentCategory.id;

        // Step 2: Get FAQs for category
        const response = await api.get(`/products/categories/${categoryId}/faqs`);
        if (Array.isArray(response.data.data)) {
          console.log("FAQ's: ", response.data.data)
          setFaqData(response.data.data);
        } else {
          throw new Error("Invalid FAQ data format");
        }
      } catch (error) {
        setError("Failed to load FAQs");
        console.error("FAQ fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQData();
  }, [slug]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Your existing render logic remains unchanged
  return (
    <div className="container mx-auto md:px-5 lg:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-8 text-center sm:text-left">
        Frequently Asked Questions
      </h2>

      {error && (
        <div className="text-red-500 text-center p-4">{error}</div>
      )}

      <div className="space-y-4">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="border-b border-gray-200 px-4 bg-gray-200 animate-pulse">
              <div className="w-full text-left flex justify-between items-center py-4">
                <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))
        ) : faqData.length > 0 ? (
          faqData.map((item, index) => (
            <div key={item.id} className="border-b border-gray-200 px-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center py-4 text-lg font-semibold text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <p className="text-hoverUnderlineColor text-sm">{item.question}</p>
                <svg
                  className={`transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`}
                  width="16"
                  height="16"
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
              <div className={`transition-all duration-300 ${activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="py-4 px-4 text-gray-700 text-center sm:text-left">
                  {Array.isArray(item.answer) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {item.answer.map((point, idx) => (
                        <li key={idx} className="text-sm">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm">{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 dark:text-gray-400 text-center p-8">
            No FAQs found for this category
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;