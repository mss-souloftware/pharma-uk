import React from "react";
import styles from "./Hero.module.css"; // Import the CSS module

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Get high-quality service with quality medicine
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Take control of your health and experience the benefits of healthcare with our platform.
        </p>
      </div>

      <div
        className={`${styles.cube} 
          w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw] 
          xl:w-[8vw] xl:h-[8vw] mt-[5%] md:mt-[3%] ml-[5%] transform rotate-45`}
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
  );
};

export default Hero;
