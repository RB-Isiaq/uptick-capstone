import Image from 'next/image';
import React from 'react';

type Achievement = {
  icon: string;
  text: string;
  number: string;
};
const Achievement = ({ icon, text, number }: Achievement) => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full border border-[1px,solid,#808080] ">
        <Image src={icon} alt={text} />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-cabin text-[32px] text-uptickBlack font-medium">
          {number}
        </h1>
        <p className="font-raleway text-sm text-[rgba(44,44,44,0.80)]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Achievement;
