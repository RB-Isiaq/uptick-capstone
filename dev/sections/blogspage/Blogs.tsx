'use client';

import Header from '@/components/Header';
import { HeadText, SubText } from './constants';
import { BlogCard } from '@/components/Cards/BlogCard';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/Services/ApiCalls';
import Spinner from '@/components/Spinner';
import { StaticImageData } from 'next/image';
import { Key, useState } from 'react';
import PaginationRounded from '@/components/Pagination';
interface Blog {
  postId: Key | null | undefined;
  imageUrl: string | StaticImageData;
  title: string;
  content: string;
  updatedAt: string;
}
export const Blogs = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ['blogposts', page],
    queryFn: async () => {
      const result = await getData(`blogposts?page=${page}`);

      return result;
    },
  });
  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return isLoading ? (
    <div className="w-[300px] h-[calc(100vh-200px)] flex justify-center items-center animate-spin mx-auto">
      <Spinner />
    </div>
  ) : (
    <section>
      <div className="flex flex-col justify-center items-center py-[40px] lg:py-[80px] px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto gap-[30px] lg:gap-[55px] overflow-hidden ">
        <div className="w-full flex flex-col justify-around items-start px-[15px] py-2 lg:h-[158px]">
          <Header title={HeadText} color="text-black" />
          <h1 className="font-raleway  text-[36px] md:text-[60px] font-bold">
            {SubText}
          </h1>
        </div>
        <div className="w-full h-[1px] bg-[#4D4D4D]" />
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center mb-[110px]">
          {data.data.map((blog: Blog) => (
            <Link key={blog.postId} href={`blogs/${blog.postId}`}>
              <BlogCard
                image={blog.imageUrl}
                title={blog.title}
                desc={blog.content}
                date={blog.updatedAt.split('T')[0]}
              />
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center mt-6">
          <PaginationRounded page={data.paging.totalPages} setPage={setPage} />
        </div>
      </div>
    </section>
  );
};
