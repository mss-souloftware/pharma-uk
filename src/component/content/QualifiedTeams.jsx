import Link from 'next/link';
import React from 'react'; 
import ContentSection3 from './Reviews';

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
    <img 
      src="https://media.gettyimages.com/id/1468678629/photo/portrait-healthcare-and-tablet-with-a-doctor-woman-at-work-in-a-hospital-for-research-or.jpg?s=612x612&w=0&k=20&c=8mSMYs7a6eHIZ2EFm-9x6Z2WQHW3uOruYXXzT7JugYI=" 
      alt="Doctor" 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
    />
  </div> 
 

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/insta-icon.png" alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/facebook-icon.png" alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/twitter.icon.png" alt="Twitter Icon" />
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
      <img 
        src="https://media.gettyimages.com/id/611893544/photo/pharmacist-working-at-the-drugstore.jpg?s=612x612&w=0&k=20&c=RjGCX0PqJkuAtsAW1q5Lpfjxf_MzSzjOLx0s9DBNAjs=" 
        alt="Doctor" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/insta-icon.png" alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/facebook-icon.png" alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/twitter.icon.png" alt="Twitter Icon" />
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
      <img 
        src="https://media.gettyimages.com/id/1448766657/photo/portrait-of-businessman-standing-in-hospital.jpg?s=612x612&w=0&k=20&c=ycBHkLMYNsV7Z9MLIcaGo5WpdjxdJ5qiT5h_IhK8PYE=" 
        alt="Doctor" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/insta-icon.png" alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/facebook-icon.png" alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/twitter.icon.png" alt="Twitter Icon" />
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
      <img 
        src="https://media.gettyimages.com/id/955995258/photo/portrait-mature-male-pharmaceutist.jpg?s=612x612&w=0&k=20&c=z5WFaqGcA_oscY25Yty1-RX2hIicVjV_KIwnd_gI90k=" 
        alt="Doctor" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/insta-icon.png" alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/facebook-icon.png" alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/twitter.icon.png" alt="Twitter Icon" />
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
      <img 
        src="https://media.gettyimages.com/id/627872686/photo/shop-assistant-in-drug-store.jpg?s=612x612&w=0&k=20&c=bRarRthzty-E8b0BO0Fz99a2IpQu_chulQpvPJxLpIA=" 
        alt="Doctor" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>  

    {/* Social Media Icons */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
      <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/insta-icon.png" alt="Instagram Icon" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/facebook-icon.png" alt="Facebook Icon" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800">
        <img src="/twitter.icon.png" alt="Twitter Icon" />
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
