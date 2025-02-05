import React from 'react'
import ProductHeader from './ProductHeader' 
import ProductsCard from './ProductsCard'
import ConsultingCard from './Consulting'
import FAQAccordion from './faqAccordion'

const LubePage = () => {
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

export default LubePage
