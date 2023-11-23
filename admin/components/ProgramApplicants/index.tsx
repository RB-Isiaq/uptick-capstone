'use client';

import Link from 'next/link';

import Image from 'next/image';
import { Right_Arr } from '@/public';
import ApplicantCard from './ApplicantCard';
import ApplicantModal from '../Modal/ApplicantModal';
import { useState } from 'react';
import PaginationRounded from '../Pagination';
import CSVDownloadButton from '../DownloadCsv';

export type Details = {
  id: number;
  name: string;
  status: string;
  track: string;
  date: string;
};
interface IProgramApplicants {
  title: string;
  details: Details[];
}

const ProgramApplicants = ({ title, details }: IProgramApplicants) => {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = (id: string | number) => {
    console.log(id);
    setShowDetails(true);
  };
  return (
    <>
      <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full">
        <div className="w-full  flex justify-between items-center mb-2">
          <div className="flex gap-2 items-center">
            <Link href="/programs/tech">
              <h1 className="text-[#C8D7FF] font-bold text-[24px]">
                Talent Tech
              </h1>
            </Link>
            <Image src={Right_Arr} alt="arrow" />
            <h1 className="text-[#111] font-bold text-[24px]">{title}</h1>
          </div>
          <CSVDownloadButton data={details} />
        </div>
        <div className="flex justify-between items-center gap-2 py-7 px-6 w-full">
          <h1 className="text-lg font-semibold text-[#111] w-[115px]">Name</h1>
          <h1 className="text-lg font-semibold text-[#111] w-[115px]">Track</h1>
          <h1 className="text-lg font-semibold text-[#111] w-[115px] px-2">
            Status
          </h1>
          <h1 className="text-lg font-semibold text-[#111] w-[115px]">Date</h1>
          <div className="w-[100px]" />
        </div>
        <div className="w-full  flex flex-col justify-between gap-[10px] py-5 ">
          {details.map((applicantDetail) => (
            <ApplicantCard
              key={applicantDetail.id}
              id={applicantDetail.id}
              name={applicantDetail.name}
              status={applicantDetail.status}
              track={applicantDetail.track}
              date={applicantDetail.date}
              handleShowDetails={showDetailsHandler}
            />
          ))}
        </div>
        <div className="w-full flex justify-end mt-6">
          <PaginationRounded />
        </div>
      </div>
      <ApplicantModal isOpen={showDetails} onClose={setShowDetails} />
    </>
  );
};

export default ProgramApplicants;
