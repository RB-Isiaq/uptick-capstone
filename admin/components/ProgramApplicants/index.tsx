import Link from 'next/link';

import Image from 'next/image';
import { Csv_Icon, Right_Arr } from '@/public';
import ApplicantCard from './ApplicantCard';

type Details = {
  id: number;
  name: string;
  status: string;
  track: string;
  date: string;
};
interface IProgramApplicants {
  title: string;
  details: Details[];
}

const ProgramApplicants = ({ title, details }: IProgramApplicants) => {
  return (
    <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full">
      <div className="w-full  flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center">
          <Link href="/programs/tech">
            <h1 className="text-[#C8D7FF] font-bold text-[24px]">
              Talent Tech
            </h1>
          </Link>
          <Image src={Right_Arr} alt="arrow" />
          <h1 className="text-[#111] font-bold text-[24px]">{title}</h1>
        </div>
        <button className="flex justify-center items-center px-[35px] py-[11px] gap-[11px] rounded-lg bg-[#C8D7FF] text-[#15254C] font-bold">
          Download as CSV
          <Image src={Csv_Icon} alt="download" />
        </button>
      </div>
      <div className="flex justify-between items-center gap-2 py-7 px-6 w-full">
        <h1 className="text-lg font-semibold text-[#111] w-[115px]">Name</h1>
        <h1 className="text-lg font-semibold text-[#111] w-[115px]">Track</h1>
        <h1 className="text-lg font-semibold text-[#111] w-[115px] px-2">
          Status
        </h1>
        <h1 className="text-lg font-semibold text-[#111] w-[115px]">Date</h1>
        <div className="w-[100px]" />
      </div>
      <div className="w-full  flex flex-col justify-between gap-[10px] py-5 ">
        {details.map((program) => (
          <ApplicantCard
            key={program.id}
            id={program.id}
            name={program.name}
            status={program.status}
            track={program.track}
            date={program.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramApplicants;
