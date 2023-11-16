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
    <section className="bg-[#111]  vector-bg">
      <div className="flex flex-col justify-center items-center  py-[149px] px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto gap-[58px] overflow-hidden">
        <div className="border-l-8 border-[#6C95FF] w-full  flex flex-col justify-start items-start p-3">
          <Header title={HeadText} />
          <h1 className="font-raleway  text-white text-[36px] md:text-[60px] font-bold">
            {SubText}
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row justify-center">
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
        <div className="flex border border-[#4D4D4D] justify-center items-center gap-[29px] p-[18px] bg-[#1A1A1A] animate-train">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-[29px] justify-center items-center flex-shrink-0 w-[250px]"
            >
              <p className="text-white text-[24px] font-raleway">
                {connectionText}
              </p>
              <Image src={CONNECT} alt="connect" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-[48px] w-full max-w-[688px] ]">
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
