import { TechCard } from '@/components/Cards/TechCard';
import { programs } from './constants';

export const Programs = () => {
  return (
    <section className="bg-gradient-to-r from-[#1C1C1C] to-[#070C19]">
      <div className="py-[20px] md:py-[88px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col justify-center items-center gap-3 md:gap-[91px]">
        {programs.map((program) => (
          <TechCard
            key={program.id}
            image={program.image}
            title={program.title}
            profession={program.profession}
            desc={program.desc}
            tracks={program.tracks}
            desc2={program.desc2}
            btnText={program.btnText}
            reverse={program.id % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};
