'use client';

import { useState } from 'react';
import ApplicantModal from '../Modal/ApplicantModal';

interface IApplicationCard {
  name: string;
  track: string;
  status: string;
  date: string;
  id: string | number;
}

const ApplicantCard = ({ name, track, status, date, id }: IApplicationCard) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex justify-between items-center gap-2 py-[26px] px-6 w-full bg-white">
      <h1 className="text-lg  text-[#111] w-[110px] ">{name}</h1>
      <h1 className="text-lg  text-[#111] w-[110px] ">{track}</h1>
      <div className="w-[110px] flex justify-center">
        <h1
          className={`text-lg  text-[#111] px-[10px] py-1 rounded-xl ${
            status === 'Accepted'
              ? 'bg-[#BBF5E7] '
              : status === 'Rejected'
              ? 'bg-[#FF3434] '
              : 'bg-[#E6E6E6] '
          } `}
        >
          {status}
        </h1>
      </div>
      <h1 className="text-lg  text-[#111] w-[110px]">{date}</h1>
      <button
        className="flex justify-center items-center px-[10px] py-[13px] rounded-lg bg-[#B5CAFF] text-black"
        onClick={() => {
          console.log(id);
        }}
      >
        View Details
      </button>
      <ApplicantModal isOpen={showDetails} onClose={setShowDetails} />
    </div>
  );
};

export default ApplicantCard;
