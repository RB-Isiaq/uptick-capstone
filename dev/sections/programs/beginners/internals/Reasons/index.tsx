import React from 'react';
import { reasons } from '../Why/constants';

const Reasons = () => {
  return (
    <section className="bg-white lg:mt-[14px] w-full">
      <div className="w-full max-w-[1150px] mx-auto flex flex-col lg:flex-row justify-between  gap-5  ">
        {reasons.map((reason) => (
          <div key={reason.id} className="w-full max-w-[351px] p-[30px]">
            <h1 className="text-[24px] leading-[160%] text-black font-semibold mb-[15px]">
              {reason.title}
            </h1>
            <p className="text-[#4d4d4d] leading-[160%]">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
