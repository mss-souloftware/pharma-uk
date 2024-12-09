// Page.jsx
import React from 'react';
import Hero from '@/component/Hero'; // Correct import
import Content from '../component/Content';  // Correct import for default export

const Page = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Page;  // Make sure it's a default export
