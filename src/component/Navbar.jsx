"use client"; // This marks the file as a client-side component
import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu Component
import Dropdown from "./DropDown"; // Import the Dropdown Component
import UserProfileMenu from "./UserProfileMenu";
import Header from "./Header";
import Image from "next/image";
import MobileUserProfileMenu from "./content/MobileUserProfileMenu";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "@/app/cart/feature/contextProvider";
import SubNavbar from "./SubNavbar";
import gsap from "gsap";
import axios from "axios";
import api from "@/config/axios"

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cardOpen, setCardOpen] = useState(null); // To track which card is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const [navbarItems, setNavbarItems] = useState([]);

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.get("/products/categories");
        // console.log("Fetched Category: Start");
        // console.log("Fetched Category:", response.data.data);
        setCategory(response.data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Category:", error);
        setLoading(false);
      }
    };
    fetchCategory();
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

  const handleNavItem = async () => {
    try {
      const response = await axios.get("/data.json"); // Ensure data.json is accessible
      setNavbarItems(response.data.categories || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };


  // Close dropdowns on click outside
  useEffect(() => {
    handleNavItem();
    gsap.fromTo(
      [navbarRef.current, logoRef.current],
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
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
        <div className="md:mx-auto md:container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 scale-x-96">
          <Link
            href="/"
            className="flex items-center w-14 space-x-2 sm:left-0 sm:w-10 tl:space-x-reverse "
          >
            <Image
              ref={logoRef}
              src="/footerLogo1.svg"
              width={400} // Make sure this is the original, high-resolution size of your logo
              height={120}
              className="absolute w-24 sm:w-20 md:w-24 lg:w-24 xl:w-40"
              alt="Responsive Logo"
              style={{ imageRendering: "crisp-edges" }}
              quality={100}
              priority={true}
            />
          </Link>

          {/* Mobile Menu Toggle (visible only on medium screens and below) */}
          <div className="flex gap-5 relative">
            {/* AddToCart */}
            <div className="block sm:hidden">
              <Link href="/cart" className="flex items-center ">
                <FaCartPlus className="text-white w-5 h-5" />
                <span className="ml-2 text-white">
                  <span className="text-hoverUnderlineColor">
                    {cart.products.length || 0}
                  </span>
                </span>
              </Link>
            </div>
            <div className="block sm:hidden">
              <MobileUserProfileMenu />
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
              className="hidden md:flex flex-col font-normal text-xs p-4 md:p-0 mt-4 border rounded-lg bg-blackBackground md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0
              md:border-0 md:bg-blackBackground md:dark:bg-blackBackground dark:bg-blackBackground md:flex-wrap md:items-center md:space-y-0"
            >
              {/* Menu items go here */}
              <div
                className="flex flex-wrap items-center space-y-4 space-x-0 md:space-y-0 md:space-x-8"
                ref={navbarRef}
              >
                {!loading && (
                  <>
                    {/* Men's Health */}
                    <Dropdown
                      isDropdownOpen={activeDropdown === 'MEN_HEALTH'}
                      setDropdownOpen={() => handleDropdownToggle('MEN_HEALTH')}
                      dropdownTitle="Men's Health"
                      links={category
                        .filter(item => item.type === 'MEN_HEALTH')
                        .map(item => ({
                          id: item.id,
                          href: `/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                          label: item.name,
                        }))
                      }
                      cardOpen={cardOpen}
                      setCardOpen={setCardOpen}
                      cardStyles="bg-black text-white p-4 rounded-lg"
                      position="absolute left-0 top-full mt-2 z-50"
                    />

                    {/* Women's Health */}
                    <Dropdown
                      isDropdownOpen={activeDropdown === 'WOMEN_HEALTH'}
                      setDropdownOpen={() => handleDropdownToggle('WOMEN_HEALTH')}
                      dropdownTitle="Women's Health"
                      links={category
                        .filter(item => item.type === 'WOMEN_HEALTH')
                        .map(item => ({
                          href: `/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                          label: item.name,
                        }))
                      }
                      cardOpen={cardOpen}
                      setCardOpen={setCardOpen}
                      cardStyles="bg-black text-white p-4 rounded-lg"
                      position="absolute left-0 top-full mt-2 z-50"
                    />

                    {/* Respiratory & Digestive */}
                    <Dropdown
                      isDropdownOpen={activeDropdown === 'RESPIRATORY_AND_DIGESTIVE'}
                      setDropdownOpen={() => handleDropdownToggle('RESPIRATORY_AND_DIGESTIVE')}
                      dropdownTitle="Respiratory and Digestive"
                      links={category
                        .filter(item => item.type === 'RESPIRATORY_AND_DIGESTIVE')
                        .map(item => ({
                          href: `/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                          label: item.name,
                        }))
                      }
                      cardOpen={cardOpen}
                      setCardOpen={setCardOpen}
                      cardStyles="bg-black text-white p-4 rounded-lg"
                      position="absolute left-0 top-full mt-2 z-50"
                    />

                    {/* General Health */}
                    <Dropdown
                      isDropdownOpen={activeDropdown === 'GENERAL_HEALTH'}
                      setDropdownOpen={() => handleDropdownToggle('GENERAL_HEALTH')}
                      dropdownTitle="General Health"
                      links={category
                        .filter(item => item.type === 'GENERAL_HEALTH')
                        .map(item => ({
                          href: `/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                          label: item.name,
                        }))
                      }
                      cardOpen={cardOpen}
                      setCardOpen={setCardOpen}
                      cardStyles="bg-black text-white p-4 rounded-lg"
                      position="absolute left-0 top-full mt-2 z-50"
                    />
                  </>
                )}



              </div>

              {/* AddToCart */}
              <div className="hidden sm:block">
                <Link href="/cart" className="flex items-center">
                  <FaCartPlus className=" text-white w-5 h-5" />
                  <span className="ml-2 text-white">
                    <span className="text-hoverUnderlineColor">
                      {cart.products.length || 0}
                    </span>
                  </span>
                </Link>
              </div>


              <div className="mt-4 md:mt-0 ml-auto flex items-center">
                <UserProfileMenu />
              </div>
            </ul>
          </div>
          {isMenuOpen && (
            <MobileMenu
              mobileMenuOpen={isMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          )}
        </div>
      </nav>
      <div className="sm:hidden bg-black z-50 flex justify-center items-center">
        <SubNavbar />
      </div>
    </>
  );
};
export default Navbar;
