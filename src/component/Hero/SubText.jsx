import Image from 'next/image'
import React from 'react'
import "./Hero.module.css"; 


const SubText = () => {
  return (
    <>
      {/* Sub Text */}
      <div className="heroSubText grid container grid-cols-2 xl:text-base md:text-sm text-xs w-[100%] sm:w-[55%] md:w-[50%] lg:w-[45%] lg:grid-cols-2 gap-0 sm:gap-2 ml-0 sm:justify-center lg:ml-0  md:items-start sm:items-start  xl:w-[calc(100%-65%)] ">
          <div className="heroSubText pt-2 flex mb-2 sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-white"> UK registered pharmacy </span>
          </div>
          <div className="pt-2 flex mb-2 sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-white xl:text-base md:text-sm">
              Express next day delivery
            </span>
          </div>
          <div className="flex mb-2 sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-white xl:text-base md:text-sm">
              Discreet packaging
            </span>
          </div>
          <div className="flex mb-2 sm:mb-0">
            <Image
              src="/tick.png"
              width={20}
              height={20}
              alt=""
              className="hidden sm:block w-3 h-4 size-3 md:pr-1 md:mt-1"
            />
            <span className="text-white xl:text-base md:text-sm">
              207,731 customer reviews
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:w-[30%] md:w-[45%] sm:w-[55%] md:text-sm xl:text-base sm:grid-cols-2 gap-2 md:gap-0 border-2 border-solid border-transparent mt-px-2 sm:px-1">
          {/* Left Column */}
          <div className="flex flex-col space-y-2 sm:space-y-2 justify-center items-center sm:items-start md:w-36">
            {/* Name and Rating */}
            <div className="flex justify-between items-center xl:w-[30%] gap-4 ">
              <span className="text-white text-base sm:text-xl md:text-xl lg:text-3xl font-semibold">
              <span className="text-hoverUnderlineColor md:text-2xl font-extrabold tracking-widest">
  𝙸𝚏𝚎𝚎𝚑𝚜𝚑𝚢
</span>

                <span className="text-white text-base sm:text-base md:text-base lg:text-base font-normal sm:ml-[10%] sm:text-font-normal">
                  4.7
                </span>
              </span>
            </div>

            {/* Star Images */}
            <div className="flex items-center xl:space-x-5 md:space-x-4 space-x-1 sm:space-x-2">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/icons/star.png"
                  height={20}
                  width={29}
                  alt="star-icon"
                  className="w-4 sm:w-4 md:w-5"
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex relative sm:items-center xl:text-left justify-center items-center flex-col md:mt-2 xl:mt-2 xl:ml-10 md:ml-5   sm:flex-row sm:w-[15rem] sm:h-[95%]">
            <div className="xl:h-[7vh] sm:h-[10vh] md:h-[7vh] w-[1px] bg-white md:mx-auto"></div>
            <span className="flex  sm:justify-start sm:items-start flex-wrap text-white font-normal text-base sm:ml-2 md:ml-4  ">
              <span className="my-5 sm:my-0 font-normal text-center sm:text-left text-xs sm:text-xs leading-tight sm:ml-0 md:text-sm md:w-[100%] md:text-left">
                The Winner of the Feefo Platinum Trusted Service Award in 2025
              </span>
            </span>
          </div>
        </div> 
    </>
  )
}

export default SubText
