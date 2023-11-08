import Image from 'next/image';
import React from 'react';
import { HeadText, SubText, SubText2, SubText3 } from './constants';
import { UNLEASH_BUSINESS } from '@/public';

export const Unleash = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 md:py-[80px] px-3 font-raleway">
      <Image src={UNLEASH_BUSINESS} alt="beginner" />
      <div className="flex flex-col gap-[16px] md:gap-[30px] w-full max-w-[586px]">
        <h1 className="text-[#000]  text-[32px] md:text-[48px] font-bold">
          {HeadText}
        </h1>
        <p className="text-[#000]  text-lg">{SubText}</p>
        <p className="text-[#000] text-lg"> {SubText2}</p>
        <p className="text-[#000] text-lg"> {SubText3}</p>
      </div>
    </div>
  );
};
