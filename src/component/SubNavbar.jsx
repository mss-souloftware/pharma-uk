import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`container absolute transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "container w-[90%] sm:w-[40%] lg:w-[25%] xl:w-[15%] border-2 absolute mt-7 translate-y-0 opacity-100 border-solid border-black z-50  bg-black shadow-lg rounded-b-lg"
            : "-translate-y-full opacity-0 pointer-events-none "
        }`}
      >
        <div>
          <ul className={` flex justify-center space-x-12 p-2`}>
            <li className="relative font-semibold cursor-pointer text-white text-xs group">
              <Link href="/about" className="relative" onClick={handleClick}>
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative  font-semibold cursor-pointer text-white text-xs group">
              <Link href="/contact" className="relative" onClick={handleClick}>
                Contact Us
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative font-semibold cursor-pointer text-white text-xs group">
              <Link href="/faqs" className="relative" onClick={handleClick}>
                FAQ
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
            </li>
          
          </ul>
        </div>
      </div>

      <div
        className={`flex items-center justify-center absolute mt-5 bg-black w-10 rounded-b-lg`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "mt-16" : "mt-1"}`}
        >
          {isOpen ? (
            <Image
              src="/upper-arrow.png"
              width={20}
              height={20}
              alt=""
              className="w-5"
            />
          ) : (
            <Image
              src="/dropdown.png"
              width={20}
              height={20}
              alt="Dropdown"
              className="w-5"
            />
          )}
        </button>
      </div>
    </>
  );
};

export default SubNavbar;
