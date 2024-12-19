import React from "react";
import "./Hero.module.css"

const Hero = () => {
  return (
    <div
      className="relative   z-10 flex justify-center items-center w-full h-[38rem] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>

      {/* Text Content with Fade-in Animation */}
      <div className="relative container z-20 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-0 xl:left-8 md:left-8  ">
        {/* Heading */}
        <h1
          className={`text-2xl sm:text-3xl  font-bold tracking-wider leading-relaxed text-white xl:mb-5 md:mb-4`}
        >
          <span className="block xl:text-5xl md:text-3xl racking-wide ">Get high-quality service</span>
          <span className="mt-2 xl:text-5xl md:text-3xl tracking-wide ">with quality medicine</span>
        </h1>

        <div className="heroSubText grid container grid-cols-2 xl:text-base md:text-sm text-xs w-[100%] sm:w-[50%] lg:grid-cols-2 gap-0 sm:gap-2 ml-0 sm:w-full md:gap-4  sm:justify-center   lg:ml-0 xl:w-[40%]  md:items-start  sm:items-start xl:w-[calc(100%-70%)] mx-auto"> 


          <div className=" heroSubText pt-2 flex mb-2 sm:mb-0  ">
            <img src="/tick.png" alt="" className="w-3 h-4 size-3 md:pr-1 md:mt-1  " />
            <span className=" text-white  "> UK registered pharmacy </span>
          </div>
          <div className=" pt-2 flex mb-2 sm:mb-0 ">
            {" "}
            <img src="/tick.png" alt="" className="w-3 h-4 size-3 md:pr-1 md:mt- 1 " />
            <span className=" text-white xl:text-base md:text-sm   "> Express next day delivery </span>
          </div>
          <div className=" flex mb-2 sm:mb-0 ">
            {" "}
            <img src="/tick.png" alt="" className="w-3 h-4 size-3 md:pr-1 md:mt-1  " />
            <span className=" text-white xl:text-base md:text-sm "> Discreet packaging </span>
          </div>
          <div className=" flex mb-2 sm:mb-0">
            {" "}
            <img src="/tick.png" alt="" className="w-3 h-4 size-3 md:pr-1 md:mt-1  " />
            <span className=" text-white xl:text-base md:text-sm "> 207,731 customer reviews </span>
          </div> 

        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:w-[30%] md:w-[45%]  md:text-sm xl:text-base sm:grid-cols-2 gap-2 md:gap-0  border-2 border-solid border-transparent mt-8 px-2 sm:px-1     ">
          {/* Left Column */}
          <div className="flex  flex-col space-y-2 sm:space-y-2 justify-center items-center sm:items-start md:w-36">

            {/* Name and Rating */}
              <div className="flex justify-between items-center xl:w-[30%] gap-4 md:gap-12  ">
                <span className="text-white text-base sm:text-xl md:text-xl lg:text-3xl font-extrabold">
                  <span className="xl:text-2xl md:text-xl ">
                  𝙸𝚏𝚎𝚎𝚑𝚜𝚑𝚢 
                  </span>
                <span className="text-white text-base sm:text-base md:text-bsae lg:text-xl font-semibold  sm:ml-[20%] sm:text-font-normal  ">
                  <span className=" ">
                  4.7
                  </span>
                </span>
                </span>
              </div>

            {/* Star Images */}
            <div className="flex items-center xl:space-x-5 md:space-x-4 space-x-1 sm:space-x-2  ">
              <img
                src="/star.png"
                alt="star"
                className="w-4 sm:w-4 md:w-5 xl:w-6 text-white"
              />
              <img
                src="/star.png"
                alt="star"
                className="w-4 sm:w-4 md:w-5 xl:w-6 text-white"
              />
              <img
                src="/star.png"
                alt="star"
                className="w-4 sm:w-4 md:w-5 xl:w-6 text-white"
              />
              <img
                src="/star.png"
                alt="star"
                className="w-4 sm:w-4 md:w-5 xl:w-6 text-white"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex sm:items-center xl:text-left  justify-center items-center flex-col sm:flex-row sm:w-[100%] sm:h-[95%]">
            <div className="xl:h-[10vh] md:h-[10vh] w-[2px] bg-white md:mx-auto  "></div>
            <span className="flex items-center flex-wrap text-white font-medium text-base sm:ml-2 md:ml-6 md:w-[100%]  "> 
  <span className="text-left text-xs sm:text-sm md:text-base text-center leading-tight sm:ml-0 md:text-xs md:w-[100%] md:text-left  ">
    The Winner of the Feefo Platinum Trusted Service Award in 2024
  </span>
</span>

          </div>
          
        </div>

        {/* Button or Call to Action */}
        <div className="xl:mt-5 sm:mt-6 md:mt-4 ">
          <button className="xl:px-6 xl:py-3 md:px-6 md:py-1 mt-2  sm:w-[20%] w-[30vw] sm:h-[3vh] h-[4vh] lg:h-[6vh] lg:w-[12rem] sm:text-base text-xs bg-hoverUnderlineColor text-white font-semibold rounded-lg shadow-lg  hover:bg-hoverUnderlineColor transition-all  transition ease-in-out delay-15 bg-hoverUnderlineColor
           hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;