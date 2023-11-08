import ProgramHero from '@/components/Cards/ProgramHero';
import React from 'react';
import { beginnerHero } from './constants';

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <ProgramHero content={beginnerHero} />
    </div>
  );
};
