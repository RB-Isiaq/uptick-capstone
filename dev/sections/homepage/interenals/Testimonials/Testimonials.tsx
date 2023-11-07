import React from 'react';
import { HeadText, success, testimonials } from './constants';
import Image from 'next/image';
import Header from '@/components/Header';
import { TestimonialCard } from '@/components/Cards/TestimonialCard';
import { LEFT_ARR, RIGHT_ARR } from '@/public';

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-[60px]  py-[50px]  px-3 xl:px-[60px] md:px-10 overflow-hidden"
    >
      <Header title={HeadText} color="#1A1A1A" />
      <div className="flex  justify-between items-center gap-3 ">
        {testimonials.map((testimony) => (
          <TestimonialCard
            key={testimony.id}
            content={testimony.desc}
            name={testimony.user}
          />
        ))}
      </div>
      <div className="flex gap-8 justify-center w-max mx-auto">
        <div className="w-[64px] h-[64px] rounded-full bg-[rgba(28,28,28,0.30)] flex justify-center items-center cursor-pointer">
          <Image src={LEFT_ARR} alt="left" />
        </div>
        <div className="w-[64px] h-[64px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer">
          <Image src={RIGHT_ARR} alt="right arrow" />
        </div>
      </div>
      <p className="w-full max-w-[708px] font-raleway font-medium text-center text-[24px]">
        {success}
      </p>
    </div>
  );
};