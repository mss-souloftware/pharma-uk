"use client";

import React from "react";
import "./Hero.module.css";
import Heading from "./Heading";
import SubText from "./SubText";
import Button from "../Button"; 
import SearchInput from "./SearchInput";

const Hero = () => {
  return (
    <>
    <div 
      className="relative xl:h-screen w-full bg-cover bg-no-repeat bg-center flex items-center"
      style={{
        backgroundImage: "url('/hero/background (1).svg')",
      }}
      >
      <div className="container mx-auto flex flex-col items-center lg:items-start text-center lg:text-left px-8 py-20  gap-5 ">
         
        <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl  leading-9 " />
        
        <SearchInput/>

        <SubText className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-7 max-w-2xl " />
        
        
      </div>
    </div>

 
      </>
  );
};

export default Hero;