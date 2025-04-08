"use client";
import React, { useEffect, useState } from "react";
import Contact from "./contact";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../config/axios";

const FaqsPage = ({ categoryId }) => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  // Fetch FAQ data from API
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/products/categories/${categoryId}/faqs`);
        
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          setFaqData(response.data.data);
          setDataFetched(true);
        } else {
          throw new Error("Invalid FAQ data format");
        }
      } catch (err) {
        setError(err.message || "Failed to load FAQs");
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchFaqData();
    }
  }, [categoryId]);

  if (error) {
    return (
      <div className="text-red-500 dark:text-red-400 text-center p-8">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 container mx-auto">
      <div className="py-8 max-w-screen-xl sm:py-16 lg:px-7">
        <h2 className="mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-hoverUnderlineColor dark:text-white text-center sm:text-left">
          Frequently Asked Questions
        </h2>

        {loading ? (
          <div className="grid pt-8 text-center sm:text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2 w-full xl:w-[120%]">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="mb-10 px-0 xl:px-0">
                <Skeleton height={30} width={200} className="mb-4" />
                <Skeleton count={3} />
              </div>
            ))}
          </div>
        ) : dataFetched ? (
          faqData.length > 0 ? (
            <div className="grid pt-8 text-center sm:text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2 w-full xl:w-[120%]">
              {faqData.map((faq) => (
                <div key={faq.id} className="flex flex-col items-center sm:items-start mb-10 px-0 xl:px-0">
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
                    <span className="text-hoverUnderlineColor font-normal">{faq.question}</span>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 px-2 sm:px-0 font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-center p-8">
              No FAQs found for this category
            </div>
          )
        ) : (
          <div className="text-gray-500 dark:text-gray-400 text-center p-8">
            No data available
          </div>
        )}

        <Contact />
      </div>
    </section>
  );
};

export default FaqsPage;
