'use client';

import React, { FormEvent, useState } from 'react';
import { detailsInput, links } from './constants';

import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import { postData } from '@/Services/ApiCalls';

const JobForm = () => {
  const params = useSearchParams();
  const title = params.get('title');
  const jobId = params.get('programId');
  console.log(jobId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    console.log(formObject);

    try {
      setIsLoading(true);
      const result = await postData(
        `applicants/${jobId}/apply-job`,
        formObject,
      );

      console.log(result);

      setMessage(result.message);
      setIsModalOpen((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setMessage(error.message);
        setIsModalOpen((prev) => !prev);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-[-120px] pt-[120px] ">
      <div className="absolute top-0 left-0 w-full bg-[#070C19] h-[80px] md:h-[120px]" />
      <div className="w-full flex flex-col justify-between gap-4   px-3 py-[60px] lg:py-[80px] md:px-10 xl:px-[170px]  max-w-[1440px] mx-auto font-raleway">
        <h1 className="text-black font-bold text-[32px] md:text-[48px] mb-[10px] md:mb-[35px] leading-[160%]">
          {title || 'Software Engineer (Backend)'}
        </h1>
        <h2 className="text-black font-bold text-[18px] md:text-[24px] mb-[10px] md:mb-[51px] leading-[160%] max-w-[533px]">
          {'GLOBAL REMOTE ENGINEERING / FULL-TIME (REMOTE) / REMOTE'}
        </h2>

        <form onSubmit={handleSubmit}>
          <h1 className="text-black text-[18px] md:text-[24px] mb-[10px] md:mb-[44px] leading-[160%]">
            SUBMIT YOUR APPLICATION
          </h1>
          {detailsInput.map((inp) => (
            <div
              key={inp.id}
              className="flex flex-col lg:flex-row  w-full justify-between lg:items-center gap-4  mb-[10px] lg:mb-[30px]"
            >
              <label
                htmlFor={inp.name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {inp.label}
              </label>
              <input
                id={inp.name}
                type={inp.type}
                name={inp.name}
                required={inp.required}
                className="w-full max-w-[741px] py-[18px] px-5 flex-shrink-0 rounded-lg border border-[1px,solid,#B3B3B3] bg-[#E6E6E6]"
              />
            </div>
          ))}
          <h1 className="text-black text-[18px] md:text-[24px] my-[30px] md:my-[44px] leading-[160%]">
            LINKS
          </h1>
          {links.map((i) => (
            <div
              key={i.id}
              className="flex flex-col lg:flex-row  w-full justify-between lg:items-center gap-4  mb-[10px] lg:mb-[30px]"
            >
              <label
                htmlFor={i.name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {i.label}
              </label>
              <input
                id={i.name}
                type={i.type}
                name={i.name}
                required={i.required}
                className="w-full max-w-[741px] py-[18px] px-5 flex-shrink-0 rounded-lg border border-[#B3B3B3] bg-[#E6E6E6]"
              />
            </div>
          ))}
          <h1 className="text-black text-[18px] md:text-[24px] my-[30px] md:my-[44px] leading-[160%]">
            WHERE ARE YOU BASED?
          </h1>
          <div className="flex flex-col  w-full justify-between  gap-4 mt-[60px] mb-[30px]">
            <label
              htmlFor="cityCountry"
              className="text-black text-lg md:text-[24px] leading-[160%]"
            >
              (City, Country)
            </label>
            <input
              id="cityCountry"
              type="text"
              name="cityCountry"
              className="w-full py-[18px] px-5 flex-shrink-0 rounded-lg border border-[#B3B3B3] bg-[#E6E6E6]"
            />
          </div>
          <div className="flex flex-col  w-full justify-between  gap-4 mt-[60px] mb-[30px]">
            <label
              htmlFor="additionalInfo"
              className="text-black text-lg md:text-[24px] leading-[160%]"
            >
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={10}
              cols={30}
              className="w-full py-[18px] px-5 flex-shrink-0 rounded-lg border border-[#B3B3B3] bg-[#E6E6E6]"
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              text={isLoading ? 'Submitting ...' : 'Submit Application'}
              type="submit"
            />{' '}
          </div>
        </form>
      </div>
      <Modal isOpen={isModalOpen} message={message} onClose={setIsModalOpen} />
    </section>
  );
};

export default JobForm;
