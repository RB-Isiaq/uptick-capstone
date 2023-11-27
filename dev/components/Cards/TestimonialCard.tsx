import { GO, QUOTE } from '@/public';
import Image from 'next/image';
import React from 'react';

export const TestimonialCard = ({
  content,
  name,
}: {
  content: string;
  name: string;
}) => {
  return (
    <div className="w-[330px] md:w-[730px] h-[500px] lg:h-[402px] p-5 md:p-[50px] bg-[#070C19] border border-[1px,solid,#1C3166] rounded-2xl flex flex-col gap-6 lg:justify-between flex-shrink-0">
      <p className="text-white text-[16px] lg:text-[18px] ">{content}</p>
      <div className="self-start flex">
        <p className="text-[#91B0FF] text-[18px] font-bold">{name}</p>
        <Image src={GO} alt="go" />
      </div>
      <Image className="self-end" src={QUOTE} alt="quote" />
    </div>
  );
};
