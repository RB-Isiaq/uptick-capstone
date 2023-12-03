'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Story from './internals/Story';
import Button from '@/components/Button';
import { BlogState } from '@/store/BlogReducer';
import { useMutation } from '@tanstack/react-query';
import { postFile } from '@/Services/ApiCalls';
import Modal from '@/components/Modal/Modal';

const Preview = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const { title, story, author, image } = useSelector(
    (state: BlogState) => state.blogs,
  );

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', story);
  formData.append('author', author);
  formData.append('image', image);
  console.log(Object.fromEntries(formData));

  const { mutate, data, error, isSuccess, isPending } = useMutation({
    mutationFn: async () => {
      const data = await postFile(`blogposts`, formData);
      return data;
    },
  });

  const handleSubmit = () => {
    mutate();
    console.log(formData);

    if (isSuccess) {
      setMessage(data.message);
      setShowModal((prev) => !prev);
    }
    if (error) {
      console.log(`${error}} end`);
      setMessage(error.message);
      setShowModal((prev) => !prev);
    }
  };
  console.log(data);

  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col gap-[77px]">
      <Story />
      <Button
        text={isPending ? 'Publishing ...' : 'Publish'}
        onClick={handleSubmit}
      />
      <Modal isOpen={showModal} onClose={setShowModal} message={message} />
    </div>
  );
};

export default Preview;
