import Link from "next/link";
import React from "react";
import "./style/Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-hoverUnderlineColor">
      <div className="flex container mx-auto md:justify-between bg-hoverUnderlineColor md:pl-2 md:pb-1 p-1 sm:ml-auto">
        {/* Phone and Email Section */}
        <div>
          <div className="phone-email-section sm:ml-3 text-nowrap gap-5 lg:gap-12 md:gap-10 sm:text-xs text-xs md:text-sm flex items-center justify-around">
            <div className="flex justify-center">
              <Image
                src="/phone-icon.png"
                alt="Phone"
                width={20}  // Set width
                height={20} // Set height
                className="ml-1 mr-1 md:ml-0 mt-1 md:mr-2 sm:mt-1 object-contain logoImg sm:w-3 md:w-4 lg:w-5 w-3"
              />
              <span className="text-white mt-1 text-xs sm:text-sm md:text-base lg:text-lg">
                Phone: +163--654123
              </span>
            </div>

            <div className="flex justify-center">
              <Image
                src="/email-icon.png"
                alt="Email"
                width={20}  // Set width
                height={20} // Set height
                className="mr-1 md:mr-2 mt-1 logoImg sm:w-3 object-contain md:w-4 lg:w-5 w-3"
              />
              <span className="text-white mt-1 text-xs sm:text-sm md:text-base lg:text-lg">
                Email: David@gmial.com
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-section flex items-center md:pr-5 sm:space-x-4 space-x-1 sm:mr-0 mr-2 md:justify-around m-1">
          <Link href="/">
            <Image
              src="/insta-icon.png"
              width={20}  // Set width
              height={20} // Set height
              alt="Instagram"
              className="w-3 md:w-4 mt-1 hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="/">
            <Image
              src="/facebook-icon.png"
              width={20}  // Set width
              height={20} // Set height
              alt="Facebook"
              className="w-3 md:w-4 mt-1 hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="/">
            <Image
              src="/twitter-icon.png"
              width={20}  // Set width
              height={20} // Set height
              alt="Twitter"
              className="w-3 md:w-4 mt-1 hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
