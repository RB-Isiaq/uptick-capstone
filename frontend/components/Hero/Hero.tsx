import React from 'react';
import {
  HeadText,
  HeadText2,
  achievments,
  ctaButtons,
  subText,
} from './constants';
import Link from 'next/link';
import Image from 'next/image';
import { LADY, STUDENT } from '@/public';
import Achievement from './Achievement';

export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center px-3 pt-[22px] xl:px-[100px] md:px-10">
      <div className="flex flex-col min-[960px]:flex-row justify-between items-center gap-3">
        <div className="flex flex-col w-[576px] max-w-full">
          <h1 className="font-poppins text-[32px] md:text-[50px] leading-[140%] text-uptickBlack font-semibold">
            {HeadText}
          </h1>
          <h2 className="font-poppins text-[26px] md:text-[38px] leading-[140%] text-uptickBlack font-semibold">
            {HeadText2}
          </h2>
          <p className="font-poppins text-[18px] leading-[32px] text-uptickBlack opacity-80">
            {subText}
          </p>
          <div className="flex gap-5 mt-[30px]">
            {ctaButtons.map((btn) => (
              <Link
                key={btn.id}
                href={btn.link}
                className={
                  btn.id === 1
                    ? 'flex justify-center items-center py-4 px-[35px] rounded-md bg-uptickBlack text-[#fff] font-poppins font-semibold'
                    : 'flex justify-center items-center py-4 px-[35px] rounded-md text-uptickBlack bg-[#fff] font-poppins font-semibold  border border-[1px,solid,#808080]'
                }
              >
                {btn.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image src={LADY} alt="lady" />
          <div className="absolute top-20 right-0 w-[515px] h-[539px] rounded-[60%] border border-[1px,solid,#808080] -z-[2]" />
          <div className="absolute top-24 right-10 w-[515px] h-[539px] rounded-[60%] bg-[#808080] -z-[1]" />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-3 justify-between items-start py-[45px] px-3 md:px-[45px] mt-[-80px] rounded-md bg-[#fff] shadow-md z-[2]">
        {achievments.map((achievment) => (
          <Achievement
            key={achievment.id}
            icon={achievment.icon}
            text={achievment.text}
            number={achievment.number}
          />
        ))}
      </div>
      <div className="absolute w-[217px] h-[79px] top-[50%] right-0 bg-[white] flex justify-center items-center shadow-md rounded-md">
        <Achievement icon={STUDENT} text={'Active Students'} number={'10k'} />
      </div>
    </div>
  );
};
