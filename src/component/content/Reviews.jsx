import React, { useState } from "react";
import ContentSection4 from "./AboutCompany";
import Image from "next/image";
import ReviewsByPlatform from "./ReviewsByPlatforms";

const ContentSection3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Wilimson",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "John Doe",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Jane Smith",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "David Martin",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Sarah Lee",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Michael Green",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleCards = cardsData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <div className="container mx-auto p-4 mt-20 bg-white rounded-2xl">
        {/* Title */}
        <div className="block mx-auto text-center text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-bold mb-6 text-black">
          More than{" "}
          <h1 className="font-extrabold inline-block">
            207,891 <span className="text-hoverUnderlineColor">reviews</span>
          </h1>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500">
  {visibleCards.map((card, index) => (
    <div
      key={index}
      className="bg-indigo-50 rounded-lg h-auto flex flex-col justify-center items-center shadow-md p-4"
    >
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
  ))}
</div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
           <button
           key={index}
           className={`w-3 h-3 rounded-full ${
             index === currentIndex ? "bg-hoverUnderlineColor" : "bg-gray-300"
           } hover:bg-hoverUnderlineColor`}
           onClick={() => handleDotClick(index)}
         ></button>
         
          ))}
        </div>
      </div> 
    </>
  );
};

export default ContentSection3;
