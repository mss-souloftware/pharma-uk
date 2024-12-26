import React from "react";
import "./page.css";
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
        <div className="relative container z-20 flex flex-col text-center sm:text-left justify-center md:justify-start md:left-0 xl:left-8 md:left-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wider leading-relaxed text-white xl:mb-5 md:mb-4">
            <span className="block xl:text-5xl md:text-3xl tracking-wide">
              The UK's Trusted
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
              <button className="xl:px-6 xl:py-3 md:px-6 md:py-1 mt-2 sm:w-[20%] w-[30vw] sm:h-[8vh] h-[4vh] lg:h-[6vh] lg:w-[12rem] sm:text-base text-xs bg-hoverUnderlineColor text-white font-semibold rounded-lg shadow-lg hover:bg-hoverUnderlineColor transition-all ease-in-out delay-150 bg-hoverUnderlineColor hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 w-full h-auto grid-rows-6 gap-2 pt-10 p-0 relative">
          {/* Other Sections */}
          <div className="w-full border border-black">
            <h1 className="block ml-0 justify-start lg:text-4xl font-extrabold">
              Company&nbsp;
              <span className="relative text-hoverUnderlineColor underline-background tracking-widest">
                Information
              </span>
            </h1>
            <div className="grid lg:grid-cols-2 grid-rows-1 gap-y-1">
              <div className="border border-black mt-7">
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
                  <h1 className="block lg:text-xl font-bold my-2">Register Office:</h1>
                  <span className="block">
                    Registered Office: 236 Gray&apos;s Inn Rd London WC1X 8HB United
                  </span>
                  <span className="block">
                    Kingdom 020 7112 9014
                    <span className="block text-hoverUnderlineColor font-semibold">
                      help@pharmica.co.uk
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border border-black">Section 2</div>
          <div className="w-full border border-black">Section 3</div>
          <div className="w-full border border-black">Section 4</div>
          <div className="w-full border border-black">Section 5</div>
          <div className="w-full border border-black">Section 6</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
