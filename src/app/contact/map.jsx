import React from 'react';
import "../about/page.css";

const Map = () => {
  return (
    <> 
      {/* Main Content Section */}
      <div className="container mx-auto md:mb-[70px] lg:px-8">
        <div className="grid w-full h-auto gap-4 p-0 relative">
          {/* Company Information Section */}
          <div className="w-full my-8">
          <h1 className="block ml-2 xl:ml-0 justify-start text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center sm:text-start xl:text-left">
              Contact&nbsp;
              <span className="relative text-hoverUnderlineColor tracking-widest">
                Information
              </span>
            </h1>

            
            <div className='w-full'>
              {/* Grid Layout for Text and Map */}
              <div className="grid grid-rows-2 sm:grid-cols-1 xl:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] lg:grid-rows-1 gap-y-6 sm:gap-y-4 h-auto lg:h-auto">
                
                {/* Text Section */}
                <div className="xl:mt-7 pr-0 sm:pr-4 lg:pr-10 xl:pr-20 order-2 lg:order-1 flex sm:justify-start sm:items-start">
  <p className="w-full lg:w-72 max-w-full sm:text-left text-center leading-8 sm:leading-10 bg-gray-100 sm:bg-transparent text-base sm:text-base lg:text-lg xl:text-xl font-light sm:mb-4 mb-0 ">
    We aim to provide a seamless and reliable healthcare service
    that ensures customer satisfaction and promotes better health
    outcomes. With years of expertise in pharmaceutical services,
    we have built a reputation for being a trusted name in the UK.
  </p>
</div>



                {/* Map Section */}
                <div className="md:mt-7 relative order-1 rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.0702170893087!2d-0.26628656032713144!3d51.52898401390689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611edc75bb9af%3A0x14b81cfca4797c20!2sPark%20Royal%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1735554020582!5m2!1sen!2s"
                    className="w-full rounded-xl"
                    height="350"
                    style={{ border: '2px solid #ccc' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
