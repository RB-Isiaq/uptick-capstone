import React from 'react';
import { HeadText, offers } from './constants';
import Image from 'next/image';

export const Offer = () => {
  return (
    <section className="bg-[#111] vector-bg">
      <div className="py-[72px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10">
        <h1 className="font-raleway text-white text-[36px] md:text-[42px] mb-[45px]">
          {HeadText}
        </h1>

        {offers.map((offer) => (
          <div
            key={offer.id}
            className="my-10 w-full max-w-[784px] flex justify-between gap-3 md:gap-[54px]"
          >
            <div>
              <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px]  rounded-full flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
                <Image src={offer.icon} alt="right arrow" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <h1 className="text-[#7EA3FF] font-semibold text-2xl leading-[38px]">
                {offer.title}
              </h1>
              <p className="text-[#fff] md:text-2xl md:leading-[38px]">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
