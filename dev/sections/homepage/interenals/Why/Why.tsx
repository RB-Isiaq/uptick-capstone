import React from 'react';
import { HeadText, reasons } from './constants';
import Image from 'next/image';
import Header from '@/components/Header';

export const Why = () => {
  return (
    <section className=" bg-[#EDF2FF] py-[50px]" id="why">
      <div
        id="why"
        className="w-full flex flex-col justify-center items-center gap-[48px]  px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto"
      >
        <Header title={HeadText} color="#000" />
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-around items-center gap-3 lg:gap-1">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="w-full md:w-[311px] md:h-[309px] flex flex-col  gap-[15px] items-start p-[30px] border border-[#4D4D4D] rounded-2xl bg-[#1C1C1C] hover:shadow-lg  transition-all"
            >
              <Image src={reason.icon} alt={reason.title} />
              <h1 className="md:w-[232px] font-raleway  text-[24px] leading-[38.4px] text-[#DAE5FF] font-medium">
                {reason.title}
              </h1>
              <p className="md:w-[251px] font-raleway   leading-[160%] text-[#B3B3B3]">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
