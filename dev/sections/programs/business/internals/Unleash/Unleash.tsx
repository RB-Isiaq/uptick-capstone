import Image from 'next/image';
import React from 'react';
import { HeadText, SubText, SubText2, SubText3 } from './constants';
import { UNLEASH_BUSINESS } from '@/public';

export const Unleash = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <div
        className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 md:py-[80px] px-3 md:px-6 lg:px-3 font-raleway"
        id="unleash"
      >
        <Image
          src={UNLEASH_BUSINESS}
          alt="business"
          className="roundex-2xl w-full lg:max-w-[586px]"
        />
        <div className="flex flex-col gap-[16px] md:gap-[30px] w-full lg:max-w-[586px]">
          <h1 className="text-[#000]  text-[32px] md:text-[48px] font-bold">
            {HeadText}
          </h1>
          <p className="text-[#000]  text-lg">{SubText}</p>
          <p className="text-[#000] text-lg"> {SubText2}</p>
          <p className="text-[#000] text-lg"> {SubText3}</p>
        </div>
      </div>
    </section>
  );
};
