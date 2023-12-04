'use client';

import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import { FormEvent, useState } from 'react';
import { postData } from '@/Services/ApiCalls';
import Modal from '@/components/Modal/Modal';
const Map = dynamic(() => import('@/components/Map/Map'), {
  ssr: false,
});

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      setIsLoading(true);
      const result = await postData(`contact`, formObject);

      setMessage(result.message);
      setIsModalOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setMessage(error.message);
        setIsModalOpen(true);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="mt-[-120px] pt-[120px]  bg-[#111] waves-bg ">
      <div className="flex flex-col gap-[100px] py-[60px] md:py-[100px] font-raleway  px-3 xl:px-[60px] md:px-10 w-full max-w-[1440px] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-[781px]"
        >
          <h1 className="text-white text-[38px] md:text-[72px] font-bold ">
            Get in touch
          </h1>
          <p className="text-white text-[18px] mt-[-16px]">
            We Really Can’t Wait To Hear From You!
          </p>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full py-[18px] px-5 rounded-lg border border-[#2F2F2F] bg-[rgba(26,26,26,0.75)] text-white"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Enter your email adress"
            className="w-full py-[18px] px-5 rounded-lg border border-[#2F2F2F] bg-[rgba(26,26,26,0.75)] text-white"
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="w-full py-[18px] px-5 rounded-lg border border-[#2F2F2F] bg-[rgba(26,26,26,0.75)] text-white"
          />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder="Go ahead we are listening"
            className="w-full py-[18px] px-5 rounded-lg border border-[#2F2F2F] bg-[rgba(26,26,26,0.75)] text-white"
            required
          ></textarea>
          <div>
            <Button
              text={isLoading ? 'Sending' : 'Send Message'}
              type="submit"
            />
          </div>
        </form>
        <div className="z-[1]">
          <Map />
        </div>
      </div>
      <Modal isOpen={isModalOpen} message={message} onClose={setIsModalOpen} />
    </section>
  );
};
