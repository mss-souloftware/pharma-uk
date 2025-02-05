import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviewsData = [
  {
    id: 1,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    author: "Micheal Gough",
    position: "CEO at Google",
    imgUrl: "/avatar.svg",
  },
  {
    id: 2,
    text: "This product has significantly improved my workflow. Highly recommended for anyone looking to boost productivity.",
    author: "Jane Doe",
    position: "CTO at Facebook",
    imgUrl: "/avatar2.svg",
  },
  {
    id: 3,
    text: "An incredible tool that has streamlined my design process. The flexibility it offers is unmatched.",
    author: "John Smith",
    position: "Designer at Adobe",
    imgUrl: "/avatar2.svg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // For lg screens
      settings: {
        slidesToShow: 2, // Show 2 cards
      },
    },
    {
      breakpoint: 768, // For md screens
      settings: {
        slidesToShow: 2, // Show 2 cards
      },
    },
    {
      breakpoint: 640, // For sm screens
      settings: {
        slidesToShow: 1, // Show 1 card
      },
    },
  ],
};

const Reviews = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 rounded-lg py-8">
      <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
        <Slider {...settings}>
          {reviewsData.map((review) => (
            <div key={review.id} className="px-2 md:px-4 lg:px-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-md w-full max-w-xs h-[350px] p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full mb-7">
                  <Image src={review.imgUrl || '/default-avatar.png'} alt={review.author} width={80} height={80} className="rounded-full" />
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-2">{review.author}</p>
                <p className="text-sm text-gray-600">{review.position}</p>
                <p className="text-xs text-gray-500 mt-4">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
