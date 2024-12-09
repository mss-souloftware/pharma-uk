"use client"; // This marks the file as a client-side component
// Hero.jsx
import React from 'react';
import DemoSlider from './slider/DemoSlider';

const Hero = () => {
  const sliderData = [
    { id: 1, title: 'Your Health', tagline: 'Our Commitment', image: '/HeroImage1.jpg' },
    { id: 2, title: 'Innovating Wellness', tagline: 'One Dose at a Time', image: '/HeroImage2.jpg' },
  ];

  return (
    <section className="hero-section w-full h-[100vh]">
      <DemoSlider data={sliderData} />
    </section>
  );
};

export default Hero;  // Make sure it's a default export
