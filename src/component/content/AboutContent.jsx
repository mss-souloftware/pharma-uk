import Link from 'next/link';
import React from 'react'
import ContentSection2 from './QualifiedTeams';
import Image from 'next/image';

const ContentSection = () => {
  return (
    <>
   
    <div className='mt-[40rem] sm:mt-[20rem] md:mt-[20rem] lg:mt-0  w-full relative mx-auto block border-2 border-solid border-transparent'>
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
        <div className='lg:w-1/2 w-full text-center mt-14 lg:text-left lg:pl-8 order-1 lg:order-2'>
          <h3 className='text-xl sm:text-2xl font-bold mb-6 text-hoverUnderlineColor '>
            <Image 
            src="/about-logo.png"
               width={40}
               height={40} 
             alt="" className=' xl:h-12 xl:w-12 md:h-12 md:w-12 h-7 w-7  xl:mb-8 inline-block '  />
<span className='text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl'>
            About Us Company
</span>
          </h3>
          <h1 className='text-xl lg:text-3xl xl:text-3xl md:text-2xl font-extrabold mb-8 '>
            Affordable Health Care Solutions
          </h1>
          <p className='text-base mb-8 text-gray-500 text-sm sm:text-base '>
            A brief statement outlining the purpose and mission of the clinic. This can include the commitment to patient care, community health, and any specific goals for our values. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempore quas illum in nulla officiis molestiae nemo necessitatibus optio beatae.
          </p>
          <Link href='#' className='px-6 py-3 bg-hoverUnderlineColor  text-white rounded-lg'>
            More About Us
          </Link>
        </div>

      </div>
    </div>
     
      </>
  )
}

export default ContentSection;
