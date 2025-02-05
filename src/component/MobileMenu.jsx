"@use client"; // This marks the file as a client-side component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa"; // Import the dropdown icon
import Link from "next/link"; // Assuming you're using Next.js for routing
import UserProfileMenu from "./UserProfileMenu";

const MobileMenu = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(mobileMenuOpen);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setIsMenuOpen(mobileMenuOpen);
  }, [mobileMenuOpen]); // Adding mobileMenuOpen as a dependency
  // Toggle dropdown function
  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown); // Toggle dropdown
  };

  return (
    <div>
      {/* Hamburger Icon with animation */}
      <div className="md:hidden z-50 relative ">
          <UserProfileMenu/>
        <button className="text-white w-4">
          {!isMenuOpen ? (
            <FaBars size={24} className="text-gray-500 w-4" onClick={toggleMobileMenu} />
          ) : (
            <FaTimes size={24} className="text-gray-500 w-4"onClick={toggleMobileMenu}  />
          )}
        </button>
      </div> 
      {/* Mobile Menu with animation */}
      <motion.ul 
        className={`md:hidden bg-blackBackground absolute top-12 left-0 w-full p-4 transition-transform ease-in-out duration-100 ${isMenuOpen ? "block" : "hidden"} flex flex-col items-stretch z-10 `} // Add z-50 to ensure it's above other content
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0 }}
      >
        {/* Dropdown for Men's Health with button toggle */}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex flex-col py-2 px-4"
        >
          <button
            onClick={() => handleDropdownToggle("men")}
            className="text-white bg-blackBackground hover:bg-blackBackground focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative group"
          >
            Men&apos;s Health
            <FaCaretDown className="ml-2 text-white" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span> {/* Underline span */}
          </button>
          {/* Show dropdown content if the menu is open */}
          {activeDropdown === "men" && (
            <motion.div
              className="w-full mt-2 bg-blackBackground rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-2 text-sm text-gray-300">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/condoms" className="block px-4 py-2 hover:text-gray-500"  onClick={toggleMobileMenu}>Condoms</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/earnings" className="block px-4 py-2 hover:text-gray-500" onClick={toggleMobileMenu}>Erectile Dysfunction</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/sign-out" className="block px-4 py-2 hover:text-gray-500" onClick={toggleMobileMenu}>Hair Loss</Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </motion.li>

        {/* Dropdown for Women's Health with button toggle */}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex flex-col py-2 px-4"
        >
          <button
            onClick={() => handleDropdownToggle("women")}
            className="text-white bg-blackBackground hover:bg-blackBackground focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative group"
          >
            Women&apos;s Health
            <FaCaretDown className="ml-2 text-white" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span> {/* Underline span */}
          </button>
          {activeDropdown === "women" && (
            <motion.div
              className="w-full mt-2 bg-blackBackground rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-2 text-sm text-gray-300">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/dashboard" className="block px-4 py-2 hover:text-gray-500">Cystitis</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/earnings" className="block px-4 py-2 hover:text-gray-500">Contraceptive Pill</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/sign-out" className="block px-4 py-2 hover:text-gray-500">Feminine Care</Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </motion.li>

        {/* Dropdown for Respiratory & Digestive with button toggle */}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex flex-col py-2 px-4"
        >
          <button
            onClick={() => handleDropdownToggle("respiratory")}
            className="text-white bg-blackBackground hover:bg-blackBackground focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative group"
          >
            Respiratory & Digestive
            <FaCaretDown className="ml-2 text-white" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span> {/* Underline span */}
          </button>
          {activeDropdown === "respiratory" && (
            <motion.div
              className="w-full mt-2 bg-blackBackground rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-2 text-sm text-gray-300">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/dashboard" className="block px-4 py-2 hover:text-gray-500">Asthma</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/earnings" className="block px-4 py-2 hover:text-gray-500">Allergies</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/sign-out" className="block px-4 py-2 hover:text-gray-500">Cough</Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default MobileMenu;
