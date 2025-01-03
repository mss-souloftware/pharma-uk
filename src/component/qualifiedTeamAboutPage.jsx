import React from "react";
import "../app/about/page.css";
import Link from "next/link";
import Image from "next/image";

const QualifiedTeamAboutPage = () => {
  return (
    <div className="bg-black">
    <div className="container mx-auto px-4 sm:px-2 lg:px-8 w-full my-10 md:my-14 lg:my-0">
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-1 md:gap-4 md:h-72 lg:h-full">
        
        {/* First Section */}
        <div className="my-10 lg:my-20 w-full text-center lg:text-left ">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-relaxed">
            Our&nbsp;
            <span className="text-hoverUnderlineColor underline-background tracking-widest ">
              Qualified&nbsp;
            </span>
            <span className="block">Dispensing Team</span>
          </h1>
          <p className="text-gray-100 mt-4 sm:mt-7 xl:text-base md:text-sm text-xs font-normal">
            All our pharmacists are based in the UK and are registered with the
            General Pharmaceutical Council.
          </p>
          <div className="flex items-center justify-center sm:justify-start w-full sm:mt-6 md:mt-4">
  <button className="flex items-center justify-center px-4 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-2 mt-2 w-[30vw] sm:w-1/5 lg:w-48 sm:h-[6vh] h-[4vh] lg:h-[5vh] text-xs sm:text-sm lg:text-base text-white font-semibold rounded-lg shadow-lg bg-hoverUnderlineColor hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] transition-transform duration-300 ease-in-out">
    Learn More
  </button>
</div>
        </div>
  
        {/* Second Section (Doctor Profiles) */}
        <div className="my-10 lg:my-20 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-3 gap-6 h-auto xl:w-[600px] xl:h-[300px] sm:w-[350px] sm:h-[250px] block mx-auto">
          {/* First Doctor */}
          <div className="text-center sm:w-full lg:w-auto rounded-xl ">
            <div className="border-b-slate-100 border-[12px] mb-10 lg:h-auto rounded-xl">
              <Image 
                src="/doctor1.png" 
                alt="Doctor 1" 
                width={250}  // Adjusted size for tablet view
                height={250} // Adjusted size for tablet view
                layout="responsive"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-200 py-2">
                <h1 className="text-sm sm:text-base lg:text-xl font-extrabold text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-xs sm:text-sm font-normal text-black">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
  
          {/* Second Doctor */}
          <div className="text-center sm:w-full lg:w-auto rounded-xl">
            <div className="border-b-slate-100 border-[12px] mb-10 rounded-xl">
              <Image 
                src="/doctor1.png" 
                alt="Doctor 2" 
                width={250}  // Adjusted size for tablet view
                height={250} // Adjusted size for tablet view
                layout="responsive"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-200 py-2">
                <h1 className="text-sm   sm:text-base lg:text-xl  font-extrabold text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-xs sm:text-sm font-normal text-black">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
  
          {/* Third Doctor */}
          <div className="text-center sm:w-full lg:w-auto rounded-xl">
            <div className="border-b-slate-100 border-[12px] mb-10 rounded-xl">
              <Image 
                src="/doctor1.png" 
                alt="Doctor 3" 
                width={250}  // Adjusted size for tablet view
                height={250} // Adjusted size for tablet view
                layout="responsive"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-200 py-2">
                <h1 className="text-sm  sm:text-base lg:text-xl  font-extrabold text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-xs sm:text-sm font-normal text-black">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
  
  
  );
};

export default QualifiedTeamAboutPage;
