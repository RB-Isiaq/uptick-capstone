import Image from 'next/image';
import React from 'react';
import { HeadText, SubText, SubText2 } from './constants';
import { COMMITMENT_MAP } from '@/public';

export const Commitment = () => {
  return (
    <section className="bg-[#111] achieve-bg py-[100px]">
      <div className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 lg:py-[60px] px-3 lg:px-[60px] font-raleway rounded-2xl border border-[rgba(151,151,151,0.00)] bg-[#1A1A1A]">
        <div className="flex flex-col gap-[16px] md:gap-[30px] w-full max-w-[586px]">
          <h1 className="text-[#fff]  text-[32px] md:text-[48px] font-bold">
            {HeadText}
          </h1>
          <p className="text-[#fff]  text-lg">{SubText}</p>
          <p className="text-[#fff] text-lg"> {SubText2}</p>
        </div>
        <Image src={COMMITMENT_MAP} alt="map" className="rounded-2xl" />
      </div>
    </section>
  );
};