'use client';

import { getData } from '@/Services/ApiCalls';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

interface JobDetails {
  jobId: string;
  title: string;
  description: string;
  requirements?: string;
  applicationFormLink?: string;
  companyLogo?: string;
  applicationDeadline: string;
  startDate?: string;
  endDate?: string | null;
}

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<null | JobDetails[]>([]);

  const getJobs = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await getData(`jobs`);
      console.log(result);
      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getJobs();
  }, [getJobs]);
  return (
    <div className="flex flex-col w-full">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        data?.map((item, i) => (
          <div
            key={item.jobId}
            className="bg-upLightBlue rounded-2xl grid grid-cols-1 sm:grid-cols-2 items-center p-4 lg:p-8 lg:my-5 my-3 border border-upLightGray text-white  w-full"
          >
            <div className="hidden md:grid md:grid-item bg-upLightGray  w-[454px] h-[370px] ">
              <Image
                src={i % 2 ? '/assets/kuda.png' : '/assets/jumia.jpg'}
                alt="icon"
                width={454}
                height={370}
                className=" w-[454px] h-[370px]"
              />
            </div>
            <div className="flex flex-col  text-black">
              <p className="lg:text-[32px] text-[16px] font-bold">
                {item.title}
              </p>
              <p className="text-[12px] lg:text-[16px] mb-[30px]">
                {item.description}
              </p>
              <p className="text-[12px] lg:text-[16px] mb-[30px]">
                <span className="font-bold mr-2">Deadline:</span>{' '}
                {item.applicationDeadline.split('T')[0]}
              </p>
              <Link href={`/form?jobId=${item.jobId}&title=${item.title}`}>
                <Button text="Apply For This Job" />
              </Link>
            </div>
          </div>
        ))
      )}
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
