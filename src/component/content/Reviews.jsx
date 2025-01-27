import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton Styles

function TestimonialCard({ img, description, client, title, clientInfo }) {
  return (
    <Card shadow={true} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <div className="relative text-center">
          <svg
            className="h-8 lg:h-10 text-hoverUnderlineColor mx-auto mb-4"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <Typography variant="h5" color="blue-gray" className="font-normal mb-2">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 overflow-hidden rounded-full shadow-md">
          <Image src={img} alt={client} height={100} width={100} className="w-full h-full object-cover" />
        </div>
        <Typography variant="body2" className="text-gray-600 text-center md:px-[5rem] lg:px-[10rem] xl:px-[20rem]">
          {description}
        </Typography>
        <Typography variant="small" color="blue-gray" className="italic text-gray-500">
          {clientInfo}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function Review() {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true); // Set loading state before fetching
      try {
        const response = await fetch("/clientReviews.json");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error.message);
      } finally {
        setIsLoading(false); // Reset loading state after fetching
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 px-4 sm:px-8 bg-gray-50">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center text-gray-800 mb-10"
        >
          Real Stories, <span className="text-hoverUnderlineColor">Real Impact</span>
        </Typography>

        <div className="relative">
          <div className="relative w-full overflow-hidden">
            {isLoading ? (
              // Show Skeleton Loader while loading
              <div className="p-6">
                <Skeleton height={250} className="rounded-xl mb-4" />
                <Skeleton height={20} className="mb-2" />
                <Skeleton height={15} count={2} className="mb-2" />
              </div>
            ) : (
              testimonials.length > 0 && (
                <TestimonialCard {...testimonials[activeIndex]} />
              )
            )}
          </div>

          {testimonials.length > 1 && !isLoading && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 border border-gray-200 rounded-full shadow-md p-3 hover:bg-hoverUnderlineColor focus:outline-none z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 border border-gray-200 rounded-full shadow-md p-3 hover:bg-hoverUnderlineColor focus:outline-none z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Review;