import React from 'react';
import { HeadText, reasons } from './constants';
import Image from 'next/image';
import { BEGINNER_STUDENTS } from '@/public';
import Header from '@/components/Header';

export const Why = () => {
  return (
    <section className=" bg-gradient-to-b from-[#1C1C1C] to-[#070C19]">
      <div className="py-[72px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col justify-center items-center gap-10">
        <Header title={HeadText} />
        <Image
          width={1068}
          height={646}
          src={BEGINNER_STUDENTS}
          alt="students"
        />
        <div className="w-full max-w-[1150px] flex flex-col lg:flex-row justify-between  gap-5 ">
          {reasons.map((reason) => (
            <div key={reason.id} className="w-full max-w-[351px] p-[30px]">
              <h1 className="text-[24px] leading-[160%] text-white font-semibold">
                {reason.title}
              </h1>
              <p className="text-[#B3B3B3] leading-[160%]">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
