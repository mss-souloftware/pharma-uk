import Image from "next/image";
import React from "react";

const Card = () => {
  const data = [
    {
      firstHeading: "Call NHS 111",
      description: "Call NHS 111 if you urgently need medical help or advice but it's not a life-threatening situation.",
      img: "/contact/tickIcon.svg",
      additionalInfo: [
        "About NHS 111.",
        "Visit the NHS 111 BSL interpreter service."
      ]
    },
    {
      firstHeading: "Emergency Contact",
      description: "If you are experiencing a life-threatening emergency, please call 999 immediately.",
      img: "/contact/tickIcon.svg",
      additionalInfo: [
        "For critical medical situations.",
        "Ambulance, police, or fire services available."
      ]
    },
    {
      firstHeading: "Mental Health Support",
      description: "For urgent mental health support, call NHS 111 or visit your nearest mental health crisis service.",
      img: "/contact/tickIcon.svg",
      additionalInfo: [
        "24/7 mental health support services.",
        "Speak to trained professionals."
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-6 sm:px-10 py-8 gap-10">
      
      {/* First Column (Text & Image) */}
      <div className="flex flex-col space-y-10 items-center lg:items-start">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center lg:text-start">
          Quick Help, <br /> Our Priority!
        </h2>

        {/* Image */}
        <Image
          src="/contact/image.svg"
          alt="image"
          height={300}
          width={300}
          className="w-full max-w-[30rem] sm:max-w-[25rem] md:max-w-[28rem] lg:max-w-[30rem]"
        />
      </div>

      {/* Second Column (Info Cards) */}
      <div className="flex flex-col space-y-10">
        
        {/* Paragraph */}
        <p className="text-center lg:text-left text-gray-700 text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>

        {/* Info Cards */}
        <div className="flex flex-col space-y-8">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{item.firstHeading}</h1>
              <p className="text-gray-700 leading-7">{item.description}</p>
              
              {/* List with Icons */}
              <ul className="mt-3">
                {item.additionalInfo.map((info, idx) => (
                  <li key={idx} className="flex items-center font-semibold my-2">
                    <div className="w-6 h-6 sm:flex items-center justify-center bg-hoverUnderlineColor rounded-full mr-3 hidden ">
                      <Image src={item.img} alt="tick" height={15} width={15} className="w-4  " />
                    </div>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Card;
