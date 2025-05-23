import Image from "next/image";
import "../app/about/page.css"; // Import your CSS file for styling
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; // Import Swiper core styles
import "swiper/css/pagination"; // Import pagination styles
import "swiper/css/navigation"; // Import navigation styles for arrows

const HowDoesItWorksMobile = () => {
  const [sections, setSections] = useState([]);
  const swiperRef = useRef(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

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

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Listen for slide change to update arrow visibility
  const onSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    setIsFirstSlide(swiperInstance.isBeginning);
    setIsLastSlide(swiperInstance.isEnd);
  };

  return (
    <div className="container mx-auto h-[25rem] lg:px-12 my-[5rem] relative">
      <h2 className=" text-xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-5xl font-bold text-center  mb-10 text-black">
        How Does It&nbsp;
        <span className="text-[#1AB8A3]">
         Work
        </span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1} // Show one slide at a time
        pagination={{
          clickable: true, // Make pagination dots clickable
          type: "bullets", // Use bullets for pagination
          dynamicBullets: true, // Use dynamic bullets for cleaner look
        }}
        navigation={false} // Turn off default navigation arrows
        onSlideChange={onSlideChange} // Listen for slide changes
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides on small screens
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on large screens
          },
        }}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gray-50 p-4 transition-all">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        type="button"
        className={`absolute mt-10 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${isFirstSlide ? "hidden" : ""}`}
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800/30 group-hover:bg-hoverRedUnderlineColor dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-2 h-4 text-white group-hover:text-[#1AB8A3] dark:text-gray-800 group-hover:dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className={`absolute mt-10 top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${isLastSlide ? "hidden" : ""}`}
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800/30 group-hover:bg-hoverRedUnderlineColor dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-2 h-4 text-white group-hover:text-[#1AB8A3] dark:text-gray-800 group-hover:dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HowDoesItWorksMobile;
