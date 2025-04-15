import ConsultingCard from '@/component/productCategoryComponent/Consulting'
import FAQAccordion from '@/component/productCategoryComponent/FAQAccordion'
import ProductHeader from '@/component/productCategoryComponent/ProductHeader'
import ProductsCard from '@/component/productCategoryComponent/ProductsCard'
import React from 'react'
 

const dynCat = () => {
  return (
    <div className='container mx-auto mt-20'>
      <ProductHeader/>
      <div className='mt-10 sm:mt-20'>
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

export default dynCat
