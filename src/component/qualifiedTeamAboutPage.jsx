import React from "react";
import "../app/about/page.css";
import Link from "next/link";
import Image from "next/image";

const QualifiedTeamAboutPage = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8 w-full "> {/* Added margin-top for mobile */}
        <div className="grid grid-rows-1  lg:grid-cols-2 gap-4 sm:gap-8 md:h-72 lg:h-full">

          {/* First Section */}
          <div className="my-10 sm:my-20  w-full sm:w-[377px] text-center lg:text-left">
            <h1 className="text-white sm:w-[600px] text-4xl sm:text-4xl md:text-5xl font-bold leading-relaxed">
              Our&nbsp;
              <span className="text-hoverUnderlineColor underline-background tracking-widest ">
                Qualified&nbsp;
              </span>
              <span className="block">Dispensing Team</span>
            </h1>

            <p className="text-gray-100 mt-4 sm:mt-7 text-base sm:text-lg">
              All our pharmacists are based in the UK and are registered with the
              General Pharmaceutical Council.
            </p>
            <button className="bg-hoverUnderlineColor text-white w-[133px] h-[39px] mt-8 rounded-md">
              <Link href="/">Learn More</Link>
            </button>
          </div>

          {/* Second Section (Doctor Profiles) */}
          <div className="my-10 sm:my-20 lg:grid lg:grid-cols-3 gap-6 h-[10%] sm:h-auto xl:w-[700px] xl:h-[300px]">
            {/* First Doctor */}
            <div className="text-center">
              <div className="border-b-slate-100 border-[12px] mb-10">
                <Image 
                  src="/doctor1.png" 
                  alt="Doctor 1" 
                  width={400} 
                  height={400} // Adjust the height and width based on your needs
                  layout="responsive" // This helps maintain the image's natural aspect ratio
                  className="w-full h-auto object-cover"
                />
                <div className="bg-gray-200 py-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-black">
                    Dr. Dane Smith
                  </h1>
                  <h3 className="text-sm sm:text-base font-normal text-black">
                    Pharmacy Manager
                  </h3>
                </div>
              </div>
            </div>

            {/* Second Doctor */}
            <div className="text-center">
              <div className="border-b-slate-100 border-[12px] mb-10">
                <Image 
                  src="/doctor1.png" 
                  alt="Doctor 2" 
                  width={400} 
                  height={400}
                  layout="responsive"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-gray-200 py-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-black">
                    Dr. Dane Smith
                  </h1>
                  <h3 className="text-sm sm:text-base font-normal text-black">
                    Pharmacy Manager
                  </h3>
                </div>
              </div>
            </div>

            {/* Third Doctor */}
            <div className="text-center">
              <div className="border-b-slate-100 border-[12px] mb-10">
                <Image 
                  src="/doctor1.png" 
                  alt="Doctor 3" 
                  width={400} 
                  height={400}
                  layout="responsive"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-gray-200 py-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-black">
                    Dr. Dane Smith
                  </h1>
                  <h3 className="text-sm sm:text-base font-normal text-black">
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
