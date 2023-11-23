import { Menu } from '@/public';
import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
  return (
    <div className="flex justify-between  items-center gap-[44px] bg-white rounded-lg shadow-md w-full py-[22px] px-[28px]">
      <Image
        src="/assets/blog-image.png"
        alt="blog image"
        width={248}
        height={160}
        className="w-[248px] h-[160px]"
      />
      <div className="flex flex-col gap-4 w-[314px]">
        <h1 className="text-black">
          Written by <span className="font-bold">Joseph Ojo </span>
        </h1>
        <h1 className="w-full text-2xl font-bold leading-[150%]">
          Bolt Kenya suspends 5% booking fee......
        </h1>
        <p className="text-black leading-[150%]">
          We&apos;ve nurtured and graduated numerous startups that have gone on
          to make their mark in various industries.
        </p>
      </div>
      <p>25 Dec. 2023</p>
      <button type="button">
        <Image src={Menu} alt="menu" />
      </button>
    </div>
  );
};

export default BlogCard;
