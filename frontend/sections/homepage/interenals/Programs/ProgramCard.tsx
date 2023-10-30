import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type ProgramCard = {
  headTitle: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  btn1: string;
  btn2: string;
  reverse?: boolean;
};
const ProgramCard = ({
  headTitle,
  image,
  title,
  description,
  btn1,
  btn2,
  reverse,
}: ProgramCard) => {
  return (
    <>
      <h1 className="font-poppins text-uptickBlack font-semibold text-[27px] md:text-[36px] text-center">
        {headTitle}
      </h1>
      <div
        className={`w-full flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } justify-between items-center my-[60px] md:my-[100px] gap-3`}
      >
        <Image
          src={image}
          alt="about"
          width={500}
          height={500}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
        />
        <div className="flex flex-col gap-6 md:gap-[63px] w-[447px] max-w-full">
          <h1 className="font-poppins text-uptickBlack font-semibold text-[26px] md:text-[36px]">
            {title}
          </h1>
          <p className="font-poppins text-uptickBlack text-[18px]">
            {description}
          </p>
          <div className="w-full flex  items-center gap-[26px]">
            <button className="w-[197px] h-[72px] flex justify-center items-center py-[15px] px-[6px] rounded-md bg-[#1E1E1E] text-[#fff] font-poppins font-semibold">
              {btn1}
            </button>
            <button className="w-[197px] h-[72px] flex justify-center items-center py-[15px] px-[6px] rounded-md bg-[white] text-[#1E1E1E] font-poppins font-semibold border border-[1px,solid,#000]">
              {btn2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
