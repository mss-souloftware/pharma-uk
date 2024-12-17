import Link from 'next/link';
import React from 'react'
import ContentSection2 from './ContentSection2';

const ContentSection = () => {
  return (
    <div className='mt-16  w-full relative mx-auto block border-2 border-solid border-transparent'>
      <div className='flex flex-col lg:flex-row items-center'>
        {/* Image Section */}
        <div className='lg:w-1/2 w-full order-2 lg:order-1 mt-16'>
  <video
    className='rounded-lg shadow-2xl w-full h-auto border-2 border-solid border-hoverUnderlineColor'
    controls
    autoPlay
    loop
    muted
    poster="https://media.gettyimages.com/id/696021784/photo/female-physician-listens-to-senior-patients-heart.jpg?s=612x612&w=0&k=20&c=CqbzoircAGeOTWrYV6J3sn3EA1Sa5hzgLaQV-TX2OKM="
  >
    <source
      src="/7088510-uhd_3840_2160_25fps.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

        
        {/* Text Section */}
        <div className='lg:w-1/2 w-full text-center lg:text-left lg:pl-8 order-1 lg:order-2'>
          <h3 className='text-2xl font-bold mb-6 text-hoverUnderlineColor '>
            <img src="/about-logo.png" alt="" className='h-10 w-10 inline-block  ' />
            About Us Company
          </h3>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 font-extrabold'>
            Affordable Health Care Solutions
          </h1>
          <p className='text-base mb-8 text-gray-500'>
            A brief statement outlining the purpose and mission of the clinic. This can include the commitment to patient care, community health, and any specific goals for our values. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore quas illum in nulla officiis molestiae nemo necessitatibus optio beatae.
          </p>
          <Link href='#' className='px-6 py-3 bg-hoverUnderlineColor  text-white rounded-lg'>
            More About Us
          </Link>
        </div>
      </div>
      <ContentSection2/>
    </div>
  )
}

export default ContentSection;
