import ContentCard from '@/components/ContentCard/ContentCard';
import React from 'react';
import { HeadText } from './constants';
import { subText } from '@/sections/homepage/interenals/Hero/constants';
import { HERO_BEGINNER } from '@/public';

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-uptickGray pt-[78px] pb-4 px-3 xl:px-[100px] md:px-10">
      <ContentCard
        title={HeadText}
        description={subText}
        image={HERO_BEGINNER}
      />
    </div>
  );
};
