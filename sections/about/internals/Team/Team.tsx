import { HeadText, SubText, team } from './constants';
import Header from '@/components/Header';
import Card from './Card';

export const Team = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[64px] bg-[#E7E7E7] py-[136px]  px-3 xl:px-[100px] md:px-10  ">
      <div>
        <Header title={HeadText} />
        <p className="font-poppins text-[18px] leading-[32px] text-uptickBlack opacity-80 text-center mt-4 px-1 w-full max-w-[723px]">
          {SubText}
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center gap-5 ">
        {team.map((team) => (
          <Card
            key={team.id}
            path={team.image}
            name={team.name}
            role={team.role}
          />
        ))}
      </div>
    </div>
  );
};
