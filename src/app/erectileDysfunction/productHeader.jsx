"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";  
import CustomeBtn from "../condoms/customeBtn";

const ProductHeader = () => { 
  const [fetchData, setFetchData] = useState([]);
   const [isError, setIsError] = useState(false);  

  useEffect(() => {
     const dataFetched = async () => {
       try {
         const res = await fetch("/productHeaderContent.json");
         if (!res.ok) throw new Error("Failed to fetch");
         const data = await res.json();
         setFetchData(data.ErectileDysfunction); 
       } catch (error) {
         console.error("Error fetching data:", error);
         setIsError(true);  
       }
     };
     dataFetched();
   }, []);
 
   if (isError) {
     return <div>Failed to load content. Please try again later.</div>; // Handle the error gracefully
   }
  
  // setFetchData(data.ErectileDysfunction);
  return (
    <div className="container mx-auto w-full h-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* Image Section */}
         {/* Image Section */}
         <div className="relative w-full h-[300px] lg:h-[350px]">
          {fetchData.length > 0 && (
            <Image
              src={fetchData[0].img}   
              alt="Condoms"
              layout="fill"
              className="rounded-lg shadow-xl object-cover"
            />
          )}
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start items-start space-y-4">
          {fetchData.map((item) => (
            
            <div key={item.label}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-relaxed text-[#1AB8A3]">
                {item.title}
              </h1>
              <p className="text-lg text-gray-600">{item.subTitle}</p>

              {/* Use CustomButton here */}
              <CustomeBtn 
        buttonText="Go to Consulting"
        buttonLink="/consultation"
        imageSrc="/btnArrow.png"
        altText="Consulting Arrow"
      />
      

              <p className="xl:text-xl md:text-base text-sm font-normal max-w-full text-gray-600 mt-4 leading-8">
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
