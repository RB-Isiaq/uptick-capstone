import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

export type BTN = {
  id?: number;
  text: string;
  link: string;
};
export interface Card {
  image: string | StaticImageData;
  title: string;
  desc: string;
  date?: string;
  text?: string;
  link?: string;
  buttons?: BTN[];
}
export const ProgramCard = ({ image, title, desc, buttons }: Card) => {
  return (
    <div className="w-full md:w-[300px] lg:w-[450px] h-max lg:h-[623px] flex flex-col  gap-6 justify-between items-start p-6 lg:p-[34px] border border-[#1C3166] rounded-2xl bg-[#1C1C1C] hover:shadow-lg ">
      <Image src={image} alt={title} width={450} height={380} />
      <h1 className=" font-raleway text-[24px] leading-normal text-white font-bold">
        {title}
      </h1>
      <p className="w-full font-raleway leading-[160%] text-[#ccc]">{desc}</p>
      <div className="flex gap-[10px]">
        {buttons?.map((btn) => (
          <Link key={btn.id} href={btn.link}>
            <Button text={btn.text} secondary={btn.id === 2} />
          </Link>
        ))}
      </div>
    </div>
  );
};
