import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <>
      {/* Button or Call to Action */}
                  <div className="xl:mt-2 sm:mt-6 md:mt-4">
                    <Link href="/about">
                      <button className="py-4 xl:px-6 sm:py-4 xl:py-6 md:px-6 md:py-5 lg:py-5 mt-2 sm:w-[20%] w-[30vw] sm:h-[4vh] h-[4vh]  md:w-[20%] md:h-[3vh] lg:h-[4vh] lg:w-[12rem] sm:text-base text-xs bg-hoverUnderlineColor text-white font-normal rounded-lg shadow-lg transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300 flex items-center justify-center">
                        <span className="flex justify-center text-center text-sm lg:text-base ">
                          About US
                        </span>
                      </button>
                    </Link>
                  </div>  
    </>
  )
}

export default Button
