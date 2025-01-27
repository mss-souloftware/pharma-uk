import React from 'react'

const ProductHeading = () => {
  return ( 
          <div>
        <h1 className="flex items-center justify-center text-xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-5xl font-semibold text-hoverUnderlineColor">
          Find Your Treatment
        </h1>
        <p className="text-center w-[80%] mx-auto text-xs lg:text-base md:text-base sm:text-base font-normal mt-7 text-gray-700">
          At Pharmica we offer a wide range of treatments through our free online prescription service...
        </p>
      </div> 
  )
}

export default ProductHeading
