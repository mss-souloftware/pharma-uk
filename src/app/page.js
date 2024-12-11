// Page.jsx
import React from 'react';
import Hero from '@/component/Hero/Hero'; // Correct import 
import Content from '@/component/Content/SliderText';
import MainContent from '@/component/Content/MainContent';

const Page = () => {
  return (
    <>
      <Hero />
      <Content/>
      <MainContent/>
    </>
  );
};

export default Page;  // Make sure it's a default export
