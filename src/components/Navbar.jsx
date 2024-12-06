"use client"; // Add this to mark the file as a client component

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion

export default function Navbar() {
  const [isFirstDropDownHovered, setIsFirstDropDownHovered] = useState(false);
  const [isSecondDropDownHovered, setIsSecondDropDownHovered] = useState(false);
  const [isThirdDropDownHovered, setThirdDropDownHovered] = useState(false);
  const [isForthDropDownHovered, setIsForthDropDownHovered] = useState(false);
  const [isFifthDropDownHovered, setIsFifthDropDownHovered] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(false);
  const [bucket, setBucket] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  // const [isMerchHovered, setIsMerchHovered] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  // Framer-motion animation for the hamburger and cross icon
  const iconVariants = {
    open: { rotate: 90, transition: { duration: 0.3 } },
    closed: { rotate: 0, transition: { duration: 0.3 } },
  };

  // Framer-motion animation for the dropdown menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scaleY: 1, // Slight scaling effect for opening
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: -20, // Small movement for closing
      scaleY: 0.9, // Add slight shrink effect on close
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  // Menu Bar
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setIsOpen(!isOpen);
  };

  // Navbar Mens Health Hover

  const menHealthHoverOpen = () => {
    setIsFirstDropDownHovered(true);
  };

  const menHealthHoverClose = () => {
    setIsFirstDropDownHovered(false);
  };

  // Navbar Womens Health Hover
  const womenHealthHoverOpen = () => {
    setIsSecondDropDownHovered(true);
  };

  const womenHealthHoverClose = () => {
    setIsSecondDropDownHovered(false);
  };

  // General Health
  const generalHealthHoverOpen = () => {
    setThirdDropDownHovered(true);
  };

  const generalHealthHoverClose = () => {
    setThirdDropDownHovered(false);
  };

  // Respiratory & Digestive
  const resporatoryHoverOpen = () => {
    setIsForthDropDownHovered(true);
  };

  const resporatoryHoverClose = () => {
    setIsForthDropDownHovered(false);
  };

  // Skin Care
  const skinCareHoveredOpen = () => {
    setIsFifthDropDownHovered(true);
  };

  const skinCareHoveredClose = () => {
    setIsFifthDropDownHovered(false);
  };

  // User Profile Hover
  const handleMouseEnter = () => {
    setMenuActive(true);
  };
  const handleMouseLeave = () => {
    setMenuActive(false);
  };

  return (
    <>
      <nav className="mx-auto max-w-screen-xl px-6 py-3 navbar-bg ">
        <div className="flex items-center justify-between text-blue-gray-900 relative navbar-bg">
          {/* Menu icon on the left side for small screens */}
          <button
  className="sm:block md:block lg:block p-2 text-lg sm:text-xl absolute left-0 text-white"
  onClick={() => setOpenNav(!openNav)}
>
<motion.div>
    {openNav ? (
      <FaTimes className="w-8 h-8 text-white mt-4 nav-close" />
    ) : (
      <FaBars className="w-8 h-8 text-white mt-4 nav-menu" />
    )}
  </motion.div>
          </button>

          {/* User Icon */}
          <button
            className="lg:hidden p-2 text-lg sm:text-xl absolute right-12"
            onClick={() => setUser(!user)}
          >
            {user ? (
              <FaTimes className="w-8 h-8 text-white nav-user relative right-8" />
            ) : (
              <FaUser className="w-8 h-8 text-white nav-user relative right-8 mt-2" />
            )}
          </button>

          {/* Bucket Icon */}
          <button
            className="lg:hidden p-2 text-lg sm:text-xl absolute right-14"
            onClick={() => setBucket(!bucket)}
          >
            {bucket ? (
              <FaTimes className="w-8 h-8 text-white nav-bucket relative left-12" />
            ) : (
              <FaShoppingCart className="w-8 h-8 text-white nav-bucket relative left-12 mt-2 " />
            )}
          </button>

          {/* Logo / Branding */}
          <Link
            href="/"
            id="aLogo"
            className="flex items-center justify-start w-auto mt-4 logo-container"
          >
            <img
              src="/medical-logo.jpg"
              alt="logo"
              className="w-12 h-12 xs:w-8 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg mr-4 nav-logo"
            />
            <div className="text-left mr-6">
              <h1 className="xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-teal-800 navbar-maintext">
                Pharmica
              </h1>
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-thin cursor-pointer text-gray-600 navbar-subtext">
                Making pharmacy easy
              </h3>
            </div>
          </Link>

          {/* Links for larger screens */}
          <div
            id="pPhone"
            className="bg-teal-600 hidden lg:block col-lg-5 col-md-5 col-sm-5 sm:max-w-fit sm:justify-self-end tw-overflow-x-hidden mb-0 mt-[-4.7rem] w-[380px] h-[35px] border rounded-b-lg"
          >
            <div className="flex flex-wrap justify-end items-center px-4 py-2 text-sm font-semibold space-x-4 w-full sm:space-x-6 sm:justify-center">
              <ul className="flex flex-wrap space-x-4 sm:space-x-6">
                <li>
                  <Link href="/">
                    <span className="text-white hover:underline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-white hover:underline">About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-white hover:underline">Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="text-white hover:underline">FAQs</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[380px] p-4 text-center border-t mt-[0.5rem] rounded-b-lg">
              <ul className="flex justify-center font-semibold space-x-8 text-gray-600">
                <li className="flex items-center space-x-4">
                  <Link href="/reviews">
                    <span className="hover:underline flex items-center">
                      <img src="/star.png" className="h-[18px] mr-2" />
                      <span>Reviews</span>
                    </span>
                  </Link>
                  <Link href="/loyalty">
                    <span className="hover:underline flex items-center">
                      <img src="/diamond.png" className="h-[18px] mr-2" />
                      <span>Loyalty</span>
                    </span>
                  </Link>
                  <Link href="/delivery">
                    <span className="hover:underline flex items-center">
                      <img
                        src="/delivery-truck.png"
                        className="h-[18px] mr-2"
                      />
                      <span>Delivery</span>
                    </span>
                  </Link>
                  <Link href="/merch">
                    <span className="hover:underline flex items-center">
                      <img src="/tshirt.png" className="h-[18px] mr-2" />
                      <span>Merch</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hamburger menu for smaller screens */}
        {openNav && (
          <motion.div
            className="lg:hidden absolute top-[7.5rem] left-0 right-0 bg-gray-200 py-4 shadow-lg shadow-gray-800 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Home Section */}
            <section className="home-section mb-4 px-6 text-teal-600">
              <h2 className="text-2xl font-semibold text-teal-600 text-center mb-4">
                Home
              </h2>
              <ul className="flex flex-col items-center gap-4 text-teal-600">
                {/* Men's Health */}
                <li className="w-full">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer py-2 hover:text-teal-900"
                    onClick={() => toggleMenu("mensHealth")}
                  >
                    <span className="block text-center hover:text-blue-500 py-2">
                      Mens Health
                    </span>
                    {isOpen ? (
                      <FaChevronUp className="text-teal-600" />
                    ) : (
                      <FaChevronDown className="text-teal-600" />
                    )}
                  </motion.div>

                  {activeMenu === "mensHealth" && (
                    <motion.ul
                      className="flex flex-col items-center gap-4 text-teal-600"
                      variants={menuVariants}
                      initial="closed"
                      animate={activeMenu === "mensHealth" ? "open" : "closed"}
                      exit="closed"
                    >
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Condoms
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Erectile Dysfunction
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Hair Loss
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Lube
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Pain Relief
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Premature Ejaculation
                          </span>
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </li>

                {/* Women's Health */}
                <li className="w-full">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer py-2 hover:text-blue-500"
                    onClick={() => toggleMenu("womensHealth")}
                  >
                    <span className="block text-center hover:text-blue-500 py-2">
                      Women's Health
                    </span>
                    <FaChevronDown />
                  </motion.div>

                  {activeMenu === "womensHealth" && (
                    <motion.ul
                      className="flex flex-col items-center gap-4 text-teal-600"
                      variants={menuVariants}
                      initial="closed"
                      animate={
                        activeMenu === "womensHealth" ? "open" : "closed"
                      }
                      exit="closed"
                    >
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Cystitis
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Contraceptive Pill
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Feminine Care
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Hair Loss
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Menopause
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Migraine
                          </span>
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </li>

                {/* General Health */}
                <li className="w-full">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer py-2 hover:text-teal-900"
                    onClick={() => toggleMenu("generalHealth")} // Toggle the correct menu
                  >
                    <span className="block text-center hover:text-blue-500 py-2">
                      General Health
                    </span>
                    <FaChevronDown />
                  </motion.div>
                  {activeMenu === "generalHealth" && (
                    <motion.ul
                      className="flex flex-col items-center gap-4 text-teal-600"
                      variants={menuVariants}
                      initial="closed"
                      animate={
                        activeMenu === "generalHealth" ? "open" : "closed"
                      }
                      exit="closed"
                    >
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Acid Reflux
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Antifungal
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            CBD
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Cold & Flu
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Cold Sore
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Diabetes
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Ear Care
                          </span>
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </li>

                {/* Respiratory & Digestive */}
                <li className="w-full">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer py-2 hover:text-teal-900"
                    onClick={() => toggleMenu("Respiratory & Digestive")} // Toggle the correct menu
                  >
                    <span className="block text-center hover:text-blue-500 py-2">
                      Respiratory & Digestive
                    </span>
                    <FaChevronDown />
                  </motion.div>
                  {activeMenu === "Respiratory & Digestive" && (
                    <motion.ul
                      className="flex flex-col items-center gap-4 text-teal-600"
                      variants={menuVariants}
                      initial="closed"
                      animate={
                        activeMenu === "Respiratory & Digestive"
                          ? "open"
                          : "closed"
                      }
                      exit="closed"
                    >
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Asthma
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Hay Fever
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Stop Smoking
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Acid Reflux
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Constipation
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Diarrhoea
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Threadworm
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Lactose Intolerance
                          </span>
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </li>

                {/* Skin Care */}
                <li className="w-full">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer py-2 hover:text-teal-900"
                    onClick={() => toggleMenu("skinCare")} // Toggle the correct menu
                  >
                    <span className="block text-center hover:text-blue-500 py-2">
                      Skin Care
                    </span>
                    <FaChevronDown />
                  </motion.div>
                  {activeMenu === "skinCare" && (
                    <motion.ul
                      className="flex flex-col items-center gap-4 text-teal-600"
                      variants={menuVariants}
                      initial="closed"
                      animate={activeMenu === "skinCare" ? "open" : "closed"}
                      exit="closed"
                    >
                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Acne
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Eczema Cream
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Hand Cream
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Moisturisers
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <span className="block text-center hover:text-blue-500 py-2">
                            Sun Cream
                          </span>
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </li>
              </ul>
            </section>
          </motion.div>
        )}
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-white text-blue-gray-900 relative bottom-nav">
        <div className=" lg:block bg-teal-600 w-full mt-4 rounded-b-lg ">
          <ul className="flex items-center justify-center space-x-10 text-white py-3">
            {/* Mens's Health  Menu with Dropdown */}
            <li
              className="relative group"
              onMouseEnter={menHealthHoverOpen}
              onMouseLeave={menHealthHoverClose}
            >
              {/* Dropdown Trigger */}
              <div className="flex items-center cursor-pointer hover:text-white">
                <span>Men's Health</span>
                {isFirstDropDownHovered ? (
                  <FaChevronUp className="ml-2 text-white" />
                ) : (
                  <FaChevronDown className="ml-2 text-white" />
                )}
              </div>

              {/* Dropdown Menu */}
              <motion.ul
                className={`absolute left-0 w-[200%] mt-8 top-full bg-white shadow-xl  transition-all duration-500 ease-in-out ${
                  isFirstDropDownHovered
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                initial="closed"
                animate={isFirstDropDownHovered ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="block px-4 py-2 text-teal-600  ">
                      Condoms
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="block px-4 py-2 text-teal-600 ">
                      Erectile Dysfunction
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="block px-4 py-2 text-teal-600">
                      Hair Loss
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="block px-4 py-2 text-teal-600">Lube</span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="block px-4 py-2 text-teal-600">
                      Pain Relief
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="block px-4 py-2 text-teal-600">
                      Premature Ejaculation
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </motion.ul>
            </li>

            {/* Womens Health with Dropdown */}
            <li
              className="relative group"
              onMouseEnter={womenHealthHoverOpen}
              onMouseLeave={womenHealthHoverClose}
            >
              <div className="flex items-center cursor-pointer hover:text-white">
                <span>Women's Health</span>
                {isSecondDropDownHovered ? (
                  <FaChevronUp className="ml-2 text-white" />
                ) : (
                  <FaChevronDown className="ml-2 text-white" />
                )}
              </div>
              {/* Dropdown Menu */}
              <motion.ul
                className={`absolute w-[200%] mt-6 left-0 top-full  shadow-xl   transition-all duration-500 ease-in-out ${
                  isSecondDropDownHovered
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                initial="closed"
                animate={isSecondDropDownHovered ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4 py-1">
                      Cystitis
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Contraceptive Pill
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Feminine Care
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300 py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Hair Loss
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1 ">
                      Menopause
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Migraine
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                {/* Other items */}
              </motion.ul>
            </li>

            {/* Gemeral Health Menu with Dropdown */}
            <li
              className="relative group"
              onMouseEnter={generalHealthHoverOpen}
              onMouseLeave={generalHealthHoverClose}
            >
              <div className="flex items-center cursor-pointer hover:text-white">
                <span>General Health</span>
                {isThirdDropDownHovered ? (
                  <FaChevronUp className="ml-2 text-white" />
                ) : (
                  <FaChevronDown className="ml-2 text-white" />
                )}
              </div>
              {/* Dropdown Menu */}
              <motion.ul
                className={`absolute w-[200%] mt-6 left-0 top-full  shadow-xl  transition-all duration-500 ease-in-out ${
                  isThirdDropDownHovered
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                initial="closed"
                animate={isThirdDropDownHovered ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3  ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600  px-4  py-1">
                      Acid Reflux
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600  px-4  py-1">
                      Antifungal
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3  ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600  px-4  py-1">
                      CBD
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600  px-4  py-1">
                      Cold & Flu
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3  ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600  px-4  py-1">
                      Cold Sore
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3  ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600  px-4  py-1">
                      Diabetes
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Ear Care
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </motion.ul>
            </li>

            {/* Respiratory & Digestive with Dropdown */}
            <li
              className="relative group"
              onMouseEnter={resporatoryHoverOpen}
              onMouseLeave={resporatoryHoverClose}
            >
              <div className="flex items-center cursor-pointer hover:text-white">
                <span> Respiratory & Digestive</span>
                {isForthDropDownHovered ? (
                  <FaChevronUp className="ml-2 text-white" />
                ) : (
                  <FaChevronDown className="ml-2 text-white" />
                )}
              </div>
              {/* Dropdown Menu */}
              <motion.ul
                className={`absolute w-[200%] mt-6 left-0 top-full  shadow-xl transition-all duration-500 ease-in-out ${
                  isForthDropDownHovered
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                initial="closed"
                animate={isForthDropDownHovered ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Asthma
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Hay Fever
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Stop Smoking
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Acid Reflux
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Constipation
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Diarrhoea
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Threadworm
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Lactose Intolerance
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </motion.ul>
            </li>

            {/* Skin Care */}
            <li
              className="relative group"
              onMouseEnter={skinCareHoveredOpen}
              onMouseLeave={skinCareHoveredClose}
            >
              <div className="flex items-center cursor-pointer hover:text-white">
                <span>Skin Care</span>
                {isFifthDropDownHovered ? (
                  <FaChevronUp className="ml-2 text-white" />
                ) : (
                  <FaChevronDown className="ml-2 text-white" />
                )}
              </div>
              {/* Dropdown Menu */}
              <motion.ul
                className={`absolute w-[200%] mt-6 left-0 top-full shadow-xl  transition-all duration-500 ease-in-out ${
                  isFifthDropDownHovered
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                initial="closed"
                animate={isFifthDropDownHovered ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Acne
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Eczema Cream
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Hand Cream
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Moisturisers
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>

                <li className="relative transition-transform duration-300 hover:bg-gray-300  py-3 ">
                  <Link href="/">
                    <span className="flex items-center cursor-pointer text-teal-600 px-4  py-1">
                      Sun Cream
                    </span>
                  </Link>
                  <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </motion.ul>
            </li>

            {/* User Profile */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Profile Icon */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden cursor-pointer">
                <FaUser className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100" />
              </div>

              {/* Profile Menu */}
              <div
                className={`absolute left-0  w-80 p-4 bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform ${
                  menuActive ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                style={{ top: "80px" }} // Adjust top position as needed
              >
                {/* <div className="absolute top-[-5px] right-[0px] w-5 h-5 bg-white  transform"></div> */}
                <h3 className="text-center text-xl font-medium text-gray-700 pb-4">
                  Profile
                </h3>
                <ul>
                  <motion.li
                    className="relative flex items-center py-4 border-t border-gray-100 hover:bg-gray-300 hover:text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Adds scale effect on hover
                    transition={{ duration: 0.3 }} // Duration for the hover transition
                  >
                    <span className="text-gray-700 text-base">My Profile</span>
                    <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                  </motion.li>
                  <motion.li
                    className="relative flex items-center py-4 border-t border-gray-100 hover:bg-gray-300 hover:text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Adds scale effect on hover
                    transition={{ duration: 0.3 }} // Duration for the hover transition
                  >
                    <span className="text-gray-700 text-base">
                      Edit Profile
                    </span>
                    <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                  </motion.li>
                  <motion.li
                    className="relative flex items-center py-4 border-t border-gray-100 hover:bg-gray-300 hover:text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Adds scale effect on hover
                    transition={{ duration: 0.3 }} // Duration for the hover transition
                  >
                    <span className="text-gray-700 text-base">Inbox</span>
                    <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                  </motion.li>
                  <motion.li
                    className="relative flex items-center py-4 border-t border-gray-100 hover:bg-gray-300 hover:text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Adds scale effect on hover
                    transition={{ duration: 0.3 }} // Duration for the hover transition
                  >
                    <span className="text-gray-700 text-base">Register</span>
                    <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                  </motion.li>
                  <motion.li
                    className="relative flex items-center py-4 border-t border-gray-100 hover:bg-gray-300 hover:text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }} // Adds scale effect on hover
                    transition={{ duration: 0.3 }} // Duration for the hover transition
                  >
                    <span className="text-gray-700 text-base">Logout</span>
                    <div className="bg-teal-500 h-[2px] w-0 absolute bottom-0 left-0 right-0 group-hover:w-full transition-all duration-500"></div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
