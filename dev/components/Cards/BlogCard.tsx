import React from 'react';
import Button from '../Button';
import { BTN, Card } from './ProgramCard';
import Image from 'next/image';

export const BlogCard = ({ image, title, desc, text }: Card & BTN) => {
  return (
    <div className="w-full sm:w-[424px] h-max md:h-[512px] flex flex-col  gap-[15px] items-start p-4 md:p-[30px] border border-[1px,solid,#4D4D4D] rounded-2xl bg-[#1C1C1C] hover:shadow-lg ">
      <Image src={image} alt={title} width={384} height={256} />
      <h1 className=" font-raleway  text-[24px] leading-normal text-white font-bold">
        {title}
      </h1>
      <p className="w-full sm:w-[364px] font-raleway  leading-[160%] text-[#B3B3B3]">
        {desc}
      </p>
      <Button text={text} secondary />
    </div>
  );
};
