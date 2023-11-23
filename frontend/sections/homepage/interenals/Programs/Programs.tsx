import React from 'react';
import { HeadText, programs } from './constants';
import ContentCard from '@/components/ContentCard/ContentCard';
import Header from '@/components/Header';

export const Programs = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-[139px] px-3 xl:px-[100px] md:px-10">
      <Header title={HeadText} />
      <div className="w-full mt-10">
        {programs.map((program, i) => (
          <ContentCard
            key={program.id}
            id={program.id}
            headTitle={program.title}
            title={program.subTitle}
            description={program.text}
            image={program.image}
            btn1={program.ctaButtons[0].text}
            btn2={program.ctaButtons[1].text}
            reverse={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};
