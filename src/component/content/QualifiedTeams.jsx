import Link from 'next/link';
import React from 'react'; 
import ContentSection3 from './Reviews';
import Image from 'next/image';

const ContentSection2 = () => {
  return (
    <div className="container mx-auto p-4 mt-20">
       <h1 className='block mx-auto text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold  text-hoverUnderlineColor mb-16 ' >A fully Qualified team</h1> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Column 1 */}
        <div className="card w-full">
        <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
  {/* Text positioned at the top-right */}
  <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-medium text-white p-2 rounded-lg shadow">
    <p>GPhC Number: 201393442</p>
  </div>

  {/* Image with Subtle Zoom-In Effect */}
  <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
  <Image 
    src="/team-img1.jpg"
    alt="Doctor"
    layout="fill" // This makes the image cover the entire container
    objectFit="cover" // Ensures the image covers the space without stretching
    className="transition-transform duration-500 group-hover:scale-105"
  />
</div>

 

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/insta-icon.png" 
        width={20}
        height={20}
        alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/facebook-icon.png"
         width={20}
         height={20}
        alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/twitter-icon.png"
         width={20}
         height={20}  
        alt="Twitter Icon" />
      </Link>
    </div>
  </div>

  {/* Doctor's Name */}
  <h2 className="xl:text-xl md:text-base text-sm font-semibold mt-4">Dr. Lorem, ipsum dolor.</h2>
</div>





        {/* Column 2 */}
        <div className="card w-full">
  <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
    
     {/* Text positioned at the top-right */}
  <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-medium text-white p-2 rounded-lg shadow">
    <p>GPhC Number: 201393442</p>
  </div>

    {/* Image with Subtle Zoom-In Effect */}
    <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
      <Image 
        src="/team-img2.jpg"
        layout="fill" // This makes the image cover the entire container
    objectFit="cover" // Ensures the image covers the space without stretching
        alt="" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com"

       target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/insta-icon.png" 
        width={20}
        height={20} 
        alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/facebook-icon.png"
        width={20}
        height={20} 
        alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/twitter-icon.png"
        width={20}
        height={20} 
        alt="Twitter Icon" />
      </Link>
    </div>
  </div>

  {/* Doctor's Name */}
  <h2 className="xl:text-xl md:text-base text-sm font-semibold mt-4">Jacquiline</h2>
</div>

        {/* Column 3 */}
        <div className="card w-full">
  <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
     {/* Text positioned at the top-right */}
  <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-medium text-white p-2 rounded-lg shadow">
    <p>GPhC Number: 201393442</p>
  </div>

    {/* Image with Subtle Zoom-In Effect */}
    <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
      <Image 
        src="/team-img3.jpg" 
        layout="fill" // This makes the image cover the entire container
        objectFit="cover" // Ensures the image covers the space without stretching
        alt="Doctor" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/insta-icon.png"
        width={20}
        height={20} 
        alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/facebook-icon.png" 
        width={20}
        height={20} 
        alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/twitter-icon.png"
        width={20}
        height={20} 
        alt="Twitter Icon" />
      </Link>
    </div>
  </div>

  {/* Doctor's Name */}
  <h2 className="xl:text-xl md:text-base text-sm font-semibold mt-4">Leos Morgan</h2>
</div>

        {/* Column 4 */}
        <div className="card w-full">
  <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
     {/* Text positioned at the top-right */}
  <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-medium text-white p-2 rounded-lg shadow">
    <p>GPhC Number: 201393442</p>
  </div>

    {/* Image with Subtle Zoom-In Effect */}
    <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
      <Image 
        src="/team-img1.jpg" 
        alt="Doctor" 
        layout="fill" // This makes the image cover the entire container
        objectFit="cover" // Ensures the image covers the space without stretching
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/insta-icon.png" 
        height={20}
        width={20}
        alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/facebook-icon.png"
        height={20}
        width={20}
        alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/twitter-icon.png"
        height={20}
        width={20}
        alt="Twitter Icon" />
      </Link>
    </div>
  </div>

  {/* Doctor's Name */}
  <h2 className="xl:text-xl md:text-base text-sm font-semibold mt-4">Rory Burns</h2>
</div>

        {/* Column 5 */}
        <div className="card w-full">
  <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
     {/* Text positioned at the top-right */}
  <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-medium text-white p-2 rounded-lg shadow">
    <p>GPhC Number: 201393442</p>
  </div>

    {/* Image with Subtle Zoom-In Effect */}
    <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
      <Image 
        src="/team-img3.jpg" 
        alt="Doctor" 
        layout="fill" // This makes the image cover the entire container
    objectFit="cover" // Ensures the image covers the space without stretching
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/insta-icon.png"
        height={20}
        width={20}
        alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/facebook-icon.png"
        height={20}
        width={20}
        alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <Image src="/twitter-icon.png"
        height={20}
        width={20}
        alt="Twitter Icon" />
      </Link>
    </div>
  </div>

  {/* Doctor's Name */}
  <h2 className="xl:text-xl md:text-base text-sm font-semibold mt-4">Sara Loren</h2>
</div>

      </div>
      <ContentSection3/>
    </div>
  );
};

export default ContentSection2;
