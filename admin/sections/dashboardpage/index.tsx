'use client';
import React from 'react';
import { applicantsHeader } from './constants';

import NumberCard from '@/components/Cards/NumberCard';
import RecentTable from '@/components/RecentTable/RecentTable';
import BasicPie from '@/components/Chart';
import { getDate } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/Services/ApiCalls';
import { JOB_APP, PROG_APP, STARTUP_APP } from '@/public';
import { RecentJobTable } from '@/components/RecentTable/RecentJobTable';

const DashboardPage = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const result = await getData(`dashboard`);

      return result;
    },
  });

  return (
    <div
      className={`bg-[#F7F9FF] px-3 lg:px-8 py-3 pb-[100px] min-h-screen ${
        isLoading && 'animate-pulse'
      }`}
      data-testid="dashboard_page"
    >
      <h1 className="text-[32px] font-bold">Welcome, Admin</h1>
      <p className="text-sm">{getDate()}</p>

      <div className="flex flex-col lg:flex-row gap-3 w-full justify-between my-6">
        <NumberCard
          icon={PROG_APP}
          title="No of Program Applicants"
          number={data?.data.totalProgramApplicants}
          bgC="bg-[#E8D7FF]"
          textC="text-[#471B80]"
          accepted={data?.data.acceptedProgramApplicants}
          rejected={data?.data.rejectedProgramApplicants}
          pending={data?.data.pendingProgramApplicants}
        />
        <NumberCard
          icon={JOB_APP}
          title="No of Job Applicants"
          number={data?.data.totalJobApplicants}
          bgC="bg-[#DCF1E3]"
          textC="text-[#285C3A]"
          accepted={data?.data.acceptedJobApplicants}
          rejected={data?.data.rejectedJobApplicants}
          pending={data?.data.pendingJobApplicants}
        />
        <NumberCard
          icon={STARTUP_APP}
          title="No of Startups"
          number={0}
          bgC="bg-[#DAE5FF]"
          textC="text-[#243E80]"
          accepted={0}
          rejected={0}
          pending={0}
        />
      </div>
      <h1 className="px-3  py-[10px  text-[#15254C] text-lg font-bold mb-2">
        Recent Applicants
      </h1>
      <RecentTable
        header={applicantsHeader}
        rows={data?.data.recentProgramApplicants}
      />

      <div className="flex flex-col lg:flex-row  gap-[10px] mt-[30px] justify-between">
        <div className="bg-white rounded-2xl py-[17px] px-2 lg:px-[20px]  flex flex-col gap-2">
          <h1 className="font-bold text-lg">Experience</h1>
          <BasicPie
            lessThanOne={data?.data.lessThanOneYear}
            oneToTwo={data?.data.oneToTwoYears}
            aboveTwo={data?.data.aboveTwoYears}
          />
        </div>
        <div>
          <h1 className="px-3  py-[10px] bg-white shadow text-[#15254C] text-lg font-bold mb-2">
            Recent Jobs
          </h1>
          <RecentJobTable rows={data?.data.recentJobApplicants} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
