import Image from 'next/image'
import React from 'react'

const CustomerReviews = () => {
  return (
    <>
      <h1 className='text-7xl font-semibold leading-relaxed container mx-auto text-gray-800 my-6 '>What Our Client About Says</h1>
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full grid container mx-auto grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-0">
        
        {/* Image Section */}
        <div className="my-4 flex justify-center items-center order-2 sm:order-1">
          <Image
            src="/customerReview.png"
            width={150} // Smaller size for xs devices
            height={30}
            alt="Customer Review Image"
            className="bg-cover  max-w-xs sm:max-w-md md:max-w-md w-48 sm:w-full mb-8 sm:mb-0 hidden sm:block"
          />
        </div>
    
        {/* Text */}
        <div className="flex flex-col sm:gap-y-4 lg:ml-5 my-[2rem] sm:my-[3rem] ">
  {/* Heading */}
  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-relaxed">
    Customer <span className="text-hoverUnderlineColor">Reviews</span>
  </h3>

  {/* Star Icons in Inline Flex */}
  <div className="flex items-center gap-x-2">
    {[...Array(5)].map((_, index) => (
      <Image
        key={index}
        src="/icons/staricn.png"
        alt="Star Icon"
        width={29}
        height={29}
        quality={100} // Ensures high-quality rendering
        className="object-contain justify-center items-center xl:w-10 "
      />
    ))}
  </div>
  <p className='font-light flex justify-center items-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi earum assumenda unde ipsum magni fuga! Similique doloribus expedita perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum magnam sapiente repellendus id minus enim qui eaque sequi, libero similique, magni, quidem est consequuntur. Maiores saepe beatae quo neque magnam
  </p>
  <span className='text-green-600'>TrustPilot !</span>
</div>



      </div>
    </div>
    </>
  )
}

export default CustomerReviews
