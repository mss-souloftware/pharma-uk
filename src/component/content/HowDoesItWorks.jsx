import React, { useEffect, useState, lazy, Suspense } from "react";
import Skeleton from 'react-loading-skeleton';  // Import the skeleton loader library
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import "../../app/about/page.css";

const ProductVisual = lazy(() => import("./product/productVisual"));
const Image = lazy(() => import("next/image"));

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
        setIsLoading(false); 
        return;
      }

      try {
        const response = await fetch("/HowDoesItWorks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSections(data.categories || []); 

        // Cache data in local storage
        localStorage.setItem('howDoesItWorksSections', JSON.stringify(data.categories));
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

   
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
    <div className="bg-gradient-to-b from-[#30BFAC] to-[#30BFAC]  rounded-2xl py-16 container mx-auto h-auto my-20 lg:px-12 relative">
    <div className="relative z-10 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[81px] text-white">
        How Does It&nbsp; Work?
      </h2>
  
      <Suspense fallback={<Skeleton height={300} />}>
        <ProductVisual />
      </Suspense>
  
      {isLoading ? renderSkeleton() : (
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex group bg-white flex-col items-center justify-center p-8 h-[32rem] rounded-xl transition-all hover:shadow-xl hover:scale-105 relative"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
  
              <Suspense fallback={<Skeleton height={160} width={400} className="mb-4 rounded-md" />}>
                <Image
                  src={section.image}
                  alt={section.name || "Section image"}
                  width={400}
                  height={160}
                  className="w-full h-44 object-cover rounded-md mb-5"
                  loading="lazy"
                />
              </Suspense>
  
              <h3 className="text-lg font-semibold text-gray mb-3 text-center">
                {section.name}
              </h3>
              <p className="font-light text-sm text-gray text-center px-4">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      )}
  
      {!isLoading && (
        <div className="block sm:hidden mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {sections.map((section, index) => (
              <SwiperSlide key={index}>
                <div className="flex group bg-white flex-col items-center justify-center p-8 h-[32rem] rounded-xl transition-all hover:shadow-xl hover:scale-105 relative">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
  
                  <Suspense fallback={<Skeleton height={160} width={400} className="mb-4 rounded-md" />}>
                    <Image
                      src={section.image}
                      alt={section.name || "Section image"}
                      width={400}
                      height={160}
                      className="w-full h-44 object-cover rounded-md mb-5"
                      loading="lazy"
                    />
                  </Suspense>
  
                  <h3 className="text-lg font-semibold text-gray mb-3 text-center">
                    {section.name}
                  </h3>
                  <p className="font-light text-sm text-gray text-center px-4">
                    {section.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  </div>
  
  );
};

export default HowDoesItWorks;
