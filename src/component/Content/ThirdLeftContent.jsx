import React from 'react'

const ThirdLeftContent = () => {
  return (
    <div className="row-span-1 border-transparent  border-solid  flex items-center order-3 sm:order-3">
    {/* Left */}
    <div className="border-2  border-solid border-transparent inline-block sm:w-full sm:mb-4">
      <h1 className="text-8xl font-extrabold text-hoverUnderlineColor sm:text-5xl tracking-widest">
        200+
      </h1>

      <p className=" text-gray-600  sm:text-sm">Patient served every day</p>
    </div>
    {/* Right */}
    <div className="  border-solid border-transparent inline-block  border-transparent sm:w-full sm:ml-0 -mt-4">
      <h1 className="text-8xl font-extrabold   text-hoverUnderlineColor sm:text-5xl tracking-widest">
        1000+
      </h1>

      <p className="text-gray-600  sm:text-sm">
        Medical team around the world
      </p>
    </div>
  </div>
  )
}

export default ThirdLeftContent
