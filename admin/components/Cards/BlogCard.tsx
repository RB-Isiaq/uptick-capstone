'use client';

import { deleteData } from '@/Services/ApiCalls';
import { Menu } from '@/public';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';
export type BlogProps = {
  postId: string;
  imageUrl: string | StaticImageData;
  title: string;
  content: string;
  updatedAt: string;
  author: string;
};
interface BlogCardProps {
  blog: BlogProps;
}
const BlogCard = ({ blog }: BlogCardProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const queryClient = useQueryClient();

  const handleDeleteBlog = async (id: string | number) => {
    try {
      const res = await deleteData(`blogposts/${id} `);
      setIsOpen(true);
      setMessage(res.message);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      setIsOpen(true);
      setMessage('Something went wrong, Please try again');
    }
  };
  const refetchData = async () => {
    await queryClient.invalidateQueries({ queryKey: ['blogposts'] });
    await queryClient.refetchQueries({ queryKey: ['blogposts'] });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between  lg:items-center gap-2  lg:gap-[44px] bg-white rounded-lg shadow-md w-full py-[22px] px-3 md:px-[28px]">
      <Image
        src={blog?.imageUrl}
        alt="blog image"
        width={248}
        height={160}
        className="w-full md:w-[248px] h-[160px]"
      />
      <div className="flex flex-col gap-4 w-[314px]">
        <h1 className="text-black">
          Written by <span className="font-bold">{blog?.author}</span>
        </h1>
        <h1 className="w-full text-2xl font-bold leading-[150%]">
          {blog?.title.split(' ').slice(0, 6).join(' ') + ' ...'}
        </h1>
        <p className=" text-black leading-[150%]">
          {blog?.content.split(' ').slice(0, 17).join(' ') + ' ...'}
        </p>
      </div>
      <p> {blog?.updatedAt.split('T')[0]}</p>
      <div className="relative">
        <button type="button" onClick={() => setShowOptions((prev) => !prev)}>
          <Image src={Menu} alt="menu" />
        </button>
        <div
          className={`absolute top-[10px]   bg-[#252531] text-white ${
            showOptions ? 'flex' : 'hidden'
          } -top-[10px] left-8 md:left-auto md:right-[20px]  flex-col  items-start rounded-lg w-max`}
        >
          <Link href={`blogs/${blog?.postId}`}>
            <button
              className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white"
              onClick={() => {
                setShowOptions((prev) => !prev);
              }}
            >
              View blog post
            </button>
          </Link>
          <button
            className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white"
            onClick={() => {
              handleDeleteBlog(blog?.postId);
              refetchData();
              setShowOptions((prev) => !prev);
            }}
          >
            Delete blog post
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} message={message} onClose={setIsOpen} />
    </div>
  );
};

export default BlogCard;
