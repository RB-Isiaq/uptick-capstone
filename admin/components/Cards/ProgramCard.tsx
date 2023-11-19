'use client';

import { useState } from 'react';
import { Menu } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProgramCard {
  id: number | string;
  title: string;
  applicantsNum: number;
  options: {
    id: number;
    label: string;
  }[];
}

const ProgramCard = ({ id, title, applicantsNum, options }: IProgramCard) => {
  const [showOptions, setShowOptions] = useState(false);
  const pathname = usePathname();
  const path = pathname.split('/')[2];

  const handleCloseApp = (id: string | number) => {
    console.log(`${id} closed`);
  };
  const handleOpenApp = (id: string | number) => {
    console.log(`${id} opened`);
  };

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
          } -top-[10px] right-[20px] px-2 w-[156px] flex-col items-start`}
        >
          <button
            className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1 py-1 w-full"
            onClick={() => handleCloseApp(id)}
          >
            {options[0].label}
          </button>
          <Link href={`${path}/${id}`} className="w-full ">
            <button className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1  py-1">
              {options[1].label}
            </button>
          </Link>
          <button
            className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1 py-1 w-full"
            onClick={() => handleOpenApp(id)}
          >
            {options[2].label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
