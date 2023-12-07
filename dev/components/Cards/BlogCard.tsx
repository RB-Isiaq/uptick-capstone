import React from 'react';
import Button from '../Button';
import { Card } from './ProgramCard';
import Image from 'next/image';
import Link from 'next/link';
import { truncateWords } from '@/utils';

export const BlogCard = ({ image, title, desc, text, date, link }: Card) => {
  return (
    <div className="w-full md:w-[300px] lg:w-[424px] lg:h-[512px] flex flex-col  gap-[15px] items-start p-4 lg:p-[30px] border border-[#4D4D4D] rounded-2xl bg-[#1C1C1C] hover:shadow-lg ">
      <Image
        src={image}
        alt={title}
        width={384}
        height={256}
        className="w-[384px] h-[256px]"
      />
      <h1 className=" font-raleway  text-[24px] leading-normal text-white font-bold">
        {title}
      </h1>

      <p className="w-full lg:w-[364px] font-raleway  leading-[160%] text-[#B3B3B3]">
        {truncateWords(desc)}
      </p>
      <h2 className=" font-raleway  text-[24px] leading-normal text-white font-bold">
        {date}
      </h2>
      {link && text && (
        <Link href={link} className="self-end">
          <Button text={text} tertiary />
        </Link>
      )}
    </div>
  );
};
