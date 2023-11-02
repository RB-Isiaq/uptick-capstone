import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type ContentCard = {
  headTitle?: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  btn1?: string;
  btn2?: string;
  reverse?: boolean;
  input?: boolean;
};
const ContentCard = ({
  headTitle,
  image,
  title,
  description,
  btn1,
  btn2,
  reverse,
  input,
}: ContentCard) => {
  return (
    <>
      {headTitle ? (
        <h1 className="font-poppins text-uptickBlack font-semibold text-[27px] md:text-[36px] text-center">
          {headTitle}
        </h1>
      ) : null}
      <div
        className={`w-full flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } justify-between items-center ${
          headTitle ? 'my-[60px] md:my-[100px]' : ''
        }  gap-3`}
      >
        <Image
          src={image}
          alt="about"
          width={500}
          height={500}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
        />
        <div className="flex flex-col gap-6 md:gap-[40px] w-[447px] max-w-full">
          <h1 className="font-poppins text-uptickBlack font-semibold text-[26px] md:text-[36px] text-center md:text-left">
            {title}
          </h1>
          <p className="font-poppins text-uptickBlack text-[18px] text-center md:text-left">
            {description}
          </p>
          <div className="w-full flex justify-center md:justify-start items-center gap-[26px]">
            {input ? (
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full py-[19px] px-[32px] rounded-[7px] border border-[1px,solid,#808080] bg-[white]"
              />
            ) : null}
            {btn1 ? (
              <button className="w-[197px] flex justify-center items-center py-[19px] px-[6px] rounded-md bg-[#1E1E1E] text-[#fff] font-poppins font-semibold">
                {btn1}
              </button>
            ) : null}
            {btn2 ? (
              <button className="w-[197px] flex justify-center items-center py-[19px] px-[6px] rounded-md bg-[white] text-[#1E1E1E] font-poppins font-semibold border border-[1px,solid,#000]">
                {btn2}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
