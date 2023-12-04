/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { getData } from '@/Services/ApiCalls';
import { JobDetailsProps } from '../jobsList/internals/Jobs/jobs';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';

export const JobDetails = ({ id }: { id: string }) => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error, data } = useQuery<JobDetailsProps>({
    queryKey: [id],
    queryFn: async () => {
      const result = await getData(`jobs/${id}`);

      return result;
    },
  });
  if (error) {
    return <span>Error: {error.message}</span>;
  }
  const paragraphs = data?.description.split(/\n/);
  const deadlineDate =
    data && data.deadline ? new Date(data.deadline) : new Date();
  const currentDate = new Date();
  const isApplicationOpen = deadlineDate && deadlineDate > currentDate;

  return isLoading ? (
    <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center animate-spin mx-auto">
      <Spinner />
    </div>
  ) : (
    <section className="mt-[-120px] pt-[120px] ">
      <div className="absolute top-0 left-0 w-full bg-[#070C19] h-[80px] md:h-[120px]" />
      <div className="flex flex-col gap-[15px] lg:gap-[30px] w-full max-w-[741px] mx-auto py-10">
        {data?.companyLogo && (
          <Image
            src={data.companyLogo}
            alt="job logo"
            width={225}
            height={181}
            className="w-[225px] h-[181px]"
          />
        )}

        <h1 className="text-black text-2xl lg:text-[48px] font-bold leading-[160%]">
          {data?.jobTitle}
        </h1>
        <p className="text-black font-bold">
          Deadline{' '}
          <span className="ml-2 font-normal">
            {data?.deadline.toString().split('T')[0]}
          </span>
        </p>
        <h2 className="text-black md:text-[32px] font-medium leading-[160%]">
          Job Description/ Requirements
        </h2>
        <div className="w-full flex flex-col gap-1">
          {paragraphs?.map((paragraph, i) => (
            <p className="text-black  leading-[160%]" key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          {isApplicationOpen && data?.status === 'open' ? (
            <Link href={`/form?jobId=${data?.jobId}&title=${data?.jobTitle}`}>
              <Button text="Apply For This Job" />
            </Link>
          ) : (
            <>
              <Button
                text="Apply For This Job"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <Modal
                isOpen={showModal}
                message={'Application has been closed.'}
                onClose={setShowModal}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
