import Button from '@/components/Button';
import React from 'react';
import { Btn, HeadText, SubText } from './constants';
import Link from 'next/link';

export const Join = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <div className=" w-full bg-[#EDF2FF] lg:py-[50px]" />
      <div className=" w-full flex flex-col justify-center items-center gap-[60px]   px-3 xl:px-[60px] md:px-10 bg-[#070C19] py-[40px] lg:py-[80px] my-[100px]">
        <div className="flex flex-col justify-center items-center gap-10 p-8 md:p-20 w-full  ">
          <h1
            className={`font-raleway text-[32px] md:text-[60px] leading-normal  text-white font-medium text-center`}
          >
            {HeadText}
          </h1>
          <p className="w-full max-w-[742px] font-raleway text-white text-center leading-[160%]">
            {SubText}
          </p>
          <Link href="/#programs">
            <Button text={Btn} />
          </Link>
        </div>
      </div>
      <div className="py-[40px] w-full bg-[#EDF2FF]" />
    </section>
  );
};
