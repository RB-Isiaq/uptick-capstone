'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';
import { BlogState } from '@/store/BlogReducer';

const Story = () => {
  const { title, thumbnail, story, author } = useSelector(
    (state: BlogState) => state.blogs,
  );
  const paragraphs = story.split(/\n/);
  return (
    <div className="flex flex-col gap-[15px] w-full max-w-[480px] mx-auto">
      <p className="text-black ">
        Written by <span className=" font-bold">{author}</span>
      </p>
      <h1 className="text-black text-2xl font-bold leading-[160%]">{title}</h1>
      <Image
        src={thumbnail}
        alt="job logo"
        width={372}
        height={240}
        className="w-[372px] h-[240px]"
      />

      <div className="w-full flex flex-col gap-2">
        {paragraphs?.map((paragraph, i) => (
          <p className="text-black text-xs leading-[160%]" key={i}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Story;
