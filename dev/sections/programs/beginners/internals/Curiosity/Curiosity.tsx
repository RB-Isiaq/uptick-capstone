import Image from 'next/image';
import React from 'react';
import { About, SubText, SubText2, Unlock } from './constants';
import { BEGINNER_UNLOCK } from '@/public';

export const Curiosity = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-[50px] px-3">
      <Image src={BEGINNER_UNLOCK} alt="beginner" />
      <div className="flex flex-col gap-[16px] md:gap-[23px] w-full max-w-[600px]">
        <h1 className="text-[#3256B3] font-raleway text-2xl font-medium">
          {About}
        </h1>
        <h1 className="text-[#111] font-raleway text-[32px] md:text-[60px] font-bold">
          {Unlock}
        </h1>
        <p className="text-[#111]  text-lg pr-3">{SubText}</p>
        <p className="text-[#111] text-lg pr-3"> {SubText2}</p>
      </div>
    </div>
  );
};
