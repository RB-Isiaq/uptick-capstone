import React from 'react';
import { HeadText, reasons } from './constants';
import Image from 'next/image';
import Header from '@/components/Header';

export const Why = () => {
  return (
    <div
      id="why"
      className="w-full flex flex-col justify-center items-center gap-[90px] bg-[#E7E7E7] py-[136px]  px-3 xl:px-[100px] md:px-10"
    >
      <Header title={HeadText} />
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center gap-3">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="w-full sm:w-[360px] h-[298px] flex flex-col justify-center gap-4 items-center py-5 border border-[1px,solid,#808080] bg-[white] hover:shadow-lg hover:scale-105 transition-all"
          >
            <Image src={reason.icon} alt={reason.title} />
            <h1 className="w-[320px] font-poppins  text-[25px] leading-[30px] text-uptickBlack text-center font-medium">
              {reason.title}
            </h1>
            <p className="w-[320px] font-poppins  text-[14px] leading-[28px] text-uptickBlack opacity-80 text-center font-medium px-3">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
