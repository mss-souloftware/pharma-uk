"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CompanyInfo = () => {
  return (
    <section
      className="relative mx-auto max-w-6xl px-6 py-12 lg:py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about/reviewBackground.svg')" }} // Change to your actual image path
    > 

      {/* Main Grid Layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-[60%,40%] gap-10 items-center"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-xl sm:text-3xl font-semibold tracking-wider">
            Company Information
          </h3>
          <p className="text-sm leading-relaxed" style={{lineHeight:'30.97px'}} >
          iFeelShy Pharmacy is committed to providing high-quality pharmaceutical products and healthcare solutions to our valued customers. With a focus on safety, reliability, and customer satisfaction, we offer a wide range of prescription and over-the-counter medications, wellness products, and healthcare essentials.
          </p>

          {/* Company Details */}
          <div className="space-y-2 text-sm   text-gray-800" style={{lineHeight:'30px'}}>
            <p>
              <span className="font-semibold">Pharmica Ltd</span> is registered in England
              and Wales under company number{" "}
              <span className="font-semibold text-[#1AB8A3] ">9668055</span>
            </p>
            <p>
              <span className="font-semibold">DUNS Number:</span>{" "}
              <span className="text-[#1AB8A3]">22-097-8327</span>
            </p>
            <p>
              <span className="font-semibold">VAT Number:</span>{" "}
              <span className="text-[#1AB8A3]">GB 217 7259 95</span>
            </p>
          </div>
        </motion.div>

        {/* Right Image & Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/about/informationBackground.svg"
            alt="Company"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg w-full h-auto"
          />

          {/* Registered Office Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-0 right-0 rounded-xl shadow-lg bg-gradient-to-t from-[#1AB8A3] to-[#1AB8A3] text-white p-4 w-52"
            style={{ lineHeight: "30.48px" }}
          >
            <h3 className="font-semibold text-sm">Registered Office:</h3>
            <p className="text-sm">
              236 Gray&apos;s Inn Rd, London, WC1X 8HB, United Kingdom
            </p>
            <p className="text-sm">020 7112 9014</p>
            <p className="text-sm underline">help@freshly.co.uk</p>
          </motion.div>

          {/* Google Reviews Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-4 left-4 bg-black p-2 rounded-md shadow-md"
          >
            <Image
              src="/about/informationGoogleReview.svg"
              alt="Google Reviews"
              width={100}
              height={30}
            />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CompanyInfo;
