'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';
import React from 'react';
import { JobState } from '@/store/JobReducer';

const JobDescription = () => {
  const { title, thumbnail, deadline, description } = useSelector(
    (state: JobState) => state.jobApplication,
  );
  const paragraphs = description.split(/\n/);
  return (
    <div className="flex flex-col gap-[15px] w-full max-w-[480px] mx-auto">
      <Image
        src={thumbnail}
        alt="job logo"
        width={109}
        height={83}
        className="w-[109px] h-[88px]"
      />
      <div className="flex flex-col gap-[15px]"></div>
      <h1 className="text-black text-2xl font-bold leading-[160%]">{title}</h1>
      <p className="text-black text-xs font-bold">
        Deadline <span className="font-normal">{deadline}</span>
      </p>
      <h2 className="text-black text-[17px] font-medium leading-[160%]">
        Job Description/ Requirements
      </h2>
      <div className="w-full flex flex-col gap-1">
        {paragraphs?.map((paragraph, i) => (
          <p className="text-black text-xs leading-[160%]" key={i}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;
