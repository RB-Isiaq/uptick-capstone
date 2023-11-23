'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HeadText, success, testimonials } from './constants';
import Image from 'next/image';
import Header from '@/components/Header';
import { TestimonialCard } from '@/components/Cards/TestimonialCard';
import { LEFT_ARR, RIGHT_ARR } from '@/public';

export const Testimonials = () => {
  const testimonialsContainerRef = useRef<HTMLDivElement>(null);
  const [isWindow, setIsWindow] = useState(false);

  const scrollLeft = () => {
    if (isWindow) {
      if (window.innerWidth < 768 && testimonialsContainerRef.current) {
        testimonialsContainerRef.current.scrollLeft -= 336;
      } else if (testimonialsContainerRef.current) {
        testimonialsContainerRef.current.scrollLeft -= 736;
      }
    }
  };

  const scrollRight = () => {
    if (isWindow) {
      if (window.innerWidth < 768 && testimonialsContainerRef.current) {
        testimonialsContainerRef.current.scrollLeft += 336;
      } else if (testimonialsContainerRef.current) {
        testimonialsContainerRef.current.scrollLeft += 736;
      }
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsWindow(true);
    } else {
      console.log('no window is defined');
    }
  }, []);

  return (
    <section className="bg-[#EDF2FF]">
      <div
        id="testimonials"
        className=" w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-[60px]  py-[50px]  px-3 xl:px-[60px] md:px-10 "
      >
        <Header title={HeadText} color="#1A1A1A" />
        <div
          ref={testimonialsContainerRef}
          className="w-[330px] md:w-[730px] mx-auto flex  justify-between items-center gap-3 overflow-x-scroll line-clamp-3 transition-all"
        >
          {testimonials.map((testimony) => (
            <TestimonialCard
              key={testimony.id}
              content={testimony.desc}
              name={testimony.user}
            />
          ))}
        </div>
        <div className="flex gap-8 justify-center w-max mx-auto">
          <div
            className="w-[64px] h-[64px] rounded-full bg-[rgba(28,28,28,0.30)] flex justify-center items-center cursor-pointer"
            onClick={scrollLeft}
          >
            <Image src={LEFT_ARR} alt="left" className="cursor-pointer" />
          </div>
          <div
            className="w-[64px] h-[64px] rounded-full bg-[#1C1C1C] flex justify-center items-center cursor-pointer"
            onClick={scrollRight}
          >
            <Image
              src={RIGHT_ARR}
              alt="right arrow"
              className="cursor-pointer"
            />
          </div>
        </div>
        <p className="w-full max-w-[708px] font-raleway font-medium text-center text-[24px]">
          {success}
        </p>
      </div>
    </section>
  );
};
