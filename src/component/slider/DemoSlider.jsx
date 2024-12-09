"use client"; // <===== REQUIRED

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DemoSlider = ({ data }) => {
  return (
    <section className="w-full h-full">
      <div className="h-full">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="h-full"
          >
            {data.map(({ id, image, tagline, title }) => (
              <SwiperSlide key={id} className="h-full">
                {/* Background Image with Transparent Shadow */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})`,
                  }}
                ></div>
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center px-4">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white tracking-wide">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white tracking-wider">
                      {title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
