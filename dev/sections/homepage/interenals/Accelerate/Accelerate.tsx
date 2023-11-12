import { ContentCard } from '@/components/Cards/ContentCard';
import React from 'react';
import { HeadText, btnText, subText } from './constants';
import { ACCELERATE } from '@/public';

export const Accelerate = () => {
  return (
    <section className=" bg-[#000]">
      <div className="flex flex-col justify-center items-center pt-[116px] px-3 xl:px-[60px] md:px-10 w-full max-w-[1440px] mx-auto">
        <ContentCard
          title={HeadText}
          description={subText}
          image={ACCELERATE}
          btn1={btnText}
        />
      </div>
    </section>
  );
};
