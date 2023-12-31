import Image, { StaticImageData } from 'next/image';
import React from 'react';

type NumberCard = {
  icon: string | StaticImageData;
  title: string;
  number: number;
  bgC: string;
  textC: string;
  accepted: string | number;
  rejected: string | number;
  pending: string | number;
};
const NumberCard = ({
  icon,
  title,
  number,
  accepted,
  rejected,
  pending,
  textC,
  bgC,
}: NumberCard) => {
  return (
    <div className="w-full max-w-[366px] h-[132px] bg-white rounded-lg py-[14px] px-[15px] flex flex-col gap-5">
      <div className="flex justify-between w-full gap-3">
        <div className="flex flex-col gap-1">
          <div className="bg-[#B5CAFF] p-2 w-max rounded-full">
            <Image src={icon} alt="icon" />
          </div>
          <p className="text-[#191919] text-sm font-bold leading-[160%]">
            {title}
          </p>
        </div>
        <p
          className={`flex justify-center items-center text-[48px] font-bold ${bgC} ${textC} min-w-[88px] h-[53px] rounded-lg px-1`}
        >
          {number}
        </p>
      </div>
      <div className="flex justify-between  gap-1 w-full">
        <p className="text-[#4D4D4D] text-xs  ">
          Accepted
          <span className="ml-1 text-[#50B773]">{accepted}</span>
        </p>
        <p className="text-[#4D4D4D] text-xs  ">
          Rejected
          <span className="ml-1 text-[#F00]">{rejected}</span>
        </p>
        <p className="text-[#4D4D4D] text-xs  ">
          Pending
          <span className="ml-1 text-[#B3B3B3]">{pending}</span>
        </p>
      </div>
    </div>
  );
};

export default NumberCard;
