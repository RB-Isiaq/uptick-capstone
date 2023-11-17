import { TechCard } from '@/components/Cards/TechCard';
import Join from '../Join';
import { Line } from '@/components/Line/Line';
import { programs } from './constants';
import Image from 'next/image';
import { WAVES } from '@/public';

export const Programs = () => {
  return (
    <section className="bg-[#111] vector-black-bg relative" id="programs">
      <div className="py-[20px] md:py-[88px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col justify-center items-center gap-3 md:gap-[91px] z-[2]">
        {programs.map((program, i) => (
          <TechCard
            key={program.id}
            programId={program.id}
            image={program.image}
            title={program.title}
            profession={program.profession}
            desc={program.desc}
            tracks={program.tracks}
            btnText={program.btnText}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
      <Line />
      <Join />
      <Image src={WAVES} alt="waves" className="absolute top-0 left-0 z-[1]" />
    </section>
  );
};
