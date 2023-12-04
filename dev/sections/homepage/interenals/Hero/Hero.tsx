'use client';

import Image from 'next/image';
import { HeadText, HeadText2, ctaButtons, subText } from './constants';
import Button from '@/components/Button';
import { HERO_BG } from '@/public';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative flex bg-[#000] vector-black-bg mt-[-120px] pt-[120px]">
      <div className="w-full flex flex-col gap-[46px]  justify-center items-center px-3 xl:px-[60px] md:px-10 z-[2] pt-[110.5px] pb-[104.5px]">
        <h1 className="font-raleway font-bold text-[36px] md:text-[72px] px-1 w-full max-w-[805px] text-center leading-[1.2] text-white  ">
          {HeadText} <span className="purple_gradient">{HeadText2} </span>
        </h1>
        <p className="w-full max-w-[553px] text-white font-raleway text-center text-[20px] leading-[160%] font-normal">
          {subText}
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-[23px] ">
          {ctaButtons.map((btn) => (
            <Link key={btn.id} href={btn.link}>
              <Button text={btn.text} secondary={btn.id === 2} />
            </Link>
          ))}
        </div>
      </div>
      <Image
        src={HERO_BG}
        alt="background"
        width={1440}
        height={500}
        className="h-full w-full absolute top-0 left-0 "
      />
    </section>
  );
};
