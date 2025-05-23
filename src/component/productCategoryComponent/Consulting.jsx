"use client";
import CustomeBtn from "@/app/condoms/customeBtn";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ConsultingCard = () => {
  const [consultingData, setConsultingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConsultingData = async () => {
      try {
        const res = await fetch("/consultingData.json");
        const data = await res.json();
        setConsultingData(data.consulting);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchConsultingData();
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#1AB8A3] via-[#1AB8A3]r to-[#1AB8A3] py-8 relative">

      <div className="container mx-auto px-6">
        {isLoading ? (
         
          <div className="space-y-6">
            {Array.from({ length: 1 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between rounded-lg p-6 bg-gray-200 animate-pulse"
              >
             
                <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0 sm:hidden">
                  <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
                </div>

             
                <div className="md:w-2/3 w-full md:pr-8 text-center md:text-left">
                  <div className="w-3/4 h-8 bg-gray-300 rounded mb-4"></div> 
                  <div className="w-5/6 h-6 bg-gray-300 rounded mb-4"></div> 
                  <div className="w-1/2 h-10 bg-gray-300 rounded mb-6"></div> 
                  <div className="flex items-center justify-center md:justify-start gap-6">
                    <div className="w-20 h-6 bg-gray-300 rounded"></div> 
                  </div>
                </div>

                 
                <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                  <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          consultingData.map((consulting) => (
            <div
              key={consulting.title}
              className="flex flex-col md:flex-row items-center justify-between rounded-lg p-6"
            >
              {/* Left side: Image */}
              <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0 sm:hidden">
                <Image
                  height={60}
                  width={200}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-44 xl:h-44 rounded-full object-cover"
                  src={consulting.imageUrl}
                  alt={consulting.title}
                />
              </div>

            
              <div className="md:w-2/3 w-full md:pr-8 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white mb-4">
                  {consulting.title}
                </h2>
                <p className="text-sm text-white mb-4">
                  {consulting.description}
                </p>

            
                <div className="my-7">
                  <CustomeBtn
                    buttonText="Go to Consulting"
                    buttonLink="/consultation"
                    imageSrc="/icons/arrowIcon.png"
                    altText="Consulting Arrow"
                    className="bg-red-500"
                  />
                </div>

             
                <div className="flex items-center justify-center md:justify-start gap-6 flex-col sm:flex-row">
                  {consulting.icons.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {item.img && (
                        <Image
                          height={40}
                          width={20}
                          src={item.img}
                          alt={item.text}
                          className="w-5 h-5 sm:w-6 sm:h-6 ml-2"
                        />
                      )}
                      <p className="text-xs text-white">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            
              <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                <Image
                  height={60}
                  width={200}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-44 xl:h-44 rounded-full object-cover hidden sm:block"
                  src={consulting.imageUrl}
                  alt={consulting.title}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ConsultingCard;
