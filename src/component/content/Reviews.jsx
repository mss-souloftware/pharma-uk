"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    {
      starIcons: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Wilimson",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "John Doe",
    },
    {
      starIcons: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Jane Smith",
    },
    {
      starIcons: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "David Martin",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Sarah Lee",
    },
    {
      starIcons: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Michael Green",
    },
  ];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white rounded-2xl">
      {/* Title */}
      <div className="block mx-auto text-center text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-bold mb-10 xl:mb-16 text-black">
        Client{" "}
        <h1 className="font-extrabold inline-block">
          <span className="text-hoverUnderlineColor">Reviews</span>
        </h1>
      </div>

      {/* Swiper for all screen sizes */}
      <Swiper
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 3}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000, // Auto-scroll delay in milliseconds
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-indigo-50 rounded-lg h-auto flex flex-col justify-center items-center shadow-md p-4">
              {/* Stars */}
              <div className="flex justify-center items-center mb-2">
                {Array.from({ length: card.starIcons }).map((_, i) => (
                  <Image
                    key={i}
                    src="/rankStarIcon.png"
                    width={20}
                    height={20}
                    alt="Star Icon"
                    className="w-3 sm:w-6 md:w-7 lg:w-8"
                  />
                ))}
              </div>
              {/* Text */}
              <div className="font-bold mb-2 text-center text-sm sm:text-base">
                {card.text}
              </div>
              {/* Name */}
              <div className="text-hoverUnderlineColor font-bold sm:text-xl text-base text-center">
                {card.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
