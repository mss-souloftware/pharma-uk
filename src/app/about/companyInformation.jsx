import React from 'react'

const CompanyInformation = () => {
  return ( 
     <div className="container mx-auto mb-[50px] px-4 sm:px-6 lg:px-8">
     <div className="w-full h-auto gap-4 p-0 relative">
       {/* Company Information Section */}
       <div className="my-10 justify-center sm:justify-start">
         <h1 className="flex sm:block ml-2 xl:ml-0 justify-center text-center sm:text-left sm:justify-start text-xl lg:text-[48px] font-semibold">
           Company&nbsp;
           <span className="relative text-hoverUnderlineColor tracking-widest">
             Information
           </span>
         </h1>
   
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-y-4 h-auto w-full">
           {/* Left Section */}
           <div className="mt-7 flex flex-col lg:flex-row lg:justify-between lg:items-start text-center sm:text-left lg:w-[30rem]">
             <div className="md:w-[40rem] lg:w-[20rem] xl:w-full">
               <p className="tracking-wide font-light">
                 <span className="block">
                   This website is operated by Pharmica Ltd. Pharmica Ltd is registered Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, at.
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
             </div>
           </div>
   
           {/* Right Section */}
           <div className="mt-7 flex flex-col lg:flex-row lg:justify-between lg:items-start text-center sm:text-left w-full lg:w-[30rem]">
             <div className="lg:w-full">
               <h1 className="block lg:text-xl font-light ">
                 Registered Office:
               </h1>
               <p className="tracking-wide font-light w-full sm:w-full">
                 Registered Office: 236 Gray&apos;s Inn Rd London WC1X 8HB Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt quam cumque nam blanditiis suscipit quidem nemo error ipsum exercitationem!
                 United Kingdom 020 7112 9014
                 <span className="block text-hoverUnderlineColor font-light">
                   help@pharmica.co.uk
                 </span>
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  )
}

export default CompanyInformation
