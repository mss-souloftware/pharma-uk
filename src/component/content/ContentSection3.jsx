import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ContentSection4 from "./ContentSection4";

const ContentSection3 = () => {
  const cardsData = [
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Wilimson"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "John Doe"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Jane Smith"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "David Martin"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Sarah Lee"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Michael Green"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Emma White"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Liam Brown"
    },
    {
      "starIcons": 4,
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores cumque id totam nesciunt similique consectetur laudantium.",
      "name": "Sophia Johnson"
    }
  ];

  return (
    <>
    <div className="container mx-auto p-4 mt-20 bg-white rounded-2xl ">
      {/* Title */}
      <div className="block mx-auto text-center text-xl lg:text-3xl md:text-2xl text-hoverUnderlineColor mb-8">
        More than <span className="font-extrabold">207,891 reviews</span>
      </div>

      {/* Full-width 3-column layout turned into a Swiper Slider */}
     {/* Full-width 3-column layout */}
     <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg mb-8">
          <div className="bg-white  rounded-lg h-auto flex flex-col justify-center items-center p-4">
            {/* Google Text */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-2">
              <span style={{ color: "#4285F4" }}>𝖦</span>
              𝗈
              <span style={{ color: "#34A853" }}>𝗈</span>
              <span style={{ color: "#FBBC05" }}>𝗀</span>
              <span style={{ color: "#EA4335" }}>𝗅</span>
              <span style={{ color: "#4285F4" }}>𝖾</span>
            </h2>

            {/* Rating Stars */}
            <div className="flex justify-center items-center mb-2">
              <img
                className="w-5 sm:w-6 md:w-7 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-5 sm:w-6 md:w-7 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-5 sm:w-6 md:w-7 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-5 sm:w-6 md:w-7 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
              <img
                className="w-5 sm:w-6 md:w-7 lg:w-8"
                src="/rankIcon.png"
                alt="Star"
              />
            </div>

            {/* Rating Text */}
            <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                Rating 4.9/5
              </span>
            </div>
          </div>

          <div className="bg-transparent  rounded-lg h-auto flex flex-col justify-center items-center p-4">
            {/* Trust Pilot Text */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-2 flex items-center justify-center">
              Trust <span className="text-[#50C878]">Pilot</span>
            </h2>

            {/* Trust Star Image */}
            <div className="flex justify-center items-center mb-2">
              <img
                src="/trustPilotIcon.png"
                className="w-5 sm:w-6 md:w-7 lg:w-8 "
                alt="Trust Pilot Star"
              />

              <img
                src="/trustPilotIcon.png"
                className="w-5 sm:w-6 md:w-7 lg:w-8 "
                alt="Trust Pilot Star"
              />

              <img
                src="/trustPilotIcon.png"
                className="w-5 sm:w-6 md:w-7 lg:w-8 "
                alt="Trust Pilot Star"
              />

              <img
                src="/trustPilotIcon.png"
                className="w-5 sm:w-6 md:w-7 lg:w-8 "
                alt="Trust Pilot Star"
              />

              <img
                src="/trustPilotIcon.png"
                className="w-5 sm:w-6 md:w-7 lg:w-8 "
                alt="Trust Pilot Star"
              />
            </div>

            {/* Rating Text */}
            <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#50C878]">
                Score 4.9
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg h-48 flex justify-center items-center">
            <div className="bg-white  rounded-lg h-auto flex flex-col justify-center items-center p-4">
              {/* Google Text */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-2">
                <span style={{ color: "#000" }}>feefo</span>
              </h2>

              {/* feefo Star Image */}
              <div className="flex justify-center items-center mb-2">
                <img
                  src="/trustPilotIcon.png"
                  className="w-5 sm:w-6 md:w-7 lg:w-8 "
                  alt="Trust Pilot Star"
                />

                <img
                  src="/trustPilotIcon.png"
                  className="w-5 sm:w-6 md:w-7 lg:w-8 "
                  alt="Trust Pilot Star"
                />

                <img
                  src="/trustPilotIcon.png"
                  className="w-5 sm:w-6 md:w-7 lg:w-8 "
                  alt="Trust Pilot Star"
                />

                <img
                  src="/trustPilotIcon.png"
                  className="w-5 sm:w-6 md:w-7 lg:w-8 "
                  alt="Trust Pilot Star"
                />

                <img
                  src="/trustPilotIcon.png"
                  className="w-5 sm:w-6 md:w-7 lg:w-8 "
                  alt="Trust Pilot Star"
                />
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg" >
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
                  className="sub-slide-carousel"
                >
                  {cardsData.slice(slideIndex * 3, slideIndex * 3 + 3).map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-indigo-50 rounded-lg h-auto flex flex-col justify-center items-center shadow-md p-4">
                        {/* Top - Star Icon */}
                        <div className="flex justify-center items-center mb-2">
                          {Array.from({ length: card.starIcons }).map((_, i) => (
                            <img
                              key={i}
                              src="/rankStarIcon.png" // Replace with your star icon image
                              alt="Star Icon"
                              className="w-4 sm:w-5 md:w-5 lg:w-6"
                            />
                          ))}
                        </div>

                        {/* Middle - Card Text */}
                        <div className="text-base font-bold mb-2 text-center">
                          {card.text}
                        </div>

                        {/* Bottom - Green Name */}
                        <div className="text-hoverUnderlineColor font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center">
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
      <ContentSection4/>
    </>

  );
};

export default ContentSection3;
