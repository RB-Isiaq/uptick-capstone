'use client';

import Link from 'next/link';

import Image from 'next/image';
import { Right_Arr } from '@/public';
import JobApplicantModal from '../Modal/JobApplicantModal';
import { useState } from 'react';
import PaginationRounded from '../Pagination';
import CSVDownloadButton from '../DownloadCsv';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/Services/ApiCalls';
import Spinner from '../Spinner';
import JobApplicantCard from './JobApplicant';

export type Details = {
  applicantId: string;
  firstName: string;
  status: string;
  resumeUrl: string;
  updatedAt: string;
};
interface IJobApplicants {
  title: string;
  id: string;
}

const JobApplicants = ({ title, id }: IJobApplicants) => {
  const [showDetails, setShowDetails] = useState(false);
  const [applicantId, setApplicantId] = useState('');
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery({
    queryKey: [id, showDetails, page],
    queryFn: async () => {
      const data = await getData(`jobs/${id}/applications?page=${page}`);

      return data;
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
      <span className="w-full mx-auto h-screen text-red-400">
        Error: {error.message}
      </span>
    );
  }

  const showDetailsHandler = (id: string) => {
    setApplicantId(id);
    setShowDetails(true);
  };
  return (
    <>
      <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full min-h-screen">
        <div className="w-full  flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            <Link href="/jobs">
              <h1 className="text-[#C8D7FF] font-bold text-[24px]">Jobs</h1>
            </Link>
            <Image src={Right_Arr} alt="arrow" />
            <h1 className="text-[#111] font-bold text-[24px]">{title}</h1>
          </div>
          <CSVDownloadButton data={data.data} />
        </div>
        <div className="flex justify-between items-center gap-2 py-7 px-6 w-full">
          <h1 className="text-lg font-semibold text-[#111] w-[115px]">Name</h1>
          <h1 className="text-lg font-semibold text-[#111] w-[115px] px-2">
            Status
          </h1>
          <h1 className="text-lg font-semibold text-[#111] w-[115px]">Date</h1>
          <h1 className="text-lg font-semibold text-[#111] w-[115px]">
            Resume
          </h1>
          <div className="w-[100px]" />
        </div>
        <div className="w-full  flex flex-col justify-between gap-[10px] py-5 ">
          {[...data.data]
            .sort(
              (a, b) =>
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime(),
            )
            .map((applicantDetail: Details) => (
              <JobApplicantCard
                key={applicantDetail.applicantId}
                id={applicantDetail.applicantId}
                name={applicantDetail.firstName}
                status={applicantDetail.status}
                date={applicantDetail.updatedAt.split('T')[0]}
                resumeUrl={applicantDetail.resumeUrl}
                handleShowDetails={showDetailsHandler}
              />
            ))}
        </div>
        <div className="w-full flex justify-end mt-6">
          <PaginationRounded page={data.paging.totalPages} setPage={setPage} />
        </div>
      </div>
      <JobApplicantModal
        isOpen={showDetails}
        onClose={setShowDetails}
        appDetails={data.data}
        applicantId={applicantId}
      />
    </>
  );
};

export default JobApplicants;
