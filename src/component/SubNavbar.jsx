import Link from "next/link";
import React, { useState } from "react";

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`container absolute transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "container w-[70%] sm:w-[30%] lg:w-[25%] xl:w-[15%] border-2 absolute mt-7 translate-y-0 opacity-100 border-solid border-black z-50  bg-black shadow-lg rounded-b-lg"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <ul className="flex justify-center space-x-12 p-2">
          <li className="relative text-lg font-semibold cursor-pointer text-white text-xs group">
        <Link href="/about" className="relative">
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>

            <li className="relative text-lg font-semibold cursor-pointer text-white text-xs group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative text-lg font-semibold cursor-pointer text-white text-xs group">
              FAQ
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
            <img src="/upper-arrow.png" alt="" className="w-5" />
          ) : (
            <img src="/dropdown.png" alt="Dropdown" className="w-5" />
          )}
        </button>
      </div>
    </>
  );
};

export default SubNavbar;
