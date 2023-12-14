'use client';

import Button from '@/components/Button';
import { techPrograms } from './constants';
import ProgramCard from '@/components/Cards/ProgramCard';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/Services/ApiCalls';
import Spinner from '@/components/Spinner';

const TalentTech = () => {
  const programIds = techPrograms.map((program) => program.id);

  const { isLoading, error, data } = useQuery({
    queryKey: ['applicants', programIds],
    queryFn: async () => {
      const requests = programIds.map((programId) =>
        getData(`progApplicant/${programId}/apply-program`),
      );
      const responses = await Promise.all(requests);
      return responses;
    },
  });

  if (isLoading) {
    return (
      <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center animate-spin mx-auto">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center mx-auto">
        <span className="text-red-400 text-lg">Error: {error.message}</span>
      </div>
    );
  }

  const updatedTechPrograms = techPrograms.map((program, index) => ({
    ...program,
    applicantsNum: data && data[index].data ? data[index]?.paging.total : 0,
  }));
  return (
    <div className="bg-[#F7F9FF] px-3 lg:px-8 py-[64px] pb-[100px] w-full min-h-screen">
      <div className="w-full  flex justify-between lg:items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">Talent Tech</h1>

        <Button text="Add New" icon />
      </div>
      <div className="flex justify-between gap-2 py-7 px-3 md:px-6 w-full">
        <h1 className="text-lg font-semibold md:w-[165px]">Programs</h1>
        <h1 className="text-lg font-semibold w-[100px] md:w-[185px]">
          Number of applicants
        </h1>
        <h1 className="text-lg font-semibold md:w-[185px]">Status</h1>
        <div />
      </div>
      <div className="w-full  flex flex-col justify-between gap-8 py-5 ">
        {updatedTechPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            id={program.id}
            title={program.title}
            applicantsNum={program.applicantsNum}
            options={program.options}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentTech;
