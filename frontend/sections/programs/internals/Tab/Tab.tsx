'use client';

import React, { useState } from 'react';
import { programTabs } from './constants';

const Tab = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <div className="w-full  max-w-[780px] flex gap-2 items-center justify-between mx-auto py-10">
      {programTabs.map((tab) => (
        <div
          className={`w-[100px] flex justify-center items-center py-4 rounded-xl ${
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
