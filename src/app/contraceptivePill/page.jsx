import React from 'react'
import ProductHeader from './productHeader'
import ConsultingCard from './consulting'
import FAQAccordion from './faqAccordion' 
import ProductsCard from './ProductsCard'

const ContraceptivePillPage = () => {
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

export default ContraceptivePillPage
