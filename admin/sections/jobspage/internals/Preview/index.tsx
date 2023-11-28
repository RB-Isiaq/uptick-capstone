import { LEFT, RIGHT } from '@/public';
import Image from 'next/image';
import React, { useState } from 'react';
import JobThumbnail from './internals/JobThumbnail';
import JobDescription from './internals/JobDescription';
import Button from '@/components/Button';
import { JobState } from '@/store/JobReducer';
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { postData } from '@/Services/ApiCalls';

const Preview = () => {
  const [isPreviewed, setIsPreviewed] = useState(true);
  const {
    title,
    companyLogo,
    company,
    description,
    deadline,
    type,
    category,
    location,
  } = useSelector((state: JobState) => state.jobApplication);

  const jobData = {
    jobTitle: title,
    companyLogo: companyLogo,
    companyName: company,
    description: description,
    deadline: deadline,
    jobType: type,
    jobCategory: category,
    location: location,
  };
  const { mutate, data, error, isSuccess, isPending } = useMutation({
    mutationFn: async () => {
      const data = await postData(`jobs`, jobData);
      return data;
    },
  });

  const handleSubmit = () => {
    mutate();
    console.log(jobData);

    if (isSuccess) {
      console.log('posted for real');
    }
    if (error) {
      console.log(`${error}} end`);
    }
  };
  console.log(data);
  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col">
      {isPreviewed ? <JobThumbnail /> : <JobDescription />}
      <div className="w-full flex justify-center items-center gap-[17px] my-[45px]">
        <button
          className={`w-[34.5px] h-[34.5px] flex justify-center items-center ${
            isPreviewed
              ? 'bg-[rgba(28,28,28,0.30)] border-[0.5px] border-[rgba(130,130,130,0.30)]'
              : 'bg-[#477BFF] border-[0.5px] border-[#1C3166]'
          }  rounded-full`}
          onClick={() => setIsPreviewed((prev) => !prev)}
        >
          <Image src={LEFT} alt="Left logo" />
        </button>
        <button
          className={`w-[34.5px] h-[34.5px] flex justify-center items-center ${
            !isPreviewed
              ? 'bg-[rgba(28,28,28,0.30)] border-[0.5px] border-[rgba(130,130,130,0.30)]'
              : 'bg-[#477BFF] border-[0.5px] border-[#1C3166]'
          }  rounded-full`}
          onClick={() => setIsPreviewed((prev) => !prev)}
        >
          <Image src={RIGHT} alt="right logo" />
        </button>
      </div>
      <Button text="Create Job" onClick={handleSubmit} />
      {isPending && <p>Submitting ...</p>}
    </div>
  );
};

export default Preview;
