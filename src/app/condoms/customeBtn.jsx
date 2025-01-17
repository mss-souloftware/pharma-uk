import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style/buttonStyle.css";

const CustomeBtn = ({ buttonText, buttonLink = "/consultation", imageSrc, altText, className = "" }) => {
  return (
    <Link
      href={buttonLink}
      className={`custom-zoom-button text-white bg-hoverUnderlineColor xl:w-64 lg:text-base xl:text-xl rounded-xl py-1 w-52 justify-evenly items-center mt-4 shadow-xl flex flex-row ${className}`}
    >
      <span>{buttonText}</span>
      <Image
        src={imageSrc}
        alt={altText}
        height={29}
        width={20}
        className="relative lg:w-8 ml-2"
      />
    </Link>
  );
};

export default CustomeBtn;
