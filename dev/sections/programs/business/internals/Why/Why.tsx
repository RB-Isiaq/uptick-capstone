import React from 'react';
import { HeadText, reasons } from './constants';
import Image from 'next/image';

export const Why = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <div className="py-[58px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10">
        <h1 className="font-raleway text-[#000] text-[36px] mb:text-[42px] mb-[45px] font-bold">
          {HeadText}
        </h1>

        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="my-10 w-full max-w-[784px] flex justify-between gap-3 md:gap-[54px]"
          >
            <div>
              <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
                <Image src={reason.icon} alt="right arrow" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <h1 className="text-[#111] font-semibold text-2xl leading-[38px]">
                {reason.title}
              </h1>
              <p className="text-[#000] md:text-2xl md:leading-[38px]">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
