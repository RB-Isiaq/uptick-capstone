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
  console.log(data);
  return isLoading ? (
    <div className="w-[300px] h-[calc(100vh-200px)] flex justify-center items-center animate-spin mx-auto">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-col w-full">
      {data?.map((item) => (
        <div
          key={item.jobId}
          className="bg-upLightBlue rounded-2xl grid grid-cols-1 sm:grid-cols-2 items-center p-4 lg:p-8 lg:my-5 my-3 border border-upLightGray text-white  w-full"
        >
          <div className="hidden md:grid md:grid-item bg-upLightGray  w-[454px] h-[370px] ">
            <Image
              src={item.companyLogo}
              alt="icon"
              width={454}
              height={370}
              className=" w-[454px] h-[370px]"
            />
          </div>
          <div className="flex flex-col  text-black gap-2">
            <p className="lg:text-[32px] text-[16px] font-bold">
              {item.jobTitle}
            </p>
            <p className="text-[12px] lg:text-[16px]">
              {truncateText(item.description)}
            </p>
            <p className="text-[12px] lg:text-[16px]">
              <span className="font-bold mr-2">Company</span> {item.companyName}
            </p>
            <p className="text-[12px] lg:text-[16px]">
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

// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Button from '@/components/Button';
// import Link from 'next/link';

// interface Job {
//   id: number;
//   image: string;
//   jobTitle: string;
//   jobText: string;
//   jobDeadline: string;
// }

// const Jobs = () => {
//   const [jobs, setJobs] = useState<Job[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://uptick-api-backend.onrender.com/api/jobs',
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Jobs List:', data);
//         setJobs(data as Job[]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col py-10">
//         {jobs.map((item) => (
//           <div
//             key={item.id}
//             className="bg-upLightBlue rounded-2xl flex flex-row content-around justify-around px-12 py-10 my-6 border border-upLightGray text-white"
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Jobs;
