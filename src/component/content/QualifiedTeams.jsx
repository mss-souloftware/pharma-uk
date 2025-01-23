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
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Fetch the data from the JSON file
  useEffect(() => {
    fetch("/qualifiedTeamHomePage.json")
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setIsLoading(false); // Set loading to false even in case of error
      });
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="block mx-auto text-center text-xl lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl font-semibold mb-10 sm:mb-12 xl:mb-16">
          A fully Qualified{" "}
          <span className="text-hoverUnderlineColor">team</span>
        </h1>

        {/* Conditionally render Swiper or Grid based on loading state */}
        {isLoading ? (
          // Show skeleton loader while data is loading
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array(5).fill().map((_, index) => (
              <div key={index} className="card w-full">
                <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-normal rounded-lg shadow-lg overflow-hidden group">
                  {/* Skeleton for Image */}
                  <Skeleton height={150} width={400} className="mb-4" />
                  {/* Skeleton for GPhC Number */}
                  <Skeleton height={20} width="80%" className="mb-2" />
                  {/* Skeleton for name */}
                  <Skeleton height={20} width="60%" className="mb-4" />
                </div>
              </div>
            ))}
          </div>
        ) : isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Show one slide at a time
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
                  <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-bold rounded-lg shadow-lg overflow-hidden group">
                    <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-thin text-white p-2 rounded-lg shadow">
                      <p>GPhC Number: {member.gphcNumber}</p>
                    </div>
                    <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-101">
                      <Image
                        src={member.image}
                        alt={member.name}
                        height={150}
                        width={400}
                        className="transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full"
                      />
                    </div>
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
                  <h2 className="xl:text-xl md:text-base text-sm font-normal mt-4">
                    {member.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamData.map((member) => (
              <div key={member.id} className="card w-full">
                <div className="card__content text-center relative h-[300px] p-4 text-hoverUnderlineColor font-normal rounded-lg shadow-lg overflow-hidden group">
                  <div className="absolute top-0 right-0 z-50 bg-hoverUnderlineColor bg-opacity-80 text-sm font-normal text-white p-2 rounded-lg shadow">
                    <p>GPhC Number: {member.gphcNumber}</p>
                  </div>
                  <div className="card__front absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-101">
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={150}
                      width={400}
                      className="transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full"
                    />
                  </div>
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
                <h2 className="xl:text-xl md:text-base text-sm font-normal mt-4">
                  {member.name}
                </h2>
              </div>
            ))}
          </div>
        )}

        <div>
          {/* Assuming ReviewsByPlatforms is another component */}
          <ReviewsByPlatforms />
        </div>
      </div>
    </>
  );
};

export default QualifiedTeams;
