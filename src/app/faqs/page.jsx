"use client";

import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import React, { useEffect, useState } from "react";
import Contact from "./contact";

const Page = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/Faq.json"); // Fetch FAQs from the JSON file in the public folder
        const data = await response.json();
        setFaqs(data.faqs);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl font-extrabold text-hoverUnderlineColor dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            {/* Split FAQs into two columns */}
            <FAQColumn faqs={faqs.slice(0, Math.ceil(faqs.length / 2))} />
            <FAQColumn faqs={faqs.slice(Math.ceil(faqs.length / 2))} />
          </div>
        <Contact/>
        </div>
      </section>
      <HowDoesItWorks />
    </>
  );
};

// Component to render a column of FAQs
const FAQColumn = ({ faqs }) => (
  <div>
    {faqs.map((faq, index) => (
      <div key={index} className="mb-10">
        <h3 className="flex items-center mb-4 text-lg font-medium text-hoverUnderlineColor dark:text-white">
          <Icon />
          {faq.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">{faq.content}</p>
      </div>
    ))}
  </div>
);

// Icon for FAQ items
const Icon = () => (
  <svg
    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
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
);

export default Page;
