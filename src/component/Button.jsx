import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const buttonAnimation = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (below)
  visible: {
    opacity: 1,
    y: 0, // Moves to normal position
    transition: {
      delay: 0.5, // Delay for a smooth effect
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Button = () => {
  return (
    <>
      {/* Button or Call to Action */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={buttonAnimation} 
        className="relative"
      >
        <Link href="/about">
          <button className="py-4 xl:px-6 sm:py-4 xl:py-6 md:px-6 md:py-5 lg:py-5 sm:w-[20%] w-[30vw] sm:h-[4vh] h-[4vh] md:w-[20%] md:h-[3vh] lg:h-[4vh] lg:w-[12rem] sm:text-base text-xs bg-hoverUnderlineColor text-white font-normal rounded-lg shadow-lg transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300 flex items-center justify-center">
            <span className="flex justify-center text-center text-sm lg:text-base">
              About US
            </span>
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default Button;
