"use client"; 

import { useState } from "react";
import { motion } from "framer-motion"; 
import { useRouter } from "next/navigation"; 
import Image from "next/image";

const UserProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/signUp", label: "My Account" },
    { href: "/my-orders", label: "My Orders" },
  ];

 
  const handleNavigation = (href) => {
    setIsMenuOpen(false); 
    router.push(href); 
  };

  
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="relative z-50"> 
      
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer group relative xl:w-8 xl:h-8 md:w-6 md:h-6 rounded-full overflow-hidden"
      >
        <Image
          src="/icons/user.png"
          alt="User Profile"
          width={28}
          height={28}
          className="object-cover absolute h-7 w-7"
        />
      </div>

     
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
            <p className="font-semibold text-lg">User Name</p>
            <p className="text-sm text-gray-400">user@example.com</p>
          </div>
          <ul className="py-2">
            {links.map((link, index) => (
              <li
                key={index}
                className="group px-4 py-2 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                onClick={() => handleNavigation(link.href)}
              >
                <span className="text-white group-hover:text-gray-100">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default UserProfileMenu;
