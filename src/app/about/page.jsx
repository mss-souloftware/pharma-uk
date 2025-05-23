"use client";
import React from "react";
import "./page.css";
import Image from "next/image"; 
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import QualifiedTeamAboutPage from "@/component/qualifiedTeamAboutPage";  
import CompanyInformation from "./companyInformation"; 
import AboutHero from "./aboutHero";
import AboutImages from "./aboutImages";
import PharmaRegulation from "./PharmaRegulation";
import CustomerReviews from "./customerReviews"; 
import Article from "./article";

const AboutPage = () => {
  return (
    <div className="mt-20 w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AboutHero/>
      </div>

      {/* About Images Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AboutImages/>
      </div>

      {/* Customer Reviews */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <CompanyInformation/>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <PharmaRegulation/>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <CustomerReviews/>
      </div>

      {/* Our Qualified Team Section */}
      <div className=" max-w-7xl">  
            <QualifiedTeamAboutPage />
        
      </div>
<Article/>
    </div>
  );
};

export default AboutPage;
