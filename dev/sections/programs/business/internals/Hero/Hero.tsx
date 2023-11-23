import ProgramHero from '@/components/Cards/ProgramHero';
import { businessHero } from './constants';

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <ProgramHero content={businessHero} />
    </div>
  );
};
