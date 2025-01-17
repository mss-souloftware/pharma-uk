import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <div className="relative">
          {/* SVG Quote Icon (Opening) */}
          <svg
            className="h-6 sm:h-8 lg:h-10 mx-8 mb-3 text-hoverUnderlineColor dark:text-gray-600 relative"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
          </svg>

          {/* Testimonial Title */}
          <div className="mb-10 mx-[5rem] w-auto">
            {title.length > 20 ? title.slice(0, 150) + "..." : title}
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center mx-[5rem]">
        <div>
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500"
          >
            {clientInfo}
          </Typography>
        </div>
        <img src={img} className="max-w-[8rem]" alt={client} />
      </CardBody>
    </Card>
  );
}

export function Review() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/clientReviews.json"); // Replace with your correct path
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data.testimonials); // Ensure the fetched data matches the expected structure
      } catch (error) {
        console.error("Error fetching testimonials:", error.message);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array ensures the fetch runs only once

  return (
    <section className="sm:px-8 py-10">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-5xl text-center mb-8 xl:mb-16"
        >
          <span className="text-hoverUnderlineColor">Real Stories, Real Impact</span>
        </Typography>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6"
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              &quot;Its intuitive design and powerful features make it
              indispensable. I can&apos;t imagine going back to life before
              it!&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <img
              src="/image/spotify.svg"
              className="max-w-[8rem] mx-auto grayscale"
              alt="spotify"
            />
            <Typography variant="h6" color="blue-gray">
              Emma Roberts
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              Chief Executive @Spotify
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Review;
