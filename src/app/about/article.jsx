import Link from 'next/link'
import React from 'react'

const Article = () => {
  return (
    <>
    <Link href="/articlePage">
    <span className='text-hoverUnderlineColor text-base font-semibold underline' >
      Read Article
    </span>
    </Link>
    </>
  )
}

export default Article
