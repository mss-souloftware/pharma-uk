import Image from 'next/image'
import React from 'react'
import "../app/about/page.css";

const PharmacyRegulationsMobile = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto grid grid-rows-1 md:h-auto lg:h-full px-4 sm:px-6 lg:px-8">

        {/* First Section */}
        <div className="text-white py-14 bg-black px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold leading-relaxed pb-5">
              Pharmacy&nbsp;
              <span className="text-white redunderline-background tracking-widest">
                Regulation
              </span>
            </h1>
            <div className="tracking-wide space-y-2 ">
              <p className="max-w-[504px] text-base font-normal" style={{ lineHeight: "1.8" }}>
                The pharmacy is registered with the General Pharmaceutical Council
                with number 9012030. The superintendent pharmacist for Pharmica is:
                Ana Carolina Osorio De Faria Goncalves (GPhC Number: 2088658).
              </p>
              <ul className="space-y-2">
                <li className="text-base sm:text-xl text-white">
                  Dr Munawar Iqbal&nbsp;
                  <span className="text-hoverUnderlineColor">(GPhC Number 2059871)</span>
                </li>
                <li className="text-base sm:text-xl text-white">
                  Rehma Gill&nbsp;
                  <span className="text-hoverUnderlineColor">(GPhC Number 2225869)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-rows-3 gap-6 md:ml-10 text-white w-full lg:max-w-[504px] justify-start items-center py-10 bg-hoverUnderlineColor px-2 sm:px-6   flex justify-center items-center">
          {/* Informational Text */}
          <div className="text-center">
            <p className="text-base font-normal" style={{ lineHeight: "1.8" }}>
              For more information or to view registration details, visit the
              General Pharmaceutical Council’s website. Responsible Pharmacist:
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src="/registeredPharma.png"
              width={500}
              height={100} // Adjust height to make the image more visible on mobile
              alt="Registered Pharma"
              className="w-[120px]   h-auto mx-auto " // Adjust width and ensure responsive sizing
            />
          </div>

          {/* Pharmacist Details */}
          <div className="text-center">
            <p className="text-base " style={{ lineHeight: "1.8" }}>
              <span className="block">Rehma Gill&nbsp;</span>
              (GPhC Number 2225869)
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PharmacyRegulationsMobile;
