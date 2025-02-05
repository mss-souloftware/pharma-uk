import React from 'react'
import ProductHeader from './productHeader'
import ProductsCard from './productsCard' 
import FAQAccordion from './faqAccordion' 
import Consulting from './consulting'

const ErectileDysfunctionPage = () => {
  return (
    <div className='container mx-auto mt-20'>
    <ProductHeader/>
    <div className='mt-20'>
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

export default ErectileDysfunctionPage
