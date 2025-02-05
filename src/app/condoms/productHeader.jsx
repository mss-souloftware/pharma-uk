"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomeBtn from "./customeBtn";

const ProductHeader = () => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isError, setIsError] = useState(false); // Error handling state

  useEffect(() => {
    const dataFetched = async () => {
      try {
        const res = await fetch("/productHeaderContent.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFetchData(data.Condoms); // Setting the data for Condoms
        setIsLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true); // Set error state
        setIsLoading(false); // Stop loading even on error
      }
    };
    dataFetched();
  }, []);

  if (isError) {
    return <div className="text-center text-red-500">Failed to load content. Please try again later.</div>; // Error message
  }

  return (
    <div className="container mx-auto w-full h-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[300px] lg:h-[350px]">
          {isLoading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div> // Skeleton loader for image
          ) : (
            fetchData.length > 0 && (
              <Image
                src={fetchData[0].img} // Ensure this path exists in public folder
                alt={fetchData[0].title} // Alt text dynamically
                layout="fill"
                className="rounded-lg shadow-xl object-cover"
              />
            )
          )}
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start items-start space-y-4">
          {isLoading
            ? Array.from({ length: 1 }).map((_, index) => (
                <div key={index} className="w-full space-y-4">
                  <div className="w-3/4 h-8 bg-gray-200 animate-pulse mb-4 rounded"></div> {/* Title Skeleton */}
                  <div className="w-5/6 h-6 bg-gray-200 animate-pulse mb-2 rounded"></div> {/* Subtitle Skeleton */}
                  <div className="w-1/2 h-10 bg-gray-200 animate-pulse mb-6 rounded"></div> {/* Button Skeleton */}
                  <div className="w-full h-6 bg-gray-200 animate-pulse rounded"></div> {/* Content Skeleton */}
                  <div className="w-11/12 h-6 bg-gray-200 animate-pulse mt-2 rounded"></div>
                </div>
              ))
            : fetchData.map((item) => (
                <div key={item.label}>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-relaxed text-hoverUnderlineColor">
                    {item.title}
                  </h1>
                  <p className="text-base text-gray-600">{item.subTitle}</p>

                  {/* Custom Button */}
                  <CustomeBtn
                    buttonText="Get to Consulting"
                    buttonLink="/consultation"
                    imageSrc="/icons/arrowIcon.png"
                    altText="Consulting Arrow"
                    className=""
                  />

                  <p className="xl:text-base md:text-base text-sm font-normal max-w-full text-gray-600 mt-4 leading-8 px-5 ">
                    {item.content}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
