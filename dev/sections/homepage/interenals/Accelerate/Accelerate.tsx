import { ContentCard } from '@/components/Cards/ContentCard';
import React from 'react';
import { HeadText, btnText, subText } from './constants';
import { ACCELERATE } from '@/public';

import { Line } from '@/components/Line/Line';

export const Accelerate = () => {
  return (
    <section className=" bg-[#000]">
      <div className="pt-[116px] pb-[101px] px-3 xl:px-[60px] md:px-6 w-full max-w-[1440px] mx-auto">
        <ContentCard
          title={HeadText}
          description={subText}
          image={ACCELERATE}
          btn1={btnText}
        />
        <Line />
      </div>
    </section>
  );
};
