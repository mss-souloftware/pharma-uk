import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContentSection3 from './Reviews';

const ContentSection2 = () => {
  const [teamData, setTeamData] = useState([]);

  // Fetch the data from the JSON file
  useEffect(() => {
    fetch('/qualifiedTeamHomePage.json')
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error('Error fetching team data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 mt-28">
      <h1 className="block mx-auto text-center text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-extrabold mb-16">
        A fully Qualified <span className="text-hoverUnderlineColor">team</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {teamData.map((member) => (
          <div key={member.id} className="card w-full">
            <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
              
              {/* GPhC Number */}
              <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-medium text-white p-2 rounded-lg shadow">
                <p>GPhC Number: {member.gphcNumber}</p>
              </div>

              {/* Image */}
              <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Social Media Icons */}
              {/* Social Media Icons */}
<div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-hoverUnderlineColor py-3">
  {member.socialLinks.map((link, index) => (
    <Link key={index} href={link.url} target="_blank">
      <Image
        src={link.icon}
        width={20}
        height={20}
        alt={`${link.platform} Icon`}
      />
    </Link>
  ))}
</div>
            </div>

            {/* Doctor's Name */}
            <h2 className="xl:text-xl md:text-base text-sm font-semibold mt-4">
              {member.name}
            </h2>
          </div>
        ))}
      </div>

      <ContentSection3 />
    </div>
  );
};

export default ContentSection2;
