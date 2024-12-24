import Link from "next/link";
import React from "react";
import "./style/Header.css";
import './style/Header.css'
const Header = () => {
  return ( 
     <div className="bg-hoverUnderlineColor">
       <div className="flex container mx-auto md:justify-between  bg-hoverUnderlineColor md:pl-2 md:pb-1 p-1 sm:ml-auto">
        {/* Phone and Email Section */}
        <div>
        <div className="phone-email-section sm:ml-3 text-nowrap gap-5 lg:gap-12 md:gap-10 sm:text-xs text-xs md:text-sm flex items-center justify-around  ">
          <div className="flex justify-center">
            <img
              src="/phone-icon.png"
              alt="Phone"
              className=" ml-1 mr-1 md:ml-0 mt-1 md:mr-2 sm:mt-1 object-contain logoImg sm:w-3 md:w-4 lg:w-5 w-3 "
            />
            <span className="text-white text  mt-1  ">Phone: +163--654123</span>
          </div>

          <div className="flex justify-center">
            <img
              src="/email-icon.png"
              alt="Email"
              className="mr-1 w-3 md:mr-2 mt-1 logoImg sm:w-3 object-contain  md:w-4  lg:w-5 w-3"
            />
            <span className="text-white text  mt-1">Email: David@gmial.com</span>
          </div>
        </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-section flex items-center md:pr-5 sm:space-x-4 space-x-1 sm:mr-0 mr-2 md:justify-around m-1 "> 
            <Link href="/">
              <img
                src="/insta-icon.png"
                alt="Instagram"
                className="w-3 md:w-4 mt-1 hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="/">
              <img
                src="/facebook-icon.png"
                alt="Facebook"
                className="w-3 md:w-4  mt-1  hover:scale-110 transition-transform"
              />
            </Link>
            <Link href="/">
              <img
                src="/twitter.icon.png"
                alt="Twitter"
                className="w-3 md:w-4  mt-1  hover:scale-110 transition-transform"
              />
            </Link> 
        </div>
      </div> 
     </div>
  );
};

export default Header;