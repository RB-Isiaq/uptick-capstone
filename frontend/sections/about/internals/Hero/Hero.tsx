import ContentCard from '@/components/ContentCard/ContentCard';
import React from 'react';
import { HeadText } from './constants';
import { subText } from '@/sections/homepage/interenals/Hero/constants';
import { HAND } from '@/public';

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[white] pt-[78px] pb-4 px-3 xl:px-[100px] md:px-10">
      <ContentCard
        title={HeadText}
        description={subText}
        image={HAND}
        reverse
      />
    </div>
  );
};
