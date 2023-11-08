import Image from 'next/image';
import React from 'react';
import { HeadText, SubText, SubText2 } from './constants';
import { COMMITMENT_BUSINESS } from '@/public';

export const Commitment = () => {
  return (
    <section className="bg-[#070C19] py-[100px]">
      {/* <section className="bg-gradient-to-r from-[#1C1C1C] to-[#070C19]"> */}
      <div className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 lg:py-[60px] px-3 lg:px-[60px] font-raleway rounded-2xl border border-[1px,solid,#ACABAB] bg-[#1A1A1A]">
        <div className="flex flex-col gap-[16px] md:gap-[30px] w-full max-w-[586px]">
          <h1 className="text-[#fff]  text-[32px] md:text-[48px] font-bold">
            {HeadText}
          </h1>
          <p className="text-[#fff]  text-lg">{SubText}</p>
          <p className="text-[#fff] text-lg"> {SubText2}</p>
        </div>
        <Image src={COMMITMENT_BUSINESS} alt="beginner" />
      </div>
    </section>
  );
};
