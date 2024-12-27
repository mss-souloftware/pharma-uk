"use client";
import React from "react";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
const Page = () => {
  return (
    <div>
      {/* Image Section */}
      <div
        className="relative z-10 flex justify-center items-center w-full h-[38rem] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/DoctorImages/doctorImg4.jpg')" }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>
        <div className="relative container w-full z-20 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-0 xl:left-8 md:left-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wider leading-relaxed text-white xl:mb-5 md:mb-4">
            <span className="block xl:text-5xl md:text-3xl tracking-wide">
              The UK&apos;s Trusted
            </span>
            <span className="block mt-2 xl:text-5xl md:text-3xl tracking-wide">
              Online Pharmacy
            </span>
            <span className="mt-2 xl:text-5xl md:text-3xl tracking-wide">
              Since 2015
            </span>
          </h1>
          <div className="justify-start lg:w-[30vw] pt-2 mb-2 sm:mb-0 block">
            <span className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              nesciunt totam esse accusantium vel nulla harum sapiente ipsam
              nihil quaerat? Sunt voluptatem blanditiis doloremque facilis est
              ullam in repellat mollitia? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea accusantium nulla laudantium explicabo
              ratione pariatur temporibus minus dolorem ad doloribus.
            </span>
            {/* Button or Call to Action */}
            <div className="xl:mt-5 sm:mt-6 md:mt-4">
              <button className="xl:px-6 xl:py-3 md:px-6 md:py-1 mt-2 sm:w-[20%] w-[30vw] sm:h-[8vh] h-[4vh] lg:h-[6vh] lg:w-[12rem] sm:text-base text-xs text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out delay-150 bg-hoverUnderlineColor hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 w-full h-auto grid-rows-1 gap-2  p-0 relative">
          {/* Other Sections */}
          <div className="w-full   my-8">
            <h1 className="block ml-0 justify-start lg:text-4xl font-extrabold">
              Company&nbsp;
              <span className="relative text-hoverUnderlineColor underline-background tracking-widest">
                Information
              </span>
            </h1>
            <div className="grid lg:grid-cols-2 grid-rows-1 gap-y-1 h-72">
              <div className="  mt-7">
                <p className="tracking-wide">
                  <span className="block">
                    This website is operated by Pharmica Ltd. Pharmica Ltd is
                    registered
                  </span>
                  <span className="block">
                    in England and Wales under company number
                    <span className="text-hoverUnderlineColor">9668055</span>
                  </span>
                  <span className="block">
                    DUNS Number:{" "}
                    <span className="text-hoverUnderlineColor">
                      22-097-8327
                    </span>
                  </span>
                  VAT Number:{" "}
                  <span className="text-hoverUnderlineColor">
                    GB 217 7259 95
                  </span>
                </p>
                <h1 className="block lg:text-xl font-bold my-2">
                  Registered Office:
                </h1>
                <p className="tracking-wide">
                  <span className="block">
                    Registered Office: 236 Gray&apos;s Inn Rd London WC1X 8HB
                    United
                  </span>
                  <span className="block">
                    Kingdom 020 7112 9014
                    <span className="block text-hoverUnderlineColor font-semibold">
                      help@pharmica.co.uk
                    </span>
                  </span>
                </p>
              </div>

              {/* Images */}
              <div className="w-full  mt-7 relative">
                <Image
                  src="/building.jpg"
                  width={400}
                  height={60}
                  className="w-full bg-cover h-56"
                  alt="Building"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
  <div className="w-full grid container mx-auto lg:grid-cols-2 grid-rows-1 gap-y-1 md:h-72 lg:h-full">
    <div>
      <Image
        src="/consultin.png"
        width={400}
        height={60}
        alt="Image"
        className="ml-0 bg-cover block"
      />
    </div>
    <div className="grid grid-rows-5 gap-y-5 my-8">
      <div>
        <h1 className="lg:text-5xl font-extrabold">
          Customer&nbsp;
          <span className="relative text-black redunderline-background tracking-widest">
            Reviews
          </span>
        </h1>

            </div>
            <div className="flex justify-start">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/rankStarIcon.png"
                  width={100}
                  height={60}
                  alt=""
                  className="w-4 sm:w-6 md:w-8 lg:w-12"
                />
              ))}
            </div>
            <div className="flex">
              <span className="lg:text-4xl font-bold text-hoverUnderlineColor">
                234,0094+
              </span>
            </div>
            <div>
              <span className="lg:text-base">
                <span className="block ">
                  Our customers trust us to deliver top-quality service.
                </span>
                Read more reviews on Google and TrustPilot!{" "}
              </span>
            </div>

            <div className="border border-hoverUnderlineColor bg-hoverUnderlineColor w-36 h-9 rounded-lg">
              <Link href="/" className="text-center flex justify-center">
                <span className="text-white text-base mt-1">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=""
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat:'no-repeat',
        backgroundSize:"cover"
      }}
      > 
        <div className="w-full grid container mx-auto lg:grid-cols-2 grid-rows-1   md:h-72 lg:h-full ">
          {/* First Section */}
          <div className="  bg- text-white py-14">
            <h1 className="lg:text-[36px] font-extrabold  leading-relaxed pb-5 ">
              Pharmacy Regulation
            </h1> 
              <div className=" left-0 block tracking-wide space-y-1">
                <p
                  className="max-w-[504px] "
                  style={{
                    lineHeight: "44.6px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  The pharmacy is registered with the General Pharmaceutical
                  Council with number 9012030. The superintendent pharmacist for
                  Pharmica is: Ana Carolina Osorio De Faria Goncalves GPhC
                  Number: 2088658
                </p>
                <span className="block text-[20px]">
                  <li className="custom-list-item text-white">
                    Dr Munawar Iqbal &nbsp;
                    <span className="text-hoverUnderlineColor">

                     (GPhC Number 2059871)
                    </span>
                  </li>
                  <li className="custom-list-item text-white">

                    Dr Munawar Iqbal&nbsp;
                    <span className="text-hoverUnderlineColor">
                     (GPhC Number 2059871)
                    </span>
                  </li>
                </span>
              </div> 
          </div>
          {/* Second Section */}
          <div className="grid grid-rows-3  text-white w-[504px] justify-start items-center mt-[63px] h-[356px] ml-2 ">
            <div className="block">
              <span  className="max-w-[504px] "
                  style={{
                    lineHeight: "44.6px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}>
              For more information or to view registration details visit the General Pharmaceutical Council&nbsp;s website.Responsible Pharmacist:
              </span>
            </div>
            <div className="flex justify-start items-start  mt-14">
              <Image
                src="/registeredPharma.png"
                width={400}
                height={60}
                alt=""
                className="block w-[166px] h-[66px]  "
              />
            </div>
            <div className=" "  >
              <span className="text-[20px] w-10"> 
              <span className="block">
              Rehma Gill&nbsp; 

              </span>
              (GPhC number 2225869)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-ful">
        <div>
          <Image src='/bg1.png' height={60} width={100} alt="" className="w-40 absolute" />
        </div>
        <HowDoesItWorks />
      </div>
      <div className="w-full border border-black">Section 5</div>
      <div className="w-full border border-black">Section 6</div>
    </div>
  );
};

export default Page;
