'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import BlogFormModal from '@/components/Modal/BlogFormModal';
import BlogCard from '@/components/Cards/BlogCard';

const BlogsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full min-h-screen font-raleway">
      <div className="w-full  flex justify-between items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">Blogs</h1>

        <Button
          text="Add New"
          icon
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="flex justify-between gap-2 py-7 px-6 w-full">
        <h1 className="text-lg font-semibold w-[314px]">Listed Blog Posts</h1>
        <div className="w-[314px]" />
        <h1 className="text-lg font-semibold w-[185px]">Published date</h1>
        <div />
      </div>
      <BlogCard />
      <BlogFormModal isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
};

export default BlogsPage;
