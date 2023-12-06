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
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const responseData = await postFile(`blogposts`, formData);
      return responseData;
    },
    onSuccess: (responseData) => {
      setMessage(responseData.message);
      setShowModal(true);
    },
    onError: (error) => {
      console.error(error);
      setMessage(error.message);
      setShowModal(true);
    },
  });

  const handleSubmit = async () => {
    mutate();
  };

  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col gap-[77px]">
      <Story />
      <Button
        text={isPending ? 'Publishing ...' : 'Publish'}
        onClick={handleSubmit}
      />
      <Modal isOpen={showModal} onClose={setShowModal} message={message} />
      <p className="text-center">{message}</p>
    </div>
  );
};

export default Preview;
