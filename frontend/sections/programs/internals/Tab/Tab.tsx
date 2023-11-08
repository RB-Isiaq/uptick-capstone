'use client';

import React from 'react';
import { programTabs } from './constants';

type TabProps = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};
const Tab = ({ active, setActive }: TabProps) => {
  return (
    <div className="w-full  max-w-[780px] flex gap-2 items-center justify-between mx-auto py-10 px-1">
      {programTabs.map((tab) => (
        <div
          className={`w-[100px] flex justify-center items-center text-sm md:text-base py-2 md:py-4 rounded-xl ${
            active === tab.id
              ? 'bg-uptickBlack text-uptickGray'
              : 'bg-uptickGray text-uptickBlack'
          } font-inter cursor-pointer`}
          key={tab.id}
          onClick={() => setActive(tab.id)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tab;
