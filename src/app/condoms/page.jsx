import React from 'react'
import ProductHeader from './productHeader'
import ProductsCard from './productsCard'
import Consulting from './Consulting'
import FAQAccordion from './faqAccordian'

const CondomsPage = () => {
  return (
    <div className='container mx-auto mt-20'>
      <ProductHeader/>
      <div className='mt-10 sm:mt-20'>
      <ProductsCard/>
      </div>
      <div className='mt-20'>
        <Consulting/>
      </div>
      <div className='mt-20'>
      <FAQAccordion/>
      </div>
    </div>
  )
}

export default CondomsPage
