import Image from "next/image";
import "../../app/about/page.css";
import React, { useEffect, useState } from "react";

const HowDoesItWorks = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/HowDoesItWorks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSections(data.categories); // Assuming the sections are in 'categories'
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto h-[30rem] my-24 lg:px-12 ">
      <h2 className="text-3xl lg:text-[58px] font-bold text-center mb-8 text-black">
  How Does It&nbsp;
  <span className="relative text-hoverUnderlineColor underline-background tracking-widest">
    Work
  </span>
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 p-4 transition-all"
          >
            <Image
              src={section.image}
              alt={section.name}
              width={400} // Match the width to the displayed size
              height={160} // Adjust to maintain aspect ratio
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 text-center">
              {section.name}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 text-center">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoesItWorks;
