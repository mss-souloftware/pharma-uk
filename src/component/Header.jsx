import Link from 'next/link'
import React from 'react'
import './style/Header.css'

const Header = () => {
  return (
    <div className="flex justify-around bg-hoverUnderlineColor p-4 sm:none">
      {/* Phone and Email Section */}
      <div className="phone-email-section lg:gap-20 sm:gap-10 sm:text-xs md:text-base flex items-center justify-around  ">
        <div className='flex justify-center'>
          <img src="/phone-icon.png" alt="Phone" className='w-7 mr-3 logoImg sm:w-3 md:w-6 ' /> 
          <span className='text-white text'>Phone: +163--654123</span>
        </div>

        <div className='flex justify-center'>
          <img src="/email-icon.png" alt="Email" className='w-7 mr-3 logoImg sm:w-3  md:w-6' />
          <span className='text-white text'>Email: David@gmial.com</span>
        </div>
      </div> 

      {/* Social Media Icons */}
      <div className="social-media-section  flex items-center justify-around md:justify-end ">
  <div className="flex space-x-4">
    <Link href="/">
      <img
        src="/insta-icon.png"
        alt="Instagram"
        className="w-3 md:w-5 hover:scale-110 transition-transform"
      />
    </Link>
    <Link href="/">
      <img
        src="/facebook-icon.png"
        alt="Facebook"
        className="w-3 md:w-5 hover:scale-110 transition-transform"
      />
    </Link>
    <Link href="/">
      <img
        src="/twitter.icon.png"
        alt="Twitter"
        className="w-3 md:w-5 hover:scale-110 transition-transform"
      />
    </Link>
  </div>
</div>

    </div>
  )
}

export default Header
