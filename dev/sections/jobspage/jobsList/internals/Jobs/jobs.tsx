'use client';

import { getData } from '@/Services/ApiCalls';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import { truncateText } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

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
}

const Jobs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const result: JobDetailsProps[] = await getData(`jobs`);

      return result;
    },
  });
  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return isLoading ? (
    <div className="w-[300px] h-[calc(100vh-200px)] flex justify-center items-center animate-spin mx-auto">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-col w-full">
      {data?.map((item) => (
        <div
          key={item.jobId}
          className="bg-upLightBlue rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center p-4 lg:p-8 lg:my-5 my-3 border border-upLightGray text-white  w-full gap-3"
        >
          <div className="grid grid-item">
            <Image
              src={item.companyLogo}
              alt="icon"
              width={454}
              height={370}
              className="w-full h-[250px] md:w-[454px] md:h-[370px]"
            />
          </div>
          <div className="flex flex-col  text-black gap-2">
            <h1 className="text-xl md:text-[32px] text-[20px] font-bold">
              {item.jobTitle}
            </h1>
            <p>{truncateText(item.description)}</p>
            <p>
              <span className="font-bold mr-2">Company</span> {item.companyName}
            </p>
            <p>
              <span className="font-bold mr-2">Deadline:</span>{' '}
              {item.deadline.toString().split('T')[0]}
            </p>
            <Link href={`jobs/${item.jobId}`}>
              <Button text="Apply For This Job" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
