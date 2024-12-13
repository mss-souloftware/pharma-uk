"use client"; // Ensure that this component is rendered client-side

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

// Import necessary Swiper modules from 'swiper'
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';

// Import custom CSS for styling
import './Slider.css';

const Content = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensures the code is run on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }

  return (
    <div className="w-full mt-32">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Zoom]} // Add necessary modules
        spaceBetween={10}
        slidesPerView={3} // Adjust the number of slides per view
        autoplay={{
          delay: 0, // No delay, continuous autoplay
        }}
        loop={true} // Infinite loop
        freeMode={true}
        speed={18000} // Speed of sliding
        navigation={true} // Enable navigation buttons
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        zoom={true} // Enable zoom
        className="swiper-container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Testosterone Cypionate
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Finasteride
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Tadalafil
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Prostate Health Support
          </div>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            L-citrulline Supplement
          </div>
        </SwiperSlide>
        {/* Slide 6 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            DHEA
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Ginseng Supplement
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Zinc for Men
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Saw Palmetto
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Multivitamins for Men
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Men’s Health Formula
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Erectile Dysfunction Supplement
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Omega-3 for Men
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Prenatal Vitamins
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Estrogen Therapy
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Progesterone Supplements
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Omega-3 for Women
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Iron Supplement for Women
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Folate Supplements
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Birth Control Pills
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Cranberry Extract
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Magnesium for Women
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Albuterol
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Salmeterol
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Dextromethorphan
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Nasal Decongestant Spray
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Guaifenesin
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Flonase
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Daily Multivitamins
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Coenzyme Q10
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Turmeric Extract
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            L-Theanine
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Biotin for Skin and Nails
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Vitamin C Serum
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Hydrating Serum
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold  [word-spacing:-20px]">
            Aloe Vera Gel
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Collagen Peptides for Skin
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Antioxidant Skin Cream
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full text-gray-300 text-4xl font-extrabold">
            Zinc Oxide Cream
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Content;
