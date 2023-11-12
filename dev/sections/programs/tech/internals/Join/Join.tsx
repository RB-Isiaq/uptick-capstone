import Button from '@/components/Button';
import React from 'react';
import { join } from './constants';
import Link from 'next/link';

export const Join = () => {
  return (
    <section className="bg-upDarkBlue vector-bg">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-6 py-[100px] px-3 xl:px-[60px] md:px-10">
        <h1 className="font-raleway text-[32px] font-bold text-white text-center md:text-[60px] leading-normal w-full max-w-[770px] px-3">
          {join.title}
        </h1>
        <p className="w-full max-w-[770px] font-raleway text-white text-center text-lg leading-[160%] px-2">
          {join.desc}
        </p>
        <Link href="#programs">
          <Button text={join.btnText} />
        </Link>
      </div>
    </section>
  );
};
