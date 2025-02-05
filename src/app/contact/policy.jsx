import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Policy = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile screens
    };

    handleResize(); // Initialize state on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const policies = [
    {
      title: "Policy",
      description:
        "Our policy ensures that all your data is handled securely and in accordance with legal requirements. We aim to provide the best services while safeguarding your privacy.",
      img: "/contact/policyImg1.svg",
    },
    {
      title: "Privacy Assurance",
      description:
        "We guarantee that your personal information will be kept safe and used only for the intended purposes. Your privacy is our priority.",
      img: "/contact/policyImg2.svg",
    },
    {
      title: "Complaints",
      description:
        "If you have any complaints or concerns, please reach out to us. We are committed to resolving issues in a timely and efficient manner.",
      img: "/contact/policyImg2.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold  mb-8">
          Our Policies
        </h1>
        <p className="text-base md:text-lg text-black  ">
          Here you can find the most important information regarding our
          policies and services.
        </p>
      </div>

      {/* Conditionally Render Carousel or Grid */}
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000, // Auto-scroll delay in milliseconds
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {policies.map((policy, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl lg:text-3xl xl:text-3xl md:text-2xl font-normal mb-4 text-gray-800">
                  {policy.title}
                </h2>
                <p className="text-sm md:text-base text-gray-400 font-light">
                  {policy.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1419px] mx-auto p-4">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Image Container */}
            <div className="w-full">
              <Image
                src={policy.img}
                alt="policy"
                height={200}
                width={200}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
      
            {/* Text Container */}
            <div className="text-left mt-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-2">
                {policy.title}
              </h2>
              <p className="text-sm md:text-base text-gray-800 font-light">
                {policy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      )}
    </div>
  );
};

export default Policy;
