'use client';
import { BEGINNERS } from './constants';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="relative w-full flex flex-col gap-6 md:gap-10 justify-center items-center py-6  bg-beginner md:h-[560px]">
      <h1 className="text-[white] text-center font-poppins text-[36px] md:text-[58px] font-semibold leading-[140%]">
        {BEGINNERS.title}
      </h1>
      <p className="text-[white] text-center font-poppins text-[20px] md:text-[24px] leading-[37px] opacity-80 w-full max-w-[600px] px-2">
        {BEGINNERS.desc}
      </p>
      <Image
        src={BEGINNERS.bg}
        alt=""
        width={1440}
        height={560}
        className="h-full w-full absolute top-0 left-0 -z-[1] "
      />
    </div>
  );
};
