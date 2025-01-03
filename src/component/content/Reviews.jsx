import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ContentSection4 from "./AboutCompany";
import Image from "next/image";

const ContentSection3 = () => {
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
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Emma White",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Liam Brown",
    },
    {
      starIcons: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      name: "Sophia Johnson",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4 mt-20 bg-white rounded-2xl ">
        {/* Title */}
        <div className="block mx-auto text-center text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-bold mb-6 text-black">
          More than{" "}
          <h1 className="font-extrabold inline-block ">207,891 <span className="text-hoverUnderlineColor">
          reviews
            </span>  </h1>
        </div>

        {/* Full-width 3-column layout */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-44 bg-white p-8 rounded-lg w-full sm:w-11/12 lg:w-10/12">
            <div className="bg-white w-full sm:w-48 md:w-60 lg:w-[10vw] rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
              {/* Google Text */}
              <h2 className=" text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-extrabold text-center mb-2">
                <span style={{ color: "#4285F4" }}>𝖦</span>
                𝗈
                <span style={{ color: "#34A853" }}>𝗈</span>
                <span style={{ color: "#FBBC05" }}>𝗀</span>
                <span style={{ color: "#EA4335" }}>𝗅</span>
                <span style={{ color: "#4285F4" }}>𝖾</span>
              </h2>

              {/* Rating Stars */}
              <div className="flex justify-center items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/rankIcon.png"
                    width={20}
                    height={20}
                    alt=""
                    className="w-6 sm:w-8 md:w-10 lg:w-8"
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Rating 4.9/5
                </span>
              </div>
            </div>

            <div className="bg-transparent w-full sm:w-48 md:w-60 lg:w-[10vw]  rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
              {/* Trust Pilot Text */}
              <h2 className=" text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-extrabold text-center mb-2 flex items-center justify-center">
                Trust <span className="text-[#50C878]">Pilot</span>
              </h2>

              {/* Trust Star Image */}
              <div className="flex justify-center items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/trustPilotIcon.png"
                    width={20}
                    height={20}
                    alt=""
                    className="w-6 sm:w-8 md:w-10 lg:w-12"
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#50C878]">
                  Score 4.9
                </span>
              </div>
            </div>

            <div className="bg-white w-full sm:w-48 md:w-60 lg:w-[10vw]  rounded-lg h-auto flex flex-col justify-center  items-center p-4 sm:p-6 md:p-8 col-span-1">
              {/* feefo Text */}
              <h2 className=" text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-extrabold text-center mb-2 flex items-center justify-center">
                <span style={{ color: "#000" }}>feefo</span>
              </h2>

              {/* feefo Star Image */}
              <div className="flex justify-center items-center mb-2">
                {/* <img className="w-6 sm:w-8 md:w-10 lg:w-12" src="/trustPilotIcon.png" alt="Trust Pilot Star" /> */}
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/trustPilotIcon.png"
                    width={20}
                    height={20} 
                    alt=""
                    className="w-6 sm:w-8 md:w-10 lg:w-12"
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Rating 4.9/5
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main SuperSlider for the Google, Trustpilot, and Feefo Cards */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "progressbar",
            }}
            className="progress-slide-carousel"
          >
            {/* Each SwiperSlide holds a sub-slider with 3 cards */}
            {Array.from({ length: 3 }).map((_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="w-full">
                  {/* Sub-slider with 3 cards */}
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={3} // 3 cards per slide
                    loop={true}
                    autoplay={{
                      delay: 3000, // faster transition for sub-slider
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      414: {
                        slidesPerView: 1,
                      },
                      375: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 1, // 1 card on small screens ('sm')
                      },
                      768: {
                        slidesPerView: 2, // 2 cards on medium screens ('md')
                      },
                      1024: {
                        slidesPerView: 3, // 3 cards on large screens ('lg')
                      },
                    }}
                    className="sub-slide-carousel"
                  >
                    {cardsData
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((card, index) => (
                        <SwiperSlide key={index}>
                          <div className="bg-indigo-50 rounded-lg h-auto flex flex-col justify-center items-center shadow-md p-4">
                            {/* Top - Star Icon */}
                            <div className="flex justify-center items-center mb-2">
                              {Array.from({ length: card.starIcons }).map(
                                (_, i) => (
                                  <Image
                                    key={i}
                                    src="/rankStarIcon.png" // Replace with your star icon image
                                    width={20}
                                    height={20}
                                    alt="Star Icon"
                                    className="w-3 sm:w-6 md:w-7 lg:w-8"
                                  />
                                )
                              )}
                            </div>

                            {/* Middle - Card Text */}
                            <div className=" font-bold mb-2 text-center text-sm sm:text-base">
                              {card.text}
                            </div>

                            {/* Bottom - Green Name */}
                            <div className="text-hoverUnderlineColor font-bold  sm:text-xl text-base text-center">
                              {card.name}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Content Section 4 */}
      <ContentSection4 />
    </>
  );
};

export default ContentSection3;
