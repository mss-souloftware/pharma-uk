import React from 'react'
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Heading = () => {
     // Define the text animation for the bounce effect
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: [50, -20, 0], // Bounce effect
      transition: {
        delay: i * 0.1, // Stagger animation for each line
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67], // Smooth bounce easing
      },
    }),
  };
  return (
    <>
     <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg shine-effect capitalize"
          initial="hidden"
          animate="visible"
        >
          {[
            "Get High-Quality Service",
            "With Quality Medicine",
          ].map((line, index) => (
            <motion.span
              key={index}
              className="block xl:text-6xl md:text-4xl"
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

export default Heading
