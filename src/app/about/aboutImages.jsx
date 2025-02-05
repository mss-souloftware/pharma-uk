import Image from "next/image";
import React from "react";

const AboutImages = () => {
  return (
    <div className="relative mx-auto grid grid-cols-1 md:grid-cols-[60%,40%] xl:grid-cols-[70%,30%] gap-4 sm:gap-8 lg:gap-12 max-w-8xl px-4 mt-10 sm:px-6 ">
      {/* First Grid Section */}
      <div className="flex flex-col gap-4">
        <Image
          src="/about/image1.svg"
          alt="image1"
          height={400}
          width={400}
          className="w-full object-cover rounded-xl  transition-transform duration-200 hover:scale-105"
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4">
          <Image
            src="/about/image2.svg"
            alt="image2"
            height={400}
            width={400}
            className="w-full md:w-[60%] lg:w-[70%] h-auto object-cover rounded-xl transition-transform duration-200 hover:scale-105"
          />
          <div className="w-full sm:w-[80%] md:w-[40%] lg:w-[30%] h-auto border rounded-xl shadow-lg bg-gradient-to-t from-hoverUnderlineColor to-[#ff7d8c] flex items-center p-6">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              We use advanced technology to offer a safer, more affordable healthcare experience, with secure, discreet, and convenient services, all from our registered pharmacy in Central London.
            </p>
          </div>
        </div>
      </div>

      {/* Second Grid Section - Properly Spaced */}
      <div className="flex justify-center items-center h-full">
        <Image
          src="/about/image3.svg"
          alt="image3"
          height={400}
          width={400}
          className="w-full md:w-auto lg:h-full object-cover rounded-xl transition-transform duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutImages;