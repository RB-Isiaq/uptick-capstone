import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Url } from 'url';
import Button from '../Button';

export type ContentCardType = {
  id?: number;
  headTitle?: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  btn1?: string;
  btn2?: string;
  reverse?: boolean;
  input?: boolean;
  shadow?: boolean;
  to?: Url | string;
};
export const ContentCard = ({
  id,
  headTitle,
  image,
  title,
  description,
  btn1,
  btn2,
  reverse,
  input,
}: ContentCardType) => {
  return (
    <>
      {headTitle ? (
        <h1 className="font-raleway text-uptickBlack font-semibold text-[27px] md:text-[36px] text-center">
          {headTitle}
        </h1>
      ) : null}
      <div
        className={`w-full flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } justify-between items-center ${
          headTitle ? 'my-[60px] md:my-[100px]' : ''
        }  gap-3 `}
      >
        <div className="flex flex-col gap-6 md:gap-[38px] w-[604px] max-w-full">
          <h1 className="font-raleway text-white font-bold text-[26px] md:text-[60px] leading-normal text-center md:text-left">
            {title}
          </h1>
          <p className="font-raleway text-white text-[18px] w-full max-w-[401px]">
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
              <Link href={`\programs?id=${id}`}>
                <Button text={btn1} />
              </Link>
            ) : null}
            {btn2 ? <Button text={btn2} /> : null}
          </div>
        </div>
        <Image
          src={image}
          alt="about"
          width={682}
          height={665}
          className="w-[300px] h-[300px] md:w-[682px] md:h-[665px] object-contain "
        />
      </div>
    </>
  );
};
