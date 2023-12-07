'use client';

import React, { useEffect, useState } from 'react';
import { HeadText, success, testimonials } from './constants';
import Image from 'next/image';
import Header from '@/components/Header';
import { TestimonialCard } from '@/components/Cards/TestimonialCard';
import { LEFT_ARR, RIGHT_ARR } from '@/public';

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonial, setTestimonial] = useState(
    testimonials.slice(activeTestimonial, 1),
  );

  const nextHandler = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevHandler = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    setTestimonial(
      testimonials.slice(activeTestimonial, activeTestimonial + 1),
    );
  }, [activeTestimonial]);

  return (
    <section className="bg-[#EDF2FF]">
      <div
        id="testimonials"
        className=" w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4 lg:gap-[60px] py-[50px]  px-3 xl:px-[60px] md:px-10 "
      >
        <Header title={HeadText} color="#1A1A1A" />
        <div className="w-full lg:w-[730px] mx-auto flex  justify-between items-center gap-3 overflow-hidden  transition-all">
          {testimonials.map((testimony) => (
            <TestimonialCard
              key={testimony.id}
              active={testimonial[0].id === testimony.id}
              content={testimonial[0].desc}
              name={testimonial[0].user}
            />
          ))}
        </div>
        <div className="flex gap-8 justify-center w-max mx-auto">
          <button
            className={`w-[64px] h-[64px] rounded-full ${
              activeTestimonial === 0
                ? 'bg-[rgba(28,28,28,0.30)]  '
                : 'bg-[#1C1C1C]'
            }  flex justify-center items-center cursor-pointer`}
            onClick={prevHandler}
            disabled={activeTestimonial === 0}
          >
            <Image src={LEFT_ARR} alt="left" className="cursor-pointer" />
          </button>
          <button
            className={`w-[64px] h-[64px] rounded-full ${
              activeTestimonial <= testimonial.length
                ? 'bg-[#1C1C1C]'
                : 'bg-[rgba(28,28,28,0.30)]'
            }  flex justify-center items-center cursor-pointer`}
            onClick={nextHandler}
            disabled={activeTestimonial === testimonials.length - 1}
          >
            <Image
              src={RIGHT_ARR}
              alt="right arrow"
              className="cursor-pointer"
            />
          </button>
        </div>
        <p className="w-full max-w-[708px] font-raleway font-medium text-center text-lg lg:text-[24px]">
          {success}
        </p>
      </div>
    </section>
  );
};
