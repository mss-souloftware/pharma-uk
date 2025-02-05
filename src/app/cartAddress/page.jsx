import React from 'react'
import CartAddress from './cartAddress'
import Link from 'next/link'

const CartAdd = () => {
  return (
    <>
      <CartAddress/>
      <div className='flex items-center justify-center '>
      <Link href="/cartAddress">
        <button 
          className=" px-4 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-2 mt-2 w-[30vw] sm:w-1/5 md:w-[15rem] lg:w-[15rem] sm:h-[6vh] h-[4vh] lg:h-[4vh] xl:h-[5vh] text-xs sm:text-sm lg:text-base text-white font-semibold rounded-lg shadow-lg bg-hoverUnderlineColor hover:bg-[#96192e] transition-transform duration-300 ease-in-out sm:leading-[1rem]"
          >
          Continue to Payment
        </button>
          </Link>
      </div>
    </>
  )
}

export default CartAdd
