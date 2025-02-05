"use client";
import React, { useEffect, useState } from "react";
import SimpleMap from "./map"; 
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import Card from "./card";
import Policy from "./policy"; 
import CompanyInfo from "../about/companyInformation";

const ContactPage = () => {
  const [information, setInformation] = useState(null);
  const [informationText, setInformationText] = useState(null);
  const [informationTiming, setinformationTiming] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ContactInformation.json");
        const data = await response.json();
        setInformation(data.informationData);
        setInformationText(data.informationText); // Set informationText data
        setinformationTiming(data.informationTiming);
      } catch (error) {
        console.error(error.message);
        console.log("some error occurs in fetching data ");
      }
    };
    fetchData();
  }, []);
  return (
    <>  
        <div className="flex justify-center items-center sm:my-6 ">
          <SimpleMap />
        </div>
        <div>
          <CompanyInfo/>
        </div>
    <div>
      <HowDoesItWorks/>
    </div>
      
      <Card />
      <Policy />
    </>
  );
};

export default ContactPage;
