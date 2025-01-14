// Pain relief
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react"; 
import CustomeBtn from "../condoms/customeBtn";

const ConsultingCard = () => {
  const [consultingData, setConsultingData] = useState([]);

  useEffect(() => {
    // Fetching the JSON data from the server or local file
    const fetchConsultingData = async () => {
      try {
        const res = await fetch("/consultingData.json");
        const data = await res.json();
        setConsultingData(data.consulting);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchConsultingData();
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#c62638] via-hoverUnderlineColor to-hoverUnderlineColor py-8 relative">
      {/* Curved lines in the background */}
      <svg
        className="absolute top-0 left-0 w-full h-32 transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.4"
          d="M0,128L48,160C96,192,192,256,288,272C384,288,480,256,576,240C672,224,768,224,864,192C960,160,1056,96,1152,101.3C1248,107,1344,213,1392,256L1440,288V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <div className="container mx-auto px-6">
  {consultingData.map((consulting) => (
    <div
      key={consulting.title}
      className="flex flex-col md:flex-row items-center justify-between rounded-lg p-6"
    >
      <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0   sm:hidden ">
        <Image
          height={60}
          width={200}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-44 xl:h-44 rounded-full object-cover"
          src={consulting.imageUrl}
          alt={consulting.title}
        />
      </div>
      {/* Left side: Text content */}
      <div className="md:w-2/3 w-full md:pr-8 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-relaxed text-white mb-4">
          {consulting.title}
        </h2>

        <p className="text-base sm:text-xl text-white mb-4">
          {consulting.description}
        </p>

        {/* Button for both mobile and larger screens */}
        <div className="my-7  ">
          <CustomeBtn
            buttonText="Go to Consulting"
            buttonLink="/consultation"
            imageSrc="/btnArrow.png"
            altText="Consulting Arrow"
            className="bg-red-500"
          />
        </div>

        {/* Icons with Text for both mobile and larger screens */}
        <div className="flex items-center justify-center md:justify-start gap-6 flex-col sm:flex-row">
          {consulting.icons.map((item, index) => (
            <div key={index} className="flex items-center gap-2  ">
              {item.img && (
                <Image
                  height={40}
                  width={20}
                  src={item.img}
                  alt={item.text}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              )}
              <p className="text-sm text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Image with circular shape */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0  ">
        <Image
          height={60}
          width={200}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-44 xl:h-44 rounded-full object-cover hidden sm:block"
          src={consulting.imageUrl}
          alt={consulting.title}
        />
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default ConsultingCard;
