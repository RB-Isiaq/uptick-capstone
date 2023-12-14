'use client';

import Button from '@/components/Button';
import FormModal from '@/components/Modal/FormModal';
import { useState } from 'react';
import JobCard from '@/components/Cards/JobCard';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/Services/ApiCalls';
import Spinner from '@/components/Spinner';

export interface JobDetailsProps {
  jobId?: string;
  jobTitle: string;
  companyLogo: string;
  companyName: string;
  deadline: Date | string;
  description: string;
  jobType: string;
  jobCategory: string;
  location: string;
  startDate?: Date | string;
  endDate: Date | string;
  status?: string;
  applicantsNum?: string;
}

const JobsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ['jobs', isOpen],
    queryFn: async () => {
      const result: { data: JobDetailsProps[] } = await getData(`jobs`);
      return result;
    },
  });

  const { data: jobApplicantsData } = useQuery({
    queryKey: [data, isOpen],
    queryFn: async () => {
      if (!data) {
        return [];
      }

      const requests = data.data.map((job) => {
        return getData(`jobs/${job.jobId}/applications`);
      });

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

  const updatedJobsData =
    data &&
    data?.data.map((job, index) => ({
      ...job,
      applicantsNum:
        jobApplicantsData && jobApplicantsData[index]?.data
          ? jobApplicantsData[index]?.paging.total
          : 0,
    }));
  return (
    <div className="bg-[#F7F9FF] px-3 md:px-8 py-[64px] pb-[100px] w-full min-h-screen">
      <div className="w-full  flex justify-between items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">Jobs</h1>

        <Button
          text="Add New"
          icon
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="flex justify-between gap-2 py-7 px-3 md:px-6 w-full">
        <h1 className="text-lg font-semibold w-[165px]">Listed Jobs</h1>
        <h1 className="text-lg font-semibold w-[185px]">
          Number of applicants
        </h1>
        <h1 className="text-lg font-semibold w-[185px]">Deadline</h1>
        <h1 className="text-lg font-semibold w-[185px]">Status</h1>
        <div />
      </div>
      <div className="w-full  flex flex-col justify-between gap-8 py-5 ">
        {updatedJobsData?.map((item) => (
          <JobCard
            key={item?.jobId}
            id={item.jobId ? item.jobId : ''}
            title={item?.jobTitle}
            applicantsNum={item?.applicantsNum}
            deadline={item.deadline.toString().split('T')[0]}
            status={item.status}
            options={[
              {
                id: 1,
                label: 'Close Application',
              },
              {
                id: 2,
                label: 'View Applicants',
              },
              {
                id: 3,
                label: 'Open Application',
              },
              {
                id: 4,
                label: 'Delete Job',
              },
            ]}
          />
        ))}
      </div>
      <FormModal isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
};

export default JobsPage;
