'use client';

import Image from 'next/image';
import { HeadText, HeadText2, ctaButtons, subText } from './constants';
import Button from '@/components/Button';
import { HERO_BG } from '@/public';

export const Hero = () => {
  return (
    <div className="w-full relative flex flex-col gap-[46px]  justify-center items-center px-3 xl:px-[60px] md:px-10  bg_gradient py-[112px]">
      <Image
        src={HERO_BG}
        alt="background"
        width={1440}
        height={500}
        className="h-full w-full absolute top-0 left-0 -z-[1] "
      />
      <h1 className="font-raleway font-bold text-[36px] md:text-[72px] px-1 w-full max-w-[805px] text-center leading-normal text-white">
        {HeadText} <span className="purple_gradient">{HeadText2} </span>{' '}
      </h1>
      <p className="w-full max-w-[553px] text-white font-raleway text-center text-[20px]">
        {subText}
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[23px] ">
        {ctaButtons.map((btn) => (
          <Button key={btn.id} text={btn.text} secondary={btn.id === 2} />
        ))}
      </div>
    </div>
  );
};
