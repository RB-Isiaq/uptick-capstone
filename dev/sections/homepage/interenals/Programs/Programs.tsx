import React from 'react';
import { HeadText, programs } from './constants';
import Header from '@/components/Header';
import { ProgramCard } from '@/components/Cards/ProgramCard';

export const Programs = () => {
  return (
    <section className="bg-black waves-bg" id="programs">
      <div className="flex flex-col justify-center items-center  pt-[80px] md:pt-[100px] px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto">
        <div className="flex mb-[53px]">
          <Header title={HeadText} />
        </div>
        <div className="w-full  flex flex-col md:flex-row justify-center  items-center flex-wrap gap-[35px] mb-[60px] md:mb-[103px]">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.subTitle}
              desc={program.text}
              image={program.image}
              buttons={program.ctaButtons}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
