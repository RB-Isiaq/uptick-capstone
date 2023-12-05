import Header from '@/components/Header';
import { HeadText, SubText, blogs } from './constants';
import { BlogCard } from '@/components/Cards/BlogCard';
import Link from 'next/link';

export const Blogs = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center  py-[90px] px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto gap-[55px] overflow-hidden">
        <div className="w-full  flex flex-col justify-around items-start px-[15px] py-2 lg:h-[158px] ">
          <Header title={HeadText} color="text-black" />
          <h1 className="font-raleway  text-[36px] md:text-[60px] font-bold">
            {SubText}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center mb-[110px]">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`blogs/${blog.id}`}>
              <BlogCard
                image={blog.image}
                title={blog.title}
                desc={blog.text}
                date={blog.date}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
