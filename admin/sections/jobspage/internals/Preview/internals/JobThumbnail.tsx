'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';
import React from 'react';
import { JobState } from '@/store/JobReducer';
import { truncateText } from '@/utils';

const JobThumbnail = () => {
  const { title, thumbnail, company, deadline, description } = useSelector(
    (state: JobState) => state.jobApplication,
  );
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-black text-[25px] font-bold leading-[160%]">
        Featured Job
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center   gap-3 bg-[#EDF2FF] rounded-lg border-[#999] border-[0.5px] py-[25px] px-[25px]">
        <Image
          src={thumbnail}
          width={242}
          height={196}
          alt="Company's logo"
          className="w-[242px] h-[196px]"
        />
        <div className="flex flex-col  gap-[15px] w-[298px]">
          <div>
            <h1 className="text-black text-lg font-bold">{title}</h1>
            <p className="text-black text-xs leading-[160%]">
              {truncateText(description)}
            </p>
          </div>
          <p className="text-black text-xs font-bold leading-[160%]">
            Company <span className="font-normal ml-3">{company}</span>
          </p>
          <p className="text-black text-xs font-bold leading-[160%]">
            Deadline{' '}
            <span className="font-normal ml-3">{deadline.toString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobThumbnail;
