import React, { useState } from "react";
import ContentSection4 from "./AboutCompany";
import Image from "next/image";

const ContentSection3 = () => {
  const cardsData = [
    { starIcons: 4, text: "Lorem ipsum dolor sit amet", name: "Wilimson" },
    { starIcons: 4, text: "Lorem ipsum dolor sit amet", name: "John Doe" },
    { starIcons: 4, text: "Lorem ipsum dolor sit amet", name: "Jane Smith" },
    { starIcons: 4, text: "Lorem ipsum dolor sit amet", name: "David Martin" },
    { starIcons: 4, text: "Lorem ipsum dolor sit amet", name: "Sarah Lee" },
    { starIcons: 4, text: "Lorem ipsum dolor sit amet", name: "Michael Green" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="container mx-auto p-6 mt-16 bg-white rounded-2xl">
        {/* Title */}
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8">
          More than{" "}
          <h1 className="inline font-extrabold">
            207,891{" "}
            <span className="text-[#1AB8A3]">reviews</span>
          </h1>
        </div>

        {/* Custom Carousel Section */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="min-w-[33.33%] h-[15rem] bg-indigo-50 rounded-lg p-6 shadow-md text-center mx-2 my-4 flex flex-col justify-center"
              >
                <div className="flex justify-center mb-2">
                  {[...Array(card.starIcons)].map((_, i) => (
                    <Image
                      key={i}
                      src="/rankStarIcon.png"
                      width={20}
                      height={20}
                      alt="Star"
                      className="w-6"
                    />
                  ))}
                </div>
                <p className="font-bold text-sm sm:text-base mb-2">
                  {card.text}
                </p>
                <p className="text-[#1AB8A3] font-bold sm:text-xl">
                  {card.name}
                </p>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from(
              { length: Math.ceil(cardsData.length / 3) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index
                      ? "bg-[#1AB8A3]"
                      : "bg-gray-300"
                  }`}
                ></button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content Section 4 */}
      <ContentSection4 />
    </>
  );
};

export default ContentSection3;
