import React from 'react'
const Map = () => {
  return (
    <div className='max-w-6xl mx-auto px-4  '>
      <div className='justify-center items-center flex my-16'>
      <h2 className='text-4xl xl:text-[48px]  font-semibold leading-tight  text-center tracking-wider sm:px-[10rem] '>Your Health Support is Just a Click Away on the Map</h2>
      </div>
      <div>
         {/* Map Section */}
         <div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className=" relative order-1 rounded-xl h-auto"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.0702170893087!2d-0.26628656032713144!3d51.52898401390689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611edc75bb9af%3A0x14b81cfca4797c20!2sPark%20Royal%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1735554020582!5m2!1sen!2s"
                    className="w-full h-[40rem] rounded-2xl "
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"

                  ></iframe>
                </div>
      </div>
    </div>
  )
}

export default Map
