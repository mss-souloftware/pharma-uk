import PharmacyRegulationsMobile from '@/component/PharmacyRegulationsMobile'
import Image from 'next/image'
import React from 'react'

const PharmaRegulation = () => {
  return ( 
    <>
    <div
    className="bg-cover bg-center bg-no-repeat hidden sm:block  " // Hide on mobile, show on larger screens
    style={{
      backgroundImage: "url('/bg.png')",
    }}
  >
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
      {/* First Section */}
      <div className="text-white py-8 sm:py-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-relaxed pb-5">
          Pharmacy&nbsp;
          <span className="text-hoverUnderlineColor redunderline-background tracking-widest">
            Regulation
          </span>
        </h1>
        <div className="tracking-wide space-y-3">
          <p
            className="xl:text-base md:text-sm text-xs font-light max-w-full sm:max-w-[400px] lg:max-w-[504px]"
            style={{ lineHeight: "1.8" }}
          >
            The pharmacy is registered with the General Pharmaceutical
            Council with number 9012030. The superintendent pharmacist for
            Pharmica is: Ana Carolina Osorio De Faria Goncalves (GPhC
            Number: 2088658).
          </p>
          <ul className="space-y-2">
            <li className="xl:text-base md:text-sm text-xs font-light text-white">
              Dr Munawar Iqbal&nbsp;
              <span className="text-hoverUnderlineColor">
                (GPhC Number 2059871)
              </span>
            </li>
            <li className="xl:text-base md:text-sm text-xs font-light text-white">
              Rehma Gill&nbsp;
              <span className="text-hoverUnderlineColor">
                (GPhC Number 2225869)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-rows-3 gap-6 sm:gap-8 text-white py-8 sm:py-14 w-full">
        {/* Informational Text */}
        <div>
          <p
            className="xl:text-base md:text-sm text-xs font-light"
            style={{ lineHeight: "1.8" }}
          >
            For more information or to view registration details, visit the
            General Pharmaceutical Council’s website. Responsible
            Pharmacist:
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-start items-center">
        <Image
src="/registeredPharma.png"
width={150}
height={40}
alt="Registered Pharma"
className="w-[80px] sm:w-[80px] md:w-[100px] lg:w-[110px] xl:w-[150px] object-contain"
quality={100} // Increase quality for sharper display
layout="intrinsic" // Maintain image aspect ratio and prevent stretching
/>

        </div>

        {/* Pharmacist Details */}
        <div>
          <p className="xl:text-base md:text-sm text-xs font-light">
            <span className="block">Rehma Gill&nbsp;</span>
            (GPhC Number 2225869)
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Pharmacy Regulations Mobile */}
  <div className="sm:hidden block">
    {" "}
    {/* Only visible on mobile */}
    <PharmacyRegulationsMobile />
  </div>
</>
  )
}

export default PharmaRegulation
