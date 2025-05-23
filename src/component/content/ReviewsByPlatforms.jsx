import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Reviews from "@/component/content/Reviews"; 

const ReviewsByPlatforms = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust this breakpoint as needed
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="container mx-auto py-12 mt-20 bg-[#30BFAC] rounded-lg ">
        {/* Title */}
        <div className="block mx-auto text-center text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-8 mb-10 sm:mb-0 ">
          <h4 className="font-extrabold  text-white inline-block ">
          More Than{" "}
          <span className="text-white">207,891 </span>{" "} Reviews
          </h4>
        </div>
      
         {/* Conditionally render Swiper or Grid */}
         {isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Show one slide at a time
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
          >
            {/* Swiper Carousel */}
            <SwiperSlide>
              <div className="   w-full sm:w-48 md:w-60 lg:w-[10vw] rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                {/* Google Text */}
                <h5 className="text-sm font-normal text-center mb-2">
                  <span style={{ color: "#4285F4" }}>𝖦</span>
                  𝗈
                  <span style={{ color: "#34A853" }}>𝗈</span>
                  <span style={{ color: "#FBBC05" }}>𝗀</span>
                  <span style={{ color: "#EA4335" }}>𝗅</span>
                  <span style={{ color: "#4285F4" }}>𝖾</span>
                </h5>

                {/* Rating Stars */}
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src="/rankIcon.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-6 "
                    />
                  ))}
                </div>

                {/* Rating Text */}
                <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                  <span className="text-xs sm:text-sm ">
                    Rating 4.9/5
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Other Slide */}
              <div className="bg-transparent w-full sm:w-48 md:w-60 lg:w-[10vw] rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                {/* Trust Pilot Text */}
                <h5 className="text-sm font-normal text-center mb-2 flex items-center justify-center">
                  Trust <span className="text-[#50C878]">Pilot</span>
                </h5>

                {/* Trust Star Image */}
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src="/trustPilotIcon.png"
                      width={20}
                      height={20}
                      alt=""
                      className="w-6 "
                    />
                  ))}
                </div>

                {/* Rating Text */}
                <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                  <span className="text-xs sm:text-sm  text-[#50C878]">
                    Score 4.9
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Third Slide */}
              <div className="bg-white w-full sm:w-48 md:w-60 lg:w-[10vw] rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 col-span-1">
                {/* Feefo Text */}
                <h5 className="text-sm font-normal text-center mb-2 flex items-center justify-center">
                  <span style={{ color: "#000" }}>feefo</span>
                </h5>

                {/* Feefo Star Image */}
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
                  <span className="text-xs sm:text-sm ">
                    Rating 4.9/5
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) :(
        <>
                {/* Full-width 3-column layout */}
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-44 bg-white p-8 rounded-lg w-full sm:w-11/12 lg:w-10/12">
            <div className="bg-white w-full sm:w-48 md:w-60 lg:w-[10vw] rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
              {/* Google Text */}
              <h4 className=" text-2xl font-normal text-center mb-2">
                <span style={{ color: "#4285F4" }}>𝖦</span>
                𝗈
                <span style={{ color: "#34A853" }}>𝗈</span>
                <span style={{ color: "#FBBC05" }}>𝗀</span>
                <span style={{ color: "#EA4335" }}>𝗅</span>
                <span style={{ color: "#4285F4" }}>𝖾</span>
              </h4>

              {/* Rating Stars */}
              <div className="flex justify-center items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/rankIcon.png"
                    width={20}
                    height={20}
                    alt=""
                    className="w-6 sm:w-8 md:w-10 "
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-sm">
                  Rating 4.9/5
                </span>
              </div>
            </div>

            <div className="bg-transparent w-full sm:w-48 md:w-60 lg:w-[10vw]  rounded-lg h-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
              {/* Trust Pilot Text */}
              <h2 className="  text-2xl font-normal text-center mb-2 flex items-center justify-center">
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
                    className="w-6 sm:w-8 md:w-10 "
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-sm text-[#50C878]">
                  Score 4.9
                </span>
              </div>
            </div>

            <div className="bg-white w-full sm:w-48 md:w-60 lg:w-[10vw]  rounded-lg h-auto flex flex-col justify-center  items-center p-4 sm:p-6 md:p-8 col-span-1">
              {/* feefo Text */}
              <h2 className=" text-2xl font-normal text-center mb-2 flex items-center justify-center">
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
                    className="w-6 sm:w-8 md:w-10  "
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div className="w-full sm:w-20 md:w-24 lg:w-28 mb-4 flex justify-center items-center">
                <span className="text-sm">
                  Rating 4.9/5
                </span>
              </div>
            </div>
          </div>
        </div>
        </>

        )}
      </div>
      {/* Content Section 4 */}
      <div>
        <Reviews />
      </div> 
    </>
  );
};

export default ReviewsByPlatforms;
