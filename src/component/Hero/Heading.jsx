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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg shine-effect capitalize"
          initial="hidden"
          animate="visible"
        >
          {[
            "Get High-Quality Service",
            "With Quality Medicine",
          ].map((line, index) => (
            <motion.span
              key={index}
              className="block xl:text-7xl md:text-4xl"
              custom={index} // Pass index for staggered animation
              variants={textAnimation}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1> 
    </>
  )
}

export default Heading;
