import React from 'react';
import { HeadText, SubText, reasons } from './constants';
import Image from 'next/image';

export const Why = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[64px] bg-[#E7E7E7] py-[136px]  px-3 xl:px-[100px] md:px-10">
      <h1 className="font-poppins text-[32px] md:text-[38px] leading-[140%] text-uptickBlack font-semibold text-center">
        {HeadText}
      </h1>
      <p className="font-poppins text-[18px] leading-[32px] text-uptickBlack opacity-80 text-center">
        {SubText}
      </p>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center gap-3">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="w-[285px] h-[310px] flex flex-col justify-center gap-4 items-center py-5 border border-[1px,solid,#808080] bg-[white] "
          >
            <Image src={reason.icon} alt={reason.title} />
            <h1 className="w-[183px] font-poppins  text-[25px] leading-[30px] text-uptickBlack text-center font-medium">
              {reason.title}
            </h1>
            <p className="w-[245px] font-poppins  text-[14px] leading-[28px] text-uptickBlack opacity-80 text-center font-medium px-3">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
