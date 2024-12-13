"use client"; // This marks the file as a client-side component

import { useState } from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import Link from "next/link"; // Using Next.js Link for navigation

const UserProfileMenu = () => {
  // State to control the visibility of the profile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Links to display in the profile menu
  const links = [
    { href: "/SignUp", label: "SignUp" },
    { href: "/Login", label: "Login" },
    { href: "/EditProfile", label: "Edit Profile" },
    { href: "/DeleteProfile", label: "Delete Profile" },
  ];

  // Framer Motion variants for menu animation
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="relative">
      {/* User Profile Image */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer group relative xl:w-10 xl:h-10 md:w-7 md:h-7 rounded-full overflow-hidden"
      >
        {/* Replace with actual user image or placeholder */}
        <img
          src="/user-icon.png" // Example image, replace with user image source
          alt="User Profile"
          className="w-full h-full object-cover absolute h-12 w-12 "
        />
      </div>

      {/* Profile Menu (Card) with Framer Motion */}
      {isMenuOpen && (
        <motion.div
          className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10 overflow-hidden"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 px-6 text-center bg-gray-900 rounded-t-lg">
            {/* Profile Card Header */}
            <p className="font-semibold text-lg">User Name</p>
            <p className="text-sm text-gray-400">user@example.com</p>
          </div>
          <ul className="py-2">
            {links.map((link, index) => (
              <li
                key={index}
                className="group px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
              >
                <Link href={link.href}>
                  <span className="text-white group-hover:text-gray-100">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default UserProfileMenu;
