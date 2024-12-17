import React from 'react'
import Partners from './Partner'

const ContentSection4 = () => {
  return (
    <>
    <div className='container w-full h-auto border-2  border-solid mt-24 bg-gray-100'>
      <h1 className='block text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold mt-5 text-hoverUnderlineColor text-base sm:text-xl md:text-2xl lg:text-3xl'>In the press</h1>
      <p className='block text-center mt-5 mb-5 text-xs sm:text-sm md:text-base' >Our team of online pharmacy experts and pharmacists regularly provides expert insights on a wide range of medical topics to prominent news and media outlets across the UK. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quidem, beatae aperiam voluptates molestias laboriosam!</p>
    </div>
    <Partners/>
    </>
  )
}

export default ContentSection4
