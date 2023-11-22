import { KUDA } from '@/public';
import Image from 'next/image';
import React from 'react';

const JobThumbnail = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-black text-[25px] font-bold leading-[160%]">
        Featured Job
      </h1>

      <div className="w-full flex justify-between items-center   gap-3 bg-[#EDF2FF] rounded-lg border-[#999] border-[0.5px] py-[25px] px-[25px]">
        <Image
          src={KUDA}
          alt='Company"s logo'
          className="w-[242px] h-[196px]"
        />
        <div className="flex flex-col  gap-[15px] w-[298px]">
          <div>
            <h1 className="text-black text-lg font-bold">
              Software Engineer (Backend)
            </h1>
            <p className="text-black text-xs leading-[160%]">
              We’re looking for exceptional software engineers to join our team
              in doing the hard work that makes our users’ lives easy. We run on
              a mix of Clojure and JavaScript (and TypeScript), and the ideal
              candidate has shipped production code in one or more of these
              languages...
            </p>
          </div>
          <p className="text-black text-xs font-bold leading-[160%]">
            Company <span className="font-normal ml-3">Kuda</span>
          </p>
          <p className="text-black text-xs font-bold leading-[160%]">
            Deadline <span className="font-normal ml-3">18th Nov 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobThumbnail;
