import React from 'react';
import {
  applicantRows,
  applicants,
  applicantsHeader,
  jobRows,
} from './constants';

import NumberCard from '@/components/Cards/NumberCard';
import RecentTable from '@/components/RecentTable/RecentTable';
import BasicPie from '@/components/Chart';

const DashboardPage = () => {
  return (
    <div className="bg-[#F7F9FF] px-8 py-3 pb-[100px]">
      <h1 className="text-[32px] font-bold">Welcome, Admin</h1>
      <p className="text-sm">Monday, 6th Nov.2023</p>

      <div className="flex flex-col lg:flex-row gap-3 w-full justify-between my-6">
        {applicants.map((app) => (
          <NumberCard
            key={app.id}
            icon={app.icon}
            title={app.title}
            number={app.number}
            bgC={app.bgC}
            textC={app.textC}
            accepted={app.accepted}
            pending={app.pending}
            rejected={app.rejected}
          />
        ))}
      </div>
      <h1 className="px-3  py-[10px  text-[#15254C] text-lg font-bold mb-2">
        Recent Applicants
      </h1>
      <RecentTable header={applicantsHeader} rows={applicantRows} />

      <div className="flex justify-between gap-[20px] mt-[30px]">
        <div className="bg-white rounded-2xl py-[17px] px-[20px]  flex flex-col">
          <h1 className="font-bold text-lg">Experience</h1>
          <BasicPie />
        </div>
        <div className="overflow-hidden">
          <h1 className="px-3  py-[10px] bg-white shadow text-[#15254C] text-lg font-bold mb-2">
            Recent Jobs
          </h1>
          <RecentTable rows={jobRows} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
