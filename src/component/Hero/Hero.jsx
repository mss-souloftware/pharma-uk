// components/Hero.js
import React from "react";
import styles from "./Hero.module.css"; // Import the CSS module

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <div 
        className={`${styles.cube} 
          w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw] 
          xl:w-[8vw] xl:h-[8vw] mt-[10%] md:mt-[5%] ml-[35%] md:ml-[30%] lg:ml-[25%] xl:ml-[20%]`}
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
