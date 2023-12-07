import Image from 'next/image';
import React from 'react';
import { About, SubText, SubText2, Unlock } from './constants';
import { BEGINNER_UNLOCK } from '@/public';

export const Curiosity = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <div
        className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-[50px] px-3 md:px-6 lg:px-6"
        id="curiosity"
      >
        <Image
          src={BEGINNER_UNLOCK}
          alt="beginner"
          className="w-full lg:max-w-[486px] md:h-[430px] rounded-2xl"
        />
        <div className="flex flex-col gap-[16px] md:gap-[23px] w-full lg:max-w-[600px]">
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
    </section>
  );
};
