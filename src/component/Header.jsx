"use client"; 
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style/Header.css";
import Image from "next/image";
import SubNavbar from "./SubNavbar";

const Header = () => {
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [phoneRef.current, emailRef.current],
      { opacity: 0, y: -20 }, // Initial State: Invisible + Moved Down
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.3 } // Smooth Animation
    );
  }, []);

  return (
    <div className="bg-[#1AB8A3]     bg-[#30BFAC] ">
      <div className="flex container bg-[#30BFAC] mx-auto md:justify-between bg-[#1AB8A3] md:pl-2 md:pb-1 p-1 sm:ml-auto">
        {/* Phone and Email Section */}
        <div>
          <div className="phone-email-section sm:ml-3 text-nowrap gap-5 lg:gap-8 md:gap-10 sm:text-xs text-xs md:text-sm flex items-center justify-around">
            {/* Phone Section */}
            <div ref={phoneRef} className="flex justify-center">
              <Image
                src="/phoneicon.png"
                alt="Phone"
                width={15}
                height={5}
                className="text-[#000000] font-medium"
              />
              <span className="  text-[#000000] font-bold mt-1  text-xs sm:text-sm   ">
                Phone: +163--654123
              </span>
            </div>

            {/* Email Section */}
            <div ref={emailRef} className="flex justify-center">
              <Image
                src="/messge.png"
                alt="Email"
                width={20}
                height={20}
                className="mr-1  mt-1 sm:w-3 object-contain md:w-4 lg:w-4 w-3"
              />
              <span className="text-[#000000] mt-1 font-bold text-xs sm:text-sm  ">
                Email: David@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* SubNavbar */}
        <div className="hidden sm:block">
          <SubNavbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
