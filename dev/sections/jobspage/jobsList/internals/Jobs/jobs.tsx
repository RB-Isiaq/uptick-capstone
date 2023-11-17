import { JOBS } from './constants';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
const Jobs = () => {
  return (
    <div>
      <div className="flex flex-col py-10 ">
        {JOBS.map((item) => (
          <div
            key={item.id}
            className="bg-upLightBlue rounded-2xl grid grid-cols-1 sm:grid-cols-2 items-center p-4 lg:p-8 lg:my-5 my-3 border border-upLightGray text-white"
          >
            <div className="grid-item bg-upLightGray w-[17rem] h-[15rem] lg:w-[25rem] lg:h-[20rem]">
              <Image src={item.image} alt="icon" width={500} height={400} />
            </div>
            <div className="flex flex-col text-black">
              <p className="lg:text-[24px] text-[12px]">{item.id}</p>
              <p className="lg:text-[32px] text-[16px] font-semibold">
                {item.jobTitle}
              </p>
              <p className="text-[12px] lg:text-[16px] ">{item.jobText}</p>
              <p className="text-[12px] lg:text-[16px] pb-4">
                {item.jobDeadline}
              </p>
              <Link href={`/jobs/${item.id}`}>
                <Button text="Apply For This Job" />
              </Link>
            </div>
          </div>
        ))}
      </div>
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
