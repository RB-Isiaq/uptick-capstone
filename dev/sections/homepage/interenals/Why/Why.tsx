import React from 'react';
import { HeadText, reasons } from './constants';
import Image from 'next/image';
import Header from '@/components/Header';

export const Why = () => {
  return (
    <section className="bg_gradient">
      <div
        id="why"
        className="w-full flex flex-col justify-center items-center gap-[48px]  py-[101px]  px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto"
      >
        <Header title={HeadText} />
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center gap-3">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="w-[311px] h-[309px] flex flex-col  gap-[15px] items-start p-[30px] border border-[1px,solid,#4D4D4D] rounded-2xl bg-[#1C1C1C] hover:shadow-lg hover:scale-105 transition-all"
            >
              <Image src={reason.icon} alt={reason.title} />
              <h1 className="w-[232px] font-raleway  text-[24px] leading-[38.4px] text-[#7EA3FF] font-medium">
                {reason.title}
              </h1>
              <p className="w-[251px] font-raleway   leading-[160%] text-[#B3B3B3]">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
