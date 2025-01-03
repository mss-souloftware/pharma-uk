"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductHeader = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const dataFetched = async () => {
      try {
        const res=await fetch('/ProductHeaderContent.json');
        const data=await res.json();
        setFetchData(data.HeaderContent);
      } catch (error) { 
        console.log("Some error occurs in fetching data");
      }
    };
    dataFetched();
  }, []);
  return (
    <>
      {/* Main Content Section */}
      <div className="container mx-auto mb-[70px] px-4 sm:px-6 lg:px-8">
        <div className="grid w-full h-auto gap-4 p-0 relative">
          {/* Company Information Section */}
          <div className="w-full my-8">
                {
                    fetchData.length > 0 ?(

                        fetchData.map((item)=>(
                            <h1 key={item.label} className="block ml-2 xl:ml-0 justify-start text-xl lg:text-[48px] font-extrabold">
                                {item.title}
                        </h1>
                    ))
                ) :(
                    <></>
                )
                }
            <div className="grid grid-rows-2 sm:grid-cols-1 xl:grid-cols-[30%_70%]  lg:grid-cols-[40%_60%] lg:grid-rows-1 gap-y-6 sm:gap-y-4 h-auto lg:h-auto">
              {/* Text Section */}
              <div className="mt-7 pr-20 order-2 lg:order-1  ">
                <p className="tracking-wide  ">
                  <span className="block">
                    This website is operated by Pharmica Ltd. Pharmica Ltd is
                    registered
                  </span>
                  <span className="block">
                    in England and Wales under company number{" "}
                    <span className="text-hoverUnderlineColor">9668055</span>
                  </span>
                  <span className="block">
                    DUNS Number:{" "}
                    <span className="text-hoverUnderlineColor">
                      22-097-8327
                    </span>
                  </span>
                  VAT Number:{" "}
                  <span className="text-hoverUnderlineColor">
                    GB 217 7259 95
                  </span>
                </p>
                <h1 className="block lg:text-xl font-bold my-2">
                  Registered Office:
                </h1>
                <p className="tracking-wide w-full sm:w-[276px]">
                  <span className="block">
                    Registered Office: 236 Gray&apos;s Inn Rd London WC1X 8HB
                    United
                  </span>
                  <span className="block">
                    Kingdom 020 7112 9014
                    <span className="block text-hoverUnderlineColor font-semibold">
                      help@pharmica.co.uk
                    </span>
                  </span>
                </p>
              </div>

              {/* Image Section */}
              <div className="mt-7 w-full relative order-1 lg:order-2">
                <Image
                  src="/bg3.png"
                  width={400}
                  height={60}
                  className="w-full bg-cover h-[310px] sm:h-[300px] lg:h-[290px]"
                  alt="Building"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
