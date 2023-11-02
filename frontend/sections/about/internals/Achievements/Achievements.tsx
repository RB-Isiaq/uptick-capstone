import React from 'react';
import { HeadText, SubText, achievments } from './constants';
import ContentCard from '@/components/ContentCard/ContentCard';
import Header from '@/components/Header';

export const Achievements = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-[139px] px-3 xl:px-[100px] md:px-10">
      <Header title={HeadText} />
      <p className="font-poppins text-[18px] leading-[32px] text-uptickBlack opacity-80 text-center mt-4">
        {SubText}
      </p>
      <div className="w-full mt-10 flex flex-col gap-3 justify-center items-center">
        {achievments.map((achievment, i) => (
          <ContentCard
            key={achievment.id}
            title={achievment.title}
            description={achievment.text}
            image={achievment.image}
            btn1={achievment.btn}
            reverse={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};
