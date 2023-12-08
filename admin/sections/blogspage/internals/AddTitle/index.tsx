'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/Button';
import {
  BlogState,
  setAuthor,
  setStep,
  setStory,
  setTitle,
} from '@/store/BlogReducer';
const AddTitle = () => {
  const dispatch = useDispatch();
  const { step, title, story, author } = useSelector(
    (state: BlogState) => state.blogs,
  );
  const [blogTitle, setBlogTitle] = useState(title);
  const [blogAuthor, setBlogAuthor] = useState(author);
  const [blogStory, setBlogStory] = useState(story);

  const handleDispatch = () => {
    dispatch(setTitle(blogTitle));
    dispatch(setAuthor(blogAuthor));
    dispatch(setStory(blogStory));
    dispatch(setStep(step + 1));
  };

  return (
    <div className="flex flex-col gap-[30px] font-raleway">
      <div className=" flex flex-col">
        <label htmlFor="title" className="text-black text-lg font-medium">
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          className="border-0 outline-0 border-b border-black text-black  bg-inherit pt-3 pb-1"
          defaultValue={title}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
      </div>
      <div className=" flex gap-[37px] items-center">
        <label htmlFor="author" className="text-black text-lg font-medium">
          Author
        </label>
        <input
          type="text"
          id="author"
          className="border-0 outline-0 border-b border-black text-black pt-3 pb-1"
          defaultValue={author}
          onChange={(e) => setBlogAuthor(e.target.value)}
        />
      </div>

      <div className="bg-[#F7F7F7] py-[16px] px-3 md:px-[27px] flex flex-col gap-3">
        <label htmlFor="blogStory" className="text-black text-lg font-medium">
          Write Blog
        </label>
        <textarea
          id="blogStory"
          placeholder="Story"
          className="border-0 outline-0 border-b border-black text-black pt-3 pb-1 bg-inherit"
          rows={10}
          defaultValue={story}
          onChange={(e) => setBlogStory(e.target.value)}
        />
      </div>

      <Button text="Save Changes" onClick={handleDispatch} />
    </div>
  );
};

export default AddTitle;
