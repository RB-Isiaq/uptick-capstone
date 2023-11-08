import Button from '@/components/Button';
import React from 'react';
import { Btn, HeadText, SubText } from './constants';

export const Learn = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 py-[100px] px-3 xl:px-[60px] md:px-10 bg-[#070C19]">
      <h1 className="font-raleway text-[32px] font-bold text-white text-center md:text-[60px] leading-normal">
        {HeadText}
      </h1>
      <p className="w-full max-w-[528px] font-raleway text-white text-center text-lg leading-[160%] px-2">
        {SubText}
      </p>
      <Button text={Btn} />
    </div>
  );
};
