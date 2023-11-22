import { LEFT, RIGHT } from '@/public';
import Image from 'next/image';
import React, { useState } from 'react';
import JobThumbnail from './internals/JobThumbnail';
import JobDescription from './internals/JobDescription';

const Preview = () => {
  const [isPreviewed, setIsPreviewed] = useState(true);
  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway">
      {isPreviewed ? <JobThumbnail /> : <JobDescription />}
      <div className="w-full flex justify-center items-center gap-[17px] mt-[45px]">
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
    </div>
  );
};

export default Preview;
