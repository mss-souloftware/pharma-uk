import Link from 'next/link'
import React from 'react'

const AddToCart = () => {
  return (
    <div className=' sm:w-4 md:w-5 xl:w-8 mr-0'>
      <Link href='/'>
      <img src="/addToCart.png" alt="addtocart" className='mr-0 ' />
      </Link>
    </div>
  )
}

export default AddToCart
