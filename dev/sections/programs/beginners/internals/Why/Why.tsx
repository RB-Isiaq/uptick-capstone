import React from 'react';
import { HeadText, reasons } from './constants';
import Image from 'next/image';
import { BEGINNER_STUDENTS } from '@/public';
import Header from '@/components/Header';
import Learn from '../Learn';

export const Why = () => {
  return (
    <section className="bg-[#EDF2FF] ">
      <div className="pt-[50px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col justify-center items-center gap-[48px]">
        <Header title={HeadText} color="#000" />
        <Image
          width={1068}
          height={646}
          src={BEGINNER_STUDENTS}
          alt="students"
        />
        <section className="bg-white lg:w-[1900px] lg:mt-[14px]">
          <div className="w-full max-w-[1150px] mx-auto flex flex-col lg:flex-row justify-between  gap-5  ">
            {reasons.map((reason) => (
              <div key={reason.id} className="w-full max-w-[351px] p-[30px]">
                <h1 className="text-[24px] leading-[160%] text-black font-semibold mb-[15px]">
                  {reason.title}
                </h1>
                <p className="text-[#4d4d4d] leading-[160%]">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Learn />
    </section>
  );
};
