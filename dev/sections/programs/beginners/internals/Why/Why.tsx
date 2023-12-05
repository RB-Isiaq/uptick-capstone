import React from 'react';
import { HeadText } from './constants';
import Image from 'next/image';
import { BEGINNER_STUDENTS } from '@/public';
import Header from '@/components/Header';

export const Why = () => {
  return (
    <section className="bg-[#EDF2FF] ">
      <div className="pt-[50px] pb-[60px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col justify-center items-center gap-[48px]">
        <Header title={HeadText} color="#000" />
        <Image
          width={1068}
          height={646}
          src={BEGINNER_STUDENTS}
          alt="students"
        />
      </div>
    </section>
  );
};
