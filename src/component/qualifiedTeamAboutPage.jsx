import React from "react";
import "../app/about/page.css";
import Link from "next/link";
import Image from "next/image";
const QualifiedTeamAboutPage = () => {
  return (
    <div className="bg-black">
      <div className=" w-full sm:w-[] grid container mx-auto lg:grid-cols-2 grid-rows-1  md:h-72 lg:h-full">
        {/* First Section */}
        <div className="my-20 w-[377px] ">
          <h1 className="text-white text-5xl font-bold leading-relaxed">
            Our&nbsp;
            <span className="text-hoverUnderlineColor QualifiedTeamunderline-background z-50 tracking-widest">
              Qualified&nbsp;
            </span>
            <span className="block">Dispensing Team</span>
          </h1>

          <p className="text-gray-100 mt-7">
            All our pharmacists are based in the UK and are registered with the
            General Pharmaceutical Council.
          </p>
          <button className="bg-hoverUnderlineColor text-white w-[133px] h-[39px] xl:mt-8 rounded-md">
            <Link href="/">Learn More</Link>
          </button>
        </div>

        {/* Second Section */}
        <div className="my-20 xl:w-[700px] xl:h-[300px] lg:grid grid-cols-3 grid-rows-1 xl:gap-10  ">

          <div className="border-b-slate-100 border-[12px] justify-center ">
            <div className="text-center items-center mb-20">
              <Image src="/doctor1.png" height={60} width={400} alt="" />
              <div className="bg-gray-200 py-2">
                <h1 className="text-2xl font-extrabold z-50 text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-sm font-normal text-black z-50">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
          <div className="border-b-slate-100 border-[12px] justify-center">
          <div className="text-center items-center mb-20">
              <Image src="/doctor1.png" height={60} width={400} alt="" />
              <div className="bg-gray-200 py-2">
                <h1 className="text-2xl font-extrabold z-50 text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-sm font-normal text-black z-50">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>

          <div className="border-b-slate-100 border-[12px] justify-center ">
          <div className="text-center items-center mb-20">
              <Image src="/doctor1.png" height={60} width={400} alt="" />
              <div className="bg-gray-200 py-2">
                <h1 className="text-2xl font-extrabold z-50 text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-sm font-normal text-black z-50">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default QualifiedTeamAboutPage;
