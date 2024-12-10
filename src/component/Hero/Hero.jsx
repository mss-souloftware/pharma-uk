import React from "react";
import styles from "./Hero.module.css"; // Import the CSS module
const Hero = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-[100%] bg-white overflow-hidden">
        {/* Cube 2 */}
        <div
          className={`${styles.cube2New} 
          w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw] 
          xl:w-[8vw] xl:h-[8vw] transform rotate-45 absolute`}
        >
          <div className={styles.topD}></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className={styles.cube2}>
            <div>
              <span style={{ "--i": 0 }}></span>
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 3 }}></span>
            </div>
            <div className={styles.cube3}>
              <div className={styles.top3}></div>
              <div>
                <span style={{ "--i": 0 }}></span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content with Fade-in Animation */}
        <div className="grid gap-x-8 gap-y-4 gap-4 flex flex-col items-center justify-center text-center relative z-10 px-4 sm:px-8 md:px-12 lg:px-20 mt-16 sm:mt-20 md:mt-32">
          {/* Heading */}
          <h1
            className={`${styles.animateSlidein300} 
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
  font-bold tracking-wider leading-relaxed opacity-0 whitespace-nowrap`}
          >
            <span className="block">Get high-quality service</span>
            <span className="block mt-2 tracking-wide">
              with quality medicine
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`${styles.animateSlidein300} mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal sm:leading-relaxed opacity-0`}
          >
            <span>Take control of your health</span>
            <span className="block sm:inline">
              {" "}
              and experience the benefits of healthcare{" "}
            </span>
            <br className="hidden sm:block" />
            <span>with our platform.</span>
          </p>

          {/* Button */}
          <div
            className={`${styles.animateSlidein500} mt-8 sm:mt-10 opacity-0`}
          >
            <button className="px-8 sm:px-12 md:px-16 py-3 text-sm sm:text-base md:text-lg text-white font-semibold bg-hoverUnderlineColor border-2 border-transparent rounded-lg hover:bg-hoverUnderlineColor transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor focus:ring-opacity-50">
              About Us
            </button>
          </div>
        </div>

        {/* CUBIC DIV */}
        <div
          className={`${styles.cube2New} 
            w-[4vw] h-[4vw] md:w-[5vw] md:h-[5vw] lg:w-[4vw] lg:h-[4vw] 
            xl:w-[3vw] xl:h-[3vw] transform rotate-45 absolute`}
        >
          <div className={styles.topD}></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className={styles.cube2}>
            <div>
              <span style={{ "--i": 0 }}></span>
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 3 }}></span>
            </div>
            <div className={styles.cube3}>
              <div className={styles.top3}></div>
              <div>
                <span style={{ "--i": 0 }}></span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-[2%] w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[35vh] border-solid border-2 flex items-center justify-center z-20 opacity-100 bg-[#ffeeee] rounded-xl shadow-lg p-4 overflow-hidden hover:rotate-x-45 hover:bg-[#ffdfe5] transition-all duration-200 ease-in-out">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3">
            Virtual Consultation
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">
          Virtual consultations provide a convenient and accessible way to connect with healthcare professionals remotely. Whether &quot;s a quick check-up, follow-up appointment, or expert advice, virtual consultations offer timely care without the need to visit a clinic in person.
          </p>
          <button className="px-6 py-2 text-black bg-transparent border-2 border-hoverUnderlineColor hover:text-white hover:bg-hoverUnderlineColor font-semibold rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
