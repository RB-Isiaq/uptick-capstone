import React from 'react';
import { programs } from './constants';
import ProgramCard from './ProgramCard';

export const Programs = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-[139px] px-3 xl:px-[100px] md:px-10">
      <h1 className="font-poppins text-center text-[55px] text-uptickBlack font-semibold">
        Our Programs
      </h1>
      <div className="w-full">
        {programs.map((program, i) => (
          <ProgramCard
            key={program.id}
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
