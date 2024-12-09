"use client"; // This marks the file as a client-side component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa'; // Import the dropdown icon
import Dropdown from './DropDown';

const MobileMenu = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(mobileMenuOpen);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cardOpen, setCardOpen] = useState(null);

  useEffect(() => {
    setIsMenuOpen(mobileMenuOpen);
  }, [mobileMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  // Toggle dropdown function
  const handleDropdownToggle = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setCardOpen(null);
    } else {
      setActiveDropdown(dropdown);
      setCardOpen(dropdown);
    }
  };

  return (
    <div>
      {/* Hamburger Icon with animation */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <motion.span
            className={`block w-6 h-1 bg-gray-500 mb-1`}
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`block w-6 h-1 bg-gray-500 mb-1`}
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`block w-6 h-1 bg-gray-500`}
            animate={{ rotate: isMenuOpen ? -45 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <motion.ul
        className={`md:hidden bg-blackBackground absolute top-16 left-0 w-full p-4 transition-transform ease-in-out duration-300 ${isMenuOpen ? 'block' : 'hidden'} flex flex-col items-stretch z-50`} // Add z-50 to ensure it's above other content
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Dropdown for Men's Health with icon */}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex items-center justify-between py-2 px-4"
        >
          <Dropdown
            isDropdownOpen={activeDropdown === 'men'}
            setDropdownOpen={() => handleDropdownToggle('men')}
            dropdownTitle="Men's Health"
            links={[
              { href: '/dashboard', label: 'Condoms' },
              { href: '/earnings', label: 'Erectile Dysfunction' },
              { href: '/sign-out', label: 'Hair Loss' }
            ]}
            cardOpen={cardOpen}
            setCardOpen={setCardOpen}
            motionEffect="motion.div"
            cardClassName="bg-black"
          />
          <FaCaretDown className="text-white ml-2" /> {/* Dropdown Icon */}
        </motion.li>

        {/* Other Dropdowns with icon */}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex items-center justify-between py-2 px-4"
        >
          <Dropdown
            isDropdownOpen={activeDropdown === 'women'}
            setDropdownOpen={() => handleDropdownToggle('women')}
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
            motionEffect="motion.div"
            cardClassName="bg-black"
          />
          <FaCaretDown className="text-white ml-2" /> {/* Dropdown Icon */}
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex items-center justify-between py-2 px-4"
        >
          <Dropdown
            isDropdownOpen={activeDropdown === 'Respiratory & Digestive'}
            setDropdownOpen={() => handleDropdownToggle('Respiratory & Digestive')}
            dropdownTitle="Respiratory & Digestive"
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
            motionEffect="motion.div"
            cardClassName="bg-black"
          />
          <FaCaretDown className="text-white ml-2" /> {/* Dropdown Icon */}
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-full flex items-center justify-between py-2 px-4"
        >
          <Dropdown
            isDropdownOpen={activeDropdown === 'General Health'}
            setDropdownOpen={() => handleDropdownToggle('General Health')}
            dropdownTitle="General Health"
            links={[
              { href: '/dashboard', label: 'Condoms' },
              { href: '/earnings', label: 'Erectile Dysfunction' },
              { href: '/sign-out', label: 'Hair Loss' }
            ]}
            cardOpen={cardOpen}
            setCardOpen={setCardOpen}
            motionEffect="motion.div"
            cardClassName="bg-black"
          />
          <FaCaretDown className="text-white ml-2" /> {/* Dropdown Icon */}
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default MobileMenu;
