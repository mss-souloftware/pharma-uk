import React from 'react'; 

export default function Footer() {
    return (
        <>
        <footer
            className="rounded-t-lg  border-2 border-solid border-hoverUnderlineColor  bg-black  mt-16 mx-auto text-center text-neutral-600 dark:text-neutral-200 lg:text-left"
            style={{
              position: 'relative', // Make sure the footer is positioned relative
             
              width: '100%',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.7)', // Add shadow to the footer
          }}
            >
            <div
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',  // Dark overlay to create shadow effect
              zIndex: 1,  // Ensure the overlay is above the background image
            }}
             className="flex items-center justify-center border-b-2 border-hoverUnderlineColor p-6 dark:border-hoverUnderlineColor lg:justify-between">
                <div className="mr-12 hidden lg:block">
                    <span className='text-white'>Get connected with us on social networks:</span>
                </div>
                {/* Social network icons container */}
                <div className="flex justify-center">
                    
                    {/* Add your social media icons here */}
                    <a className="mr-6 text-white dark:text-neutral-200">
                        {/* SVG Icon Here */}
                    </a>
                </div>
            </div>

            {/* Main container div: holds the footer content */}
            <div
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',  // Dark overlay to create shadow effect
              zIndex: 1,  // Ensure the overlay is above the background image
            }}
            className="mx-6 py-10 text-center md:text-left">
                <div
                
                className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-white">
                    {/* TW Elements section */}
                    <div>
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            {/* SVG Icon Here */}
                            ifeelshy
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    {/* Products section */}
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Popular Treatments
                        </h6>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">Erectile Dysfunction</a>
                        </p>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">Weight Loss</a>
                        </p>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">Hair Loss</a>
                        </p>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">Sexual Health</a>
                        </p>
                        {/* Continue for other products */}
                    </div>
                    {/* Useful links section */}
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Learn More
                        </h6>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">How it Works</a>
                        </p>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">About Us</a>
                        </p>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">Health Hub</a>
                        </p>
                        <p className="mb-4">
                            <a className="text-white dark:text-neutral-200">Work for Us</a>
                        </p>
                       
                        {/* Continue for other links */}
                    </div>
                    {/* Contact section */}
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Get In Touch
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <img src="/phone-icon.png" className=' sm:w-3 md:w-3 lg:w-5 w-3 mr-2' alt="" />
                        <a className="text-white dark:text-neutral-200">Phone: +92323471232</a>
                        </p>

                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <img src="/email-icon.png" className=' sm:w-3 md:w-3 lg:w-5 w-3 mr-2' alt="" />
                        <a className="text-white dark:text-neutral-200">Email: 123@gmail.com</a>
                        </p>


                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <img src="/sms.png" className=' sm:w-3 md:w-3 lg:w-5 w-3 mr-2'  alt="" />
                        <a className="text-white dark:text-neutral-200">Text(SMS): 8818</a>
                        </p>

                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',  // Dark overlay to create shadow effect
              zIndex: 1,  // Ensure the overlay is above the background image
            }}
            className="bg-transparent p-6 text-center dark:bg-neutral-700">
                <span className='text-white'>© 2023 Copyright:</span>
                <a className="font-semibold text-hoverUnderlineColor dark:text-hoverUnderlineColor " href="https://tw-elements.com/">ifeelshy</a>
            </div> 
        </footer>

            </>
    );
}