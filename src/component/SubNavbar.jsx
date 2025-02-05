import Image from "next/image";
import Link from "next/link"; 

const SubNavbar = () => {
  return (
    <>
      <div className="container sm:w-auto w-[20rem] flex justify-center sm:ml-[2rem] border-solid xl:ml-[20rem] sm:border-black sm:bg-black md:mt-[-3px] shadow-lg rounded-b-lg">
        <div>
          <ul className="flex justify-center space-x-12 p-2 md:px-7 relative lg:w-[17rem]  ">
            <li className="relative font-normal cursor-pointer text-white text-xs group">
              <Link href="/about" className="relative">
                About
                <span className="absolute bottom-0 top-[14px]  left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative font-normal cursor-pointer text-white text-xs group">
              <Link href="/contact" className="relative">
                Contact
              <span className="absolute bottom-0 top-[14px]  left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative font-normal cursor-pointer text-white text-xs group">
              <Link href="/faqs" className="relative">
                FAQ
            <span className="absolute bottom-0 top-[14px] left-0 w-0 h-[2px] bg-[#DC143C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
