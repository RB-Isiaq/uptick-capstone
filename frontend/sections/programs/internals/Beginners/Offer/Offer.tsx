import React from 'react';
import { HeadText, programs } from './constants';
import Header from '@/components/Header';
import { ContentCard2 } from '@/components/ContentCard/ContentCard2';

export const Offer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-[139px] px-3 xl:px-[100px] md:px-10">
      <Header title={HeadText} />
      <div className="w-full mt-[70px] flex flex-col gap-[80px]">
        {programs.map((program, i) => (
          <ContentCard2
            key={program.id}
            title={program.title}
            description={program.text}
            image={program.image}
            reverse={i % 2 !== 0}
            shadow
          />
        ))}
      </div>
    </div>
  );
};
