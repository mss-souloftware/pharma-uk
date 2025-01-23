import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

const Card = () => {
  const [cardData, setCardData] = useState([]);

  // Fetch the card data from the JSON file
  useEffect(() => {
    const fetchCardData = async () => {
      const response = await fetch("/contactCard.json");
      const data = await response.json();
      setCardData(data);
    };

    fetchCardData();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:mt-0 md:mt-[40%] h-auto bg-gray-50">
      {/* Swiper for smaller screens */}
      <div className="block sm:hidden">
        {cardData.length > 0 && (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, // Auto-slide every 1 second
              disableOnInteraction: false, // Keep autoplay running after interaction
            }}
            className="w-full"
          >
            {cardData.map((card) => (
              <SwiperSlide key={card.id}>
                <div
                  className="w-full h-96 p-5 border-4 border-hoverUnderlineColor rounded-lg shadow-lg transform transition-transform duration-300 cursor-pointer 
                  hover:shadow-xl hover:bg-gray-200 ease-in-out"
                >
                  <Link href={card.link}>
                    <div className="text-left group">
                      <h1 className="text-2xl md:text-3xl font-normal text-hoverUnderlineColor mb-4 relative group-hover:text-red-600">
                        {card.title}
                        <span className="absolute left-0 mt-[1px] block w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                      </h1>
                      <p className="text-sm md:text-base py-5 text-gray-800 font-light">
                        {card.description}
                      </p>
                      <ul className="text-sm md:text-base font-normal list-inside">
                        {card.points.map((point, index) => (
                          <li key={index} className="relative pl-6 mb-5">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-hoverUnderlineColor"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-12">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-full h-96 p-5 border-4 border-hoverUnderlineColor rounded-lg shadow-lg transform transition-transform duration-300 cursor-pointer 
            hover:shadow-xl hover:bg-gray-200 ease-in-out"
          >
            <Link href={card.link}>
              <div className="text-left group">
                <h1 className="text-2xl md:text-3xl font-normal text-hoverUnderlineColor mb-4 relative group-hover:text-red-600">
                  {card.title}
                  <span className="absolute left-0 mt-[1px] block w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </h1>
                <p className="text-sm md:text-base py-5 text-gray-800 font-light">
                  {card.description}
                </p>
                <ul className="text-sm md:text-base font-normal list-inside">
                  {card.points.map((point, index) => (
                    <li key={index} className="relative pl-6 mb-5">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-hoverUnderlineColor"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;