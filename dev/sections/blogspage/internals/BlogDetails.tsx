/* eslint-disable react/no-unescaped-entities */
'use client';

import { getData } from '@/Services/ApiCalls';
import Spinner from '@/components/Spinner';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const BlogDetails = ({ id }: { id: string | number }) => {
  console.log(id);
  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const result = await getData(`blogposts/${id}`);

      return result;
    },
  });
  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const paragraphs = data?.data.content.split(/\n/);

  return isLoading ? (
    <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center animate-spin mx-auto">
      <Spinner />
    </div>
  ) : (
    <section>
      <div className="flex flex-col justify-center items-center py-[40px] lg:py-[80px] px-3 xl:px-[60px] md:px-10 max-w-[854px] mx-auto gap-[28px]  lg:gap-[37px] overflow-hidden">
        <div className="w-full  flex flex-col ">
          <h3 className="text-lg">
            Written by <span className="font-bold">{data?.data.author}</span>
          </h3>
          <h1 className="font-raleway  text-[28px] md:text-[48px] font-bold">
            {data?.data.title}
          </h1>
        </div>
        <Image
          src={data?.data.imageUrl}
          alt="blog-icon"
          width={854}
          height={400}
        />
        <div className="flex flex-col gap-3">
          {paragraphs.map((p: string, i: number) => (
            <p className="leading-[150%]" key={i}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
