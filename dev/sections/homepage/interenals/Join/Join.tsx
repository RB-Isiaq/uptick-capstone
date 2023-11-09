import Button from '@/components/Button';
import Header from '@/components/Header';
import React from 'react';
import { Btn, HeadText, SubText } from './constants';
import Link from 'next/link';

export const Join = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[60px] pt-[100px] pb-[50px]  px-3 xl:px-[60px] md:px-10">
      <div className="flex flex-col justify-center items-center gap-10 p-8 md:p-20 w-full max-w-[1018px] bg-[#070C19] border border-[1px,solid,#4D4D4D] rounded-2xl">
        <Header title={HeadText} />
        <p className="w-full max-w-[742px] font-raleway text-white text-center leading-[160%]">
          {SubText}
        </p>
        <Link href="/#programs">
          <Button text={Btn} />
        </Link>
      </div>
    </div>
  );
};
