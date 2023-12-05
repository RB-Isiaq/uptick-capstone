import Button from '@/components/Button';
import React from 'react';
import { Btn, HeadText, SubText } from './constants';
import Link from 'next/link';

export const Learn = () => {
  return (
    <section className="bg-[#EDF2FF] ">
      <div className="w-full flex flex-col justify-center items-center gap-6 pt-[60px] pb-[50px] px-3 xl:px-[60px] md:px-10 ">
        <h1 className="font-raleway text-[32px] font-bold text-black text-center md:text-[60px] leading-normal">
          {HeadText}
        </h1>
        <p className="w-full max-w-[528px] font-raleway text-black text-center text-lg leading-[160%] px-2">
          {SubText}
        </p>
        <Link href="/contact">
          <Button text={Btn} />
        </Link>
      </div>
    </section>
  );
};
