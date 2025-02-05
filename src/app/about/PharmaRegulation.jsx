import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const PharmaRegulation = () => {
  const pharmacists = [
    {
      name: "Dr Munawar Iqbal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gphcNumber: "2034871",
      image: "/about/pharmaDoctor/doctor1.svg"
    },
    {
      name: "Anika Jagot",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gphcNumber: "2078699",
      image: "/about/pharmaDoctor/doctor2.svg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-6xl font-semibold leading-tight lg:leading-[91px] text-center tracking-wider">Pharmacy Regulation</h1>
      
      {/* Registration Info */}
      <div className="text-center mb-8 space-y-2">
        <p className="[word-spacing:0.1em] text-lg" style={{lineHeight:"44.6px"}}>
          The pharmacy is registered with the General Pharmaceutical Council with number 9012030.
        </p>
        <p className="[word-spacing:0.1em] text-lg" style={{lineHeight:"44.6px"}}>
          The superintendent pharmacist for Pharmica is: Ana Carolina Osório De Faria Goncalves GPhC Number: 2088635
        </p>
      </div>

      {/* Pharmacists Carousel for Mobile */}
      <div className="block md:hidden mb-8">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }} 
        >
          {pharmacists.map((pharmacist, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md">
                <Image
                  src={pharmacist.image}
                  alt={pharmacist.name}
                  className="w-52 h-[15rem] rounded-lg object-cover"
                  height={300}
                  width={300}
                />
                <h3 className="text-xl font-semibold my-3" style={{letterSpacing: '1%'}}>{pharmacist.name}</h3>
                <p className="text-sm mb-2" style={{lineHeight: '30.91px'}}>{pharmacist.description}</p>
                <p className="text-hoverUnderlineColor text-sm font-semibold">
                  (GPhC Number: {pharmacist.gphcNumber})
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pharmacists Grid for Desktop */}
      <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {pharmacists.map((pharmacist, index) => (
          <div 
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white rounded-lg p-6 space-y-4 lg:space-y-0 lg:space-x-8 shadow-md"
          >
            <div className="flex-shrink-0">
              <Image
                src={pharmacist.image}
                alt={pharmacist.name}
                className="w-52 h-[15rem] rounded-lg object-cover"
                height={200}
                width={200}
              />
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2" style={{letterSpacing: '1%'}}>{pharmacist.name}</h3>
              <p className="text-sm mb-2" style={{lineHeight: '30.91px'}}>{pharmacist.description}</p>
              <p className="text-hoverUnderlineColor text-sm font-semibold">
                (GPhC Number: {pharmacist.gphcNumber})
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Registration Section */}
      <div className="border rounded-xl shadow-md bg-gradient-to-t from-hoverUnderlineColor to-[#ff7d8c] p-3 sm:p-6 text-lg lg:text-xl  flex flex-col md:flex-row items-center justify-between text-white">
        <p className="text-center md:text-left mb-4 md:mb-0 ">
          For more information or to view registration details visit the
          General Pharmaceutical Council&apos;s website. Responsible Pharmacist:
        </p>
        <div className="rounded">
          <Image
            src="/about/registeredPharma 1.svg"
            alt="Registration Badge"
            className="h-10"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
}

export default PharmaRegulation;
