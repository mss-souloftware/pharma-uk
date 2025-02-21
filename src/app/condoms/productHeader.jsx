"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomeBtn from "./customeBtn";

const ProductHeader = () => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [isError, setIsError] = useState(false);  
  useEffect(() => {
    const dataFetched = async () => {
      try {
        const res = await fetch("/productHeaderContent.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFetchData(data.Condoms); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true); 
        setIsLoading(false); 
      }
    };
    dataFetched();
  }, []);

  if (isError) {
    return <div className="text-center text-red-700">Failed to load content. Please try again later.</div>; 
  }

  return (
    <div className="container mx-auto w-full h-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[300px] lg:h-[350px]">
          {isLoading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div> 
          ) : (
            fetchData.length > 0 && (
              <Image
                src={fetchData[0].img} 
                alt={fetchData[0].title} 
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
              <div key={item.label} className="space-y-2"> {/* Adds spacing between child elements */}
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-hoverUnderlineColor">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700">{item.subTitle}</p>
              {/* <CustomeBtn
                buttonText="Get to Consulting"
                buttonLink="/consultation"
                imageSrc="/icons/arrowIcon.png"
                altText="Consulting Arrow"
                className=""
              /> */}
            
              <p className="text-sm font-normal max-w-full text-gray-600 mt-4">
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
