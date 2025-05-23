
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Heading = () => {
  // Define text animation for sliding up
  const textAnimation = {
    hidden: { opacity: 0, y: 100 }, // Start off-screen (below)
    visible: {
      opacity: 1,
      y: 0, // Moves to normal position
      transition: {
        duration: 0.8,
        ease: "easeOut", // Smooth transition
      },
    },
  };

  return (
    <>
      <motion.h1
        className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-bold text-black tracking-tight drop-shadow-lg capitalize 
      text-center sm:text-left max-w-[90%] sm:max-w-[70%] md:max-w-[50%] leading-6"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        Welcome to your <br></br> trusted UK 
      </motion.h1>
      <motion.h3
        className="text-base  font-bold text-[#1AB8A3] tracking-tight drop-shadow-lg capitalize 
      text-center sm:text-left  leading-6"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        Providing exceptional care and trusted by customers nationwide
      </motion.h3>
    </>
  );
};

export default Heading;
