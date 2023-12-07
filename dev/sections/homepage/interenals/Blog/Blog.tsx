import Header from '@/components/Header';
import {
  HeadText,
  SubText,
  blogs,
  btn,
  connectionText,
  contactMsg,
  contactMsg1,
} from './constants';
import { BlogCard } from '@/components/Cards/BlogCard';
import Image from 'next/image';
import { CONNECT } from '@/public';
import Button from '@/components/Button';
import Link from 'next/link';

export const Blog = () => {
  return (
    <section className="relative bg-[rgba(17,17,17,0.48)]  vector-black-bg overflow-hidden">
      <div className="flex flex-col justify-center items-center  py-[100px] px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto gap-[55px] overflow-hidden">
        <div className="border-l-8 border-[#6C95FF] w-full  flex flex-col justify-around items-start px-[15px] py-2 lg:h-[158px] ">
          <Header title={HeadText} />
          <h1 className="font-raleway  text-white text-[36px] md:text-[60px] font-bold">
            {SubText}
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:flex-row flex-wrap justify-center mb-[110px]">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              desc={blog.text}
              text={blog.btnText}
              link={blog.link}
            />
          ))}
        </div>
        <div className="absolute left-0 bottom-[300px] flex border border-[#4D4D4D] justify-center items-center gap-[29px] p-[18px] bg-[#1A1A1A] animate-train lg:mt-[45px]">
          {Array.from({ length: 1000 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-[29px] justify-center items-center flex-shrink-0"
            >
              <p className="text-white text-[24px] font-raleway">
                {connectionText}
              </p>
              <Image src={CONNECT} alt="connect" />
            </div>
          ))}
        </div>
        <div className=" flex flex-col justify-center items-center gap-[48px] w-full max-w-[688px] lg:mt-[45px]">
          <div>
            <p className="w-full max-w-[742px] font-raleway text-white text-center leading-[160%]">
              {contactMsg}
            </p>
            <p className="w-full max-w-[742px] font-raleway text-white text-center leading-[160%]">
              {contactMsg1}
            </p>
          </div>
          <Link href="/contact">
            <Button text={btn} plain />
          </Link>
        </div>
      </div>
    </section>
  );
};
