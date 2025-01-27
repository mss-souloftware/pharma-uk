import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for Skeleton
import ReviewsByPlatforms from "./ReviewsByPlatforms";

const QualifiedTeams = () => {
  const [teamData, setTeamData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the data from the JSON file
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

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="block mx-auto text-center text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-semibold mb-10 sm:mb-12 xl:mb-16 text-hoverUnderlineColor">
          A Fully Qualified{" "}
          <span className="text-hoverUnderlineColor">Team</span>
        </h1>

        {/* Conditionally render Swiper or Grid based on loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div key={index} className="card w-full">
                  <div className="card__content text-center relative h-[300px] p-4 bg-gray-800 font-normal rounded-lg shadow-lg overflow-hidden">
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
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="card w-full">
                  <div className="card__content text-center relative h-[300px] p-4 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div>
                        <p className="text-sm text-red-500 mb-2">
                          GPhC Number: {member.gphcNumber}
                        </p>
                        <h2 className="text-lg font-bold">{member.name}</h2>
                        <div className="flex justify-center mt-4">
                          {member.socialLinks.map((link, index) => (
                            <Link key={index} href={link.url} target="_blank">
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
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={150}
                      width={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamData.map((member) => (
              <div key={member.id} className="card w-full">
                <div className="card__content text-center relative h-[300px] p-2 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div>
                      <p className="text-sm text-red-500 mb-2">
                        GPhC Number: {member.gphcNumber}
                      </p>
                      <h2 className="text-lg font-bold">{member.name}</h2>
                      <div className="flex justify-center mt-4">
                        {member.socialLinks.map((link, index) => (
                          <Link key={index} href={link.url} target="_blank">
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={150}
                    width={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div>
          <ReviewsByPlatforms />
        </div>
      </div>
    </>
  );
};

export default QualifiedTeams;
