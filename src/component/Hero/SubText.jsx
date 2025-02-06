import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Hero.module.css";
import "@/app/globals.css"
const textAnimation = {
  hidden: { opacity: 0, y: 100 }, // Start off-screen (below)
  visible: (i) => ({
    opacity: 1,
    y: 0, // Moves to normal position
    transition: {
      delay: i * 0.1, // Stagger animation
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const SubText = () => {
  return (
    <>
      {/* Sub Text */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:justify-start justify-center items-center sm:items-start text-center sm:text-left"
      >
        {/* First Column */}
        <motion.div
          className="w-[33rem] mb-2 "
          variants={textAnimation}
          custom={0}
        >
          <p className=" text-black text-sm ">
            Discover why <span className="text-hoverUnderlineColor">iFeelShy</span> is the go-to choice for seamless and convenient online pharmacy services. Shop with confidence today!
          </p>
        </motion.div>

        {/* Second Column - Features List */}
        <div className="heroSubText container flex flex-col text-sm w-auto md:gap-2 ml-0">
          {[
            "Fully licensed UK Online Pharmacy",
            "Secure and discreet packaging for privacy",
            "Fast, reliable next-day delivery",
          ].map((text, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start"
              variants={textAnimation}
              custom={index + 1} // Staggered animation effect
            >
              <div className="w-4 h-4 bg-hoverUnderlineColor rounded-xl flex items-center justify-center mr-2">
  <Image
    src="/heroTick.png"
    width={16}
    height={16}
    alt="tick-icon"
    className="w-4 h-4"
  />
</div>

              <span className="text-black text-sm mt-2 sm:mt-0">
                {text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SubText;
