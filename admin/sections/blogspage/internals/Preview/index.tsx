'use client';
import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import Story from './internals/Story';
import Button from '@/components/Button';
import { BlogState } from '@/store/BlogReducer';
import { useMutation } from '@tanstack/react-query';
import { postData } from '@/Services/ApiCalls';
// import { type } from 'os';

const Preview = () => {
  const [loading, setLoading] = useState(false);
  const { title, story, author, image } = useSelector(
    (state: BlogState) => state.blogs,
  );

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', story);
  formData.append('author', author);
  formData.append('image', image);
  // console.log(Object.fromEntries(formData));

  const { mutate, data, error, isSuccess, isPending } = useMutation({
    mutationFn: async () => {
      const data = await postData(`blogposts`, formData);
      return data;
    },
  });

  const handleSubmit = () => {
    mutate();
    console.log(formData);

    if (isSuccess) {
      console.log('posted for real');
    }
    if (error) {
      console.log(`${error}} end`);
    }
  };
  console.log(data);
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      setLoading(true);
      const result = await postData(`blogposts`, formObject);
      console.log(formObject);

      console.log(result);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col gap-[77px]">
      <Story />
      <Button
        text={isPending ? 'Publishing ...' : 'Publish'}
        onClick={handleSubmit}
      />
      <form action="" onSubmit={submitForm}>
        <input type="text" value={title} name="title" />
        <input type="text" value={author} name="author" />
        <input type="text" value={story} name="content" />
        <input type="file" name="image" />
        <button type="submit">{loading ? 'Submitting ...' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default Preview;
