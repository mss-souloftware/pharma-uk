// Page.jsx
import React from 'react';
import Hero from '@/component/Hero/Hero'; // Correct import  
import Content from '@/component/content/ProductList';

const Page = () => {
  return (
    <>
    
      <Hero /> 
      <Content/>
    </>
  );
};

export default Page;  // Make sure it's a default export
