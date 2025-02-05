import React from 'react'
import ProductHeader from './productHeader'
import ProductsCard from './productsCard'
import ConsultingCard from './consulting'
import FAQAccordion from './faqAccordion'

const Indigestion = () => {
  return (
    <div className='container mx-auto mt-20'>
    <ProductHeader/>
    <div className='mt-20'>
    <ProductsCard/>
    </div>
    <div className='mt-20'>
      <ConsultingCard/>
    </div>
    <div className='mt-20'>
    <FAQAccordion/>
    </div>
  </div>
  )
}

export default Indigestion
