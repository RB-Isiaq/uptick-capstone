import React, { useState } from 'react';
import { LEFT, RIGHT } from '@/public';
import Image from 'next/image';
import JobThumbnail from './internals/JobThumbnail';
import JobDescription from './internals/JobDescription';
import Button from '@/components/Button';
import { JobState } from '@/store/JobReducer';
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { postFile } from '@/Services/ApiCalls';
import Modal from '@/components/Modal/Modal';

const Preview = () => {
  const [isPreviewed, setIsPreviewed] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const {
    title,
    companyLogo,
    company,
    description,
    deadline,
    type,
    category,
    location,
  } = useSelector((state: JobState) => state.jobApplication);

  const formData = new FormData();
  formData.append('jobTitle', title);
  formData.append('companyLogo', companyLogo);
  formData.append('companyName', company);
  formData.append('description', description);
  formData.append('deadline', deadline);
  formData.append('jobType', type);
  formData.append('jobCategory', category);
  formData.append('location', location);
  formData.append('startDate', new Date().toISOString());
  formData.append('endDate', new Date().toISOString());

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const responseData = await postFile(`jobs`, formData);
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

  const handleSubmit = () => {
    mutate();
  };

  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col">
      {isPreviewed ? <JobThumbnail /> : <JobDescription />}
      <div className="w-full flex justify-center items-center gap-[17px] my-[45px]">
        <button
          className={`w-[34.5px] h-[34.5px] flex justify-center items-center ${
            isPreviewed
              ? 'bg-[rgba(28,28,28,0.30)] border-[0.5px] border-[rgba(130,130,130,0.30)]'
              : 'bg-[#477BFF] border-[0.5px] border-[#1C3166]'
          }  rounded-full`}
          onClick={() => setIsPreviewed((prev) => !prev)}
        >
          <Image src={LEFT} alt="Left logo" />
        </button>
        <button
          className={`w-[34.5px] h-[34.5px] flex justify-center items-center ${
            !isPreviewed
              ? 'bg-[rgba(28,28,28,0.30)] border-[0.5px] border-[rgba(130,130,130,0.30)]'
              : 'bg-[#477BFF] border-[0.5px] border-[#1C3166]'
          }  rounded-full`}
          onClick={() => setIsPreviewed((prev) => !prev)}
        >
          <Image src={RIGHT} alt="right logo" />
        </button>
      </div>
      <Button
        text={isPending ? 'Creating job ...' : 'Create Job'}
        onClick={handleSubmit}
      />
      <Modal isOpen={showModal} onClose={setShowModal} message={message} />
    </div>
  );
};

export default Preview;
