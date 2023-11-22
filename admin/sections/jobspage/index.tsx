'use client';

import Button from '@/components/Button';
import FormModal from '@/components/Modal/FormModal';
import { useState } from 'react';

const JobsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full min-h-screen">
      <div className="w-full  flex justify-between items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">Jobs</h1>

        <Button
          text="Add New"
          icon
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="flex justify-between gap-2 py-7 px-6 w-full">
        <h1 className="text-lg font-semibold w-[165px]">Listed Jobs</h1>
        <h1 className="text-lg font-semibold w-[185px]">
          Number of applicants
        </h1>
        <div />
      </div>
      <FormModal isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
};

export default JobsPage;
