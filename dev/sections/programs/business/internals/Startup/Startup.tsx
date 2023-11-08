import React from 'react';
import { HeadText, HeadText2, SubText, SubText2 } from './constants';
import { PARTNER1, PARTNER2, PARTNER3 } from '@/public';
import Profile from './Profile';

export const Startup = () => {
  return (
    <section className="bg-[#E6E6E6]">
      <div className="w-full max-w-[1350px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 md:py-[60px] px-3 font-raleway">
        <div className="w-full max-w-[708px] flex flex-col md:flex-row justify-between gap-10 md:gap-2  items-center bg-[#0E1933] rounded-2xl p-5">
          <div className="self-center">
            <Profile
              image={PARTNER1}
              name="Christiana Okere"
              title="COO, MyStash"
            />
          </div>
          <div className="flex flex-col gap-10">
            <Profile
              name="Blessing Iyamadiken"
              image={PARTNER2}
              title="Head of Platform, Ajim Capital"
            />
            <Profile
              image={PARTNER3}
              name="Erika Wernolf"
              title="Innovation Consultant"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:gap-[30px] w-full max-w-[586px]">
          <h1 className="text-[#000]  text-[32px] md:text-[48px] font-bold">
            {HeadText}
          </h1>
          <h1 className="text-[#000]  text-[28px] md:text-[32px] ">
            {HeadText2}
          </h1>
          <p className="text-[#000]  text-lg">{SubText}</p>
          <p className="text-[#000] text-lg"> {SubText2}</p>
        </div>
      </div>
    </section>
  );
};
