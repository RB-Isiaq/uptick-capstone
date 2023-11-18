'use client';

import { useState } from 'react';
import { Menu } from '@/public';
import Image from 'next/image';

interface IProgramCard {
  id?: number;
  title: string;
  applicantsNum: number;
  options: {
    id: number;
    label: string;
  }[];
}

const ProgramCard = ({ title, applicantsNum, options }: IProgramCard) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="bg-white flex justify-between gap-2 pt-5 pb-7 px-6 w-full">
      <h1 className=" font-semibold w-[165px]">{title}</h1>
      <h1 className=" font-semibold w-[170px]">{applicantsNum}</h1>
      <div className="relative">
        <button type="button" onClick={() => setShowOptions((prev) => !prev)}>
          <Image src={Menu} alt="menu" />
        </button>
        <div
          className={`absolute top-[10px]   bg-white text-black ${
            showOptions ? 'flex' : 'hidden'
          } -top-[10px] right-[20px] px-2 w-max flex-col items-start`}
        >
          {options.map((option) => (
            <button
              className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1 py-1"
              key={option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
