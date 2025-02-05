import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; 
import "@/component/content/qualifiedTeam.css" 

const QualifiedTeamAboutPage = () => {
  const [teamData, setTeamData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/qualifiedTeamHomePage.json")
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setIsLoading(false);
      });
  }, []);
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl sm:text-6xl lg:text-[68px] font-semibold leading-tight">
        A Fully Qualified Team
      </h1>
      <p className="text-center py-8 text-gray-700 lg:px-[10rem] xl:px-[20rem] sm:px-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </p>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div key={index} className="card w-full">
                <div className="card__content text-center relative h-[300px] p-4 bg-gray-100 font-normal rounded-lg shadow-lg overflow-hidden">
                  <Skeleton height={150} width="100%" className="mb-4" />
                  <Skeleton height={20} width="80%" className="mb-2" />
                  <Skeleton height={20} width="60%" className="mb-4" />
                </div>
              </div>
            ))}
        </div>
      ) : isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="card w-[20rem] flex flex-col items-center bg-white rounded-lg p-4 shadow-lg overflow-hidden">
                <div className="relative w-full h-[250px] md:h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={250} // Make image size responsive
                    width={400}  // Adjust width to maintain aspect ratio
                    className="object-cover w-full h-full bg-center" // Ensure image covers full width and height
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-lg">
                  <h2 className="text-sm md:text-lg font-semibold">{member.name}</h2>
                  <p className="text-xs md:text-sm text-gray-200">{`GPhC Number: ${member.gphcNumber}`}</p>
                  <p className="text-xs md:text-sm text-gray-300 mt-2">{member.text}</p>
                  <div className="flex justify-center mt-4">
                    {member.socialLinks.map((link, socialIndex) => (
                      <Link key={socialIndex} href={link.url} target="_blank">
                        <Image
                          src={link.icon}
                          width={20}
                          height={20}
                          alt={`${link.platform} Icon`}
                          className="mx-2"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-14">
          {teamData.map((member) => (
            <div key={member.id} className="card w-full relative h-[25rem]">
              <div className="relative image_box flex flex-col items-center justify-end rounded-xl h-[199.37px] p-2 text-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out group hover:h-[344.83px] bg-gray-100 hover:bg-gradient-to-t hover:from-black hover:to-[#ff5c71]">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={350}
                  width={400}
                  className="object-cover image_box w-full h-[10rem] transition-all duration-500 ease-in-out group-hover:h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  srcSet={`${member.image}?w=400&h=350&fit=crop 400w, ${member.image}?w=800&h=700&fit=crop 800w, ${member.image}?w=1600&h=1400&fit=crop 1600w`}
                />
              </div>
              <div className="text_box relative rounded-xl flex flex-col justify-center items-center w-full h-[10rem] gap-1 transition-transform duration-500 ease-in-out group">
                <h2 className="text-lg font-bold">{member.name}</h2>
                <p className="text-xs font-semibold px-2">{`GPhC Number: ${member.gphcNumber}`}</p>
                <p className="text-xs text-center text-gray-600">{member.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QualifiedTeamAboutPage;
