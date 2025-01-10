import Link from 'next/link';
import React from 'react'

const CompleteBtn = ({hrefLink, className}) => {
  return (
    <Link href={hrefLink} >
    <button className={className}>
    Complete  
    </button>
    </Link>
  )
}

export default CompleteBtn;
