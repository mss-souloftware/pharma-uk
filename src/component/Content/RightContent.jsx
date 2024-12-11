import React from 'react';
import FirstRightContent from './FirstRightContent';
import SecondRight from './SecondRight';
import ThirdRightContent from './ThirdRightContent';

const RightContent = () => {
  return (
    <div className="grid grid-rows-4 gap-4 w-full sm:w-[50%] sm:grid-cols-1 sm:grid-rows-4 bg-[#FCFBFA]">
      <div className="row-span-1 p-2 border border-transparent">
        <FirstRightContent />
      </div>
      <div className="row-span-1 p-2 border border-transparent">
        <SecondRight />
      </div>
      <div className="row-span-1 p-2 border border-transparent">
        <ThirdRightContent />
      </div>
    </div>
  );
}

export default RightContent;
