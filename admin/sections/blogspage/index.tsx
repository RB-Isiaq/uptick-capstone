'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import BlogFormModal from '@/components/Modal/BlogFormModal';
import BlogCard, { BlogProps } from '@/components/Cards/BlogCard';
import { getData } from '@/Services/ApiCalls';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';
import PaginationRounded from '@/components/Pagination';

const BlogsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ['blogposts', isOpen, page],
    queryFn: async () => {
      const result = await getData(`blogposts?page=${page}`);

      return result;
    },
  });
  if (isLoading) {
    return (
      <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center animate-spin mx-auto">
        <Spinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center animate-spin mx-auto">
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FF] px-3 lg:px-8 py-[64px] pb-[100px] w-full min-h-screen font-raleway">
      <div className="w-full  flex justify-between items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">Blogs</h1>

        <Button
          text="Add New"
          icon
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="flex justify-between gap-2 py-7 px-3 lg:px-6 w-full">
        <h1 className="text-lg font-semibold w-[314px]">Listed Blog Posts</h1>
        <div className="lg:w-[314px]" />
        <h1 className="hidden lg:block text-lg font-semibold w-[185px]">
          Published date
        </h1>
        <div />
      </div>
      <div className="w-full flex flex-col gap-6">
        {data.data.map((data: BlogProps) => (
          <BlogCard key={data.postId} blog={data} />
        ))}
      </div>
      <div className="w-full flex justify-end mt-10">
        <PaginationRounded page={data.paging.totalPages} setPage={setPage} />
      </div>
      <BlogFormModal isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
};

export default BlogsPage;
