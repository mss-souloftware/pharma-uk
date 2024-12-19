import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partners = () => {
  const [partners, setPartners] = useState([]);

  // Fetch data from the public folder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/partner.json');
        if (!response.ok) {
          throw new Error('Failed to fetch partners data');
        }
        const data = await response.json();
        console.log(data); // Check if data is fetched properly
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false,
  };

  return (
    <div className="mt-32">
      <h1 className='text-hoverUnderlineColor text-xl sm:text-2xl md:text-3xl lg:text-3xl '>Our Partners</h1>
      <Slider {...settings}>
        {/* Map through the partners data to display each partner's name */}
        {partners.length > 0 ? (
          partners.map((partner, index) => (
            <div key={index} className="slick-slide">
              <div className="inner mt-10">
                {/* Replace the image with the partner's name */}
                <div className="text-box">
                  <p className='text-bsae sm:text-base md:text-xl lg:text-2xl'>{partner.name}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="slick-slide">
            <div className="inner mt-10">
              <div className="text-box">
                <p>Loading...</p>
              </div>
            </div>
          </div>
        )}
      </Slider>

      <style jsx>{`
        h1 {
          text-align: center;
          margin: 40px 0;
          font-size: 40px;
          font-family: sans-serif;
          text-transform: uppercase;
          font-weight: bold;
        }

        .slick-slide .inner {
          margin: 0 15px;
        }

        .text-box {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 78px;
          background-color: transparent;  /* Transparent background */
          color: #d1d5db;  /* gray-100 color */
          font-size: 20px;
          font-weight: bold;
          padding: 0 20px;
          text-align: center; /* Ensure text is centered */
        }

        /* Ensure responsiveness */
        @media (max-width: 768px) {
          h1 {
            font-size: 32px;  /* Adjust heading size for smaller screens */
          }

          .text-box {
            font-size: 16px;  /* Adjust text size for smaller screens */
            padding: 0 15px;
            height: 60px;  /* Slightly smaller height for mobile */
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 28px;  /* Further reduce font size for very small screens */
          }

          .text-box {
            font-size: 14px;  /* Adjust text size for very small screens */
            height: 50px;  /* Smaller height for very small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
