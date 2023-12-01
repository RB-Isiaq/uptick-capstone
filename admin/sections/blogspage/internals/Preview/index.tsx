'use client';
import { useSelector } from 'react-redux';
import Story from './internals/Story';
import Button from '@/components/Button';
import { BlogState } from '@/store/BlogReducer';
import { useMutation } from '@tanstack/react-query';
import { postData } from '@/Services/ApiCalls';

const Preview = () => {
  const { title, story, author, image } = useSelector(
    (state: BlogState) => state.blogs,
  );

  const blogData = {
    title: title,
    image: image,
    imageUrl: image,
    content: story,
    author: author,
  };
  const { mutate, data, error, isSuccess, isPending } = useMutation({
    mutationFn: async () => {
      const data = await postData(`blogposts`, blogData);
      return data;
    },
  });

  const handleSubmit = () => {
    mutate();
    console.log(blogData);

    if (isSuccess) {
      console.log('posted for real');
    }
    if (error) {
      console.log(`${error}} end`);
    }
  };
  console.log(data);

  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col gap-[77px]">
      <Story />
      <Button text="Publish" onClick={handleSubmit} />
      {isPending && <p>Publishing ...</p>}
    </div>
  );
};

export default Preview;
