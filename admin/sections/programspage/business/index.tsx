import Button from '@/components/Button';
import { startupPrograms } from './constants';
import ProgramCard from '@/components/Cards/ProgramCard';

const TalentBusiness = () => {
  return (
    <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full min-h-screen">
      <div className="w-full  flex justify-between items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">
          Talent Business
        </h1>

        <Button text="Add New" icon />
      </div>
      <div className="flex justify-between gap-2 py-7 px-6 w-full">
        <h1 className="text-lg font-semibold w-[165px]">Programs</h1>
        <h1 className="text-lg font-semibold w-[185px]">
          Number of applicants
        </h1>
        <div />
      </div>
      <div className="w-full  flex flex-col justify-between gap-10 py-5 ">
        {startupPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            applicantsNum={program.applicantsNum}
            options={program.options}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentBusiness;
