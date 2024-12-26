"use client"; // This marks the file as a client-side component

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu Component
import Dropdown from "./DropDown"; // Import the Dropdown Component
import UserProfileMenu from "./UserProfileMenu";
import Header from "./Header";
import AddToCart from "./AddToCart";
import SubNavbar from "@/component/SubNavbar";
import Image from "next/image";
import MobileUserProfileMenu from "./content/MobileUserProfileMenu";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cardOpen, setCardOpen] = useState(null); // To track which card is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  // Function to handle the scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // You can adjust 100 to the height of your hero section
      setIsSticky(true); // Activate sticky navbar
    } else {
      setIsSticky(false); // Deactivate sticky navbar
    }
  };

  // Attach scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setCardOpen(null); // Close the associated card
      setActiveDropdown((prevDropdown) =>
        prevDropdown === dropdown ? null : dropdown
      );
    } else {
      setActiveDropdown(dropdown);
      setCardOpen(dropdown); // Open the card for the new dropdown
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the mobile menu state
  };

   // Close dropdowns on click outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target)
    ) {
      // Delay dropdown closing slightly
      setTimeout(() => {
        setActiveDropdown(null); // Close all dropdowns
      }, 100); // Adjust timing as needed
    }
  };

  // Add event listener for clicks
  document.addEventListener("mousedown", handleClickOutside);

  // Clean up the event listener when the component is unmounted
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [navbarRef]);

 


  return (
    <>
      <nav className="bg-blackBackground z-50 border-gray-200 dark:bg-blackBackground dark:border-gray-700 relative">
        <Header />
        <div className=" md:mx-auto md:container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 scale-x-96">
          <Link
            href="/"
            className="flex items-center w-14 space-x-2 sm:left-0  sm:w-10 tl:space-x-reverse"
          >
            <Image
              src="/Logo.png"
              width={100}  // Set width
                height={30} // Set height
              className="absolute  w-24 sm:ml-0 sm:w-20  md:w-24 lg:w-24  xl:w-40  "
              alt="Responsive Logo"
            />
          </Link>

          {/* Mobile Menu Toggle (visible only on medium screens and below) */}
          <div className="flex gap-5 relative">

          <div className=" block sm:hidden ">
      <AddToCart/>

      </div>
      <div className="block sm:hidden">
           <MobileUserProfileMenu/> 
      </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white" // 'md:hidden' hides on medium and larger screens
          >
            {/* Mobile menu icon */}
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  />
              </svg>
            ) : (
              <></>
            )}
          </button>    
          </div>
          {/* Navbar Items (hidden on small screens, visible on larger screens) */}
          <div className="w-full md:block md:w-auto mobile-nav-hidden">
            <ul
              className="hidden md:flex flex-col font-bold sm:text-xs text-xs p-4 md:p-0 mt-4 border  rounded-lg bg-blackBackground md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 
          md:border-0 md:bg-blackBackground dark:bg-gray-800 md:dark:bg-blackBackground dark:bg-blackBackground md:flex-wrap md:items-center md:space-y-0"
            >
              {/* Menu items go here */}
              <div
                className="flex flex-wrap items-center space-y-4 space-x-0 md:space-y-0 md:space-x-8"
                ref={navbarRef}
              >
                {/* Men's Health Dropdown */}
                <Dropdown
                  isDropdownOpen={activeDropdown === "men"}
                  setDropdownOpen={() => handleDropdownToggle("men")}
                  dropdownTitle="Men's Health"
                  links={[
                    { href: "/dashboard", label: "Condoms" },
                    { href: "/earnings", label: "Erectile Dysfunction" },
                    { href: "/sign-out", label: "Hair Loss" },
                    { href: "/sign-out", label: "Lube" },
                    { href: "/sign-out", label: "Pain Relief" },
                    { href: "/sign-out", label: "Premature Ejaculation" },
                  ]}
                  cardOpen={cardOpen}
                  setCardOpen={setCardOpen}
                  cardStyles="bg-black text-white p-4 rounded-lg"
                  position="absolute left-0 top-full mt-2 z-50"
                />
                {/* More dropdowns */}

                {/* Women's Health Dropdown */}
                <Dropdown
                  isDropdownOpen={activeDropdown === "women"}
                  setDropdownOpen={() => handleDropdownToggle("women")}
                  dropdownTitle="Women's Health"
                  links={[
                    { href: "/dashboard", label: "Cystitis" },
                    { href: "/earnings", label: "Contraceptive Pill" },
                    { href: "/sign-out", label: "Feminine Care" },
                    { href: "/sign-out", label: "Hair Loss" },
                    { href: "/sign-out", label: "Menopause" },
                    { href: "/sign-out", label: "Migraine" },
                  ]}
                  cardOpen={cardOpen}
                  setCardOpen={setCardOpen}
                  cardStyles="bg-black text-white p-4 rounded-lg"
                  position="absolute left-0 top-full mt-2 z-50"
                />

                {/* Respiratory & Digestive Dropdown */}
                <Dropdown
                  isDropdownOpen={activeDropdown === "respiratory"}
                  setDropdownOpen={() => handleDropdownToggle("respiratory")}
                  dropdownTitle="Respiratory & Digestive"
                  links={[
                    { href: "/dashboard", label: "Asthma" },
                    { href: "/earnings", label: "Allergies" },
                    { href: "/sign-out", label: "Cough" },
                    { href: "/sign-out", label: "Indigestion" },
                  ]}
                  cardOpen={cardOpen}
                  setCardOpen={setCardOpen}
                  cardStyles="bg-black text-white p-4 rounded-lg"
                  position="absolute left-0 top-full mt-2 z-50"
                />

                {/* General Health Dropdown */}
                <Dropdown
                  isDropdownOpen={activeDropdown === "general"}
                  setDropdownOpen={() => handleDropdownToggle("general")}
                  dropdownTitle="General Health"
                  links={[
                    { href: "/dashboard", label: "Asthma" },
                    { href: "/earnings", label: "Allergies" },
                    { href: "/sign-out", label: "Cough" },
                    { href: "/sign-out", label: "Indigestion" },
                  ]}
                  cardOpen={cardOpen}
                  setCardOpen={setCardOpen}
                  cardStyles="bg-black text-white p-4 rounded-lg"
                  position="absolute left-0 top-full mt-2 z-50"
                />
              </div>

              {/* AddToCart */}
              <div>
                <AddToCart />
              </div>

              {/* Profile Icon (UserProfileMenu) aligned to the right */}
              <div className="mt-4 md:mt-0 ml-auto flex items-center">
                <UserProfileMenu />
              </div>
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <MobileMenu
              mobileMenuOpen={isMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          )}
        </div>
      </nav>

      <div className="flex items-center justify-center relative z-30 ">
        <SubNavbar />
      </div>
    </>
  );
};

export default Navbar;
