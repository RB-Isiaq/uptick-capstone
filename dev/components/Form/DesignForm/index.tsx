'use client';

import React, { FormEvent, useState } from 'react';
import { designInput, title } from './constants';
import { useSearchParams } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button';
// import { FormBody } from '../constants';
import { postData } from '@/Services/ApiCalls';

const DesignForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();
  const programId = params.get('programId');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      setIsLoading(true);
      const result = await postData(
        `applicants/${programId}/apply-program`,
        formObject,
      );

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
      <div className="w-full flex flex-col justify-between gap-4   px-3 py-[60px] lg:py-[80px] md:px-10 xl:px-[170px]  max-w-[1440px] mx-auto font-raleway bg-[#fff]">
        <h1 className="text-black font-bold text-[32px] md:text-[48px] leading-[160%]">
          {title}
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-[575px]">
          <h1 className="text-black text-[18px] md:text-[24px] mb-[10px] md:mb-[22px] leading-[160%]">
            SUBMIT YOUR APPLICATION
          </h1>
          {designInput.map((inp) => (
            <div
              key={inp.id}
              className="flex flex-col w-full justify-between gap-1  mb-[20px] lg:mb-[40px]"
            >
              <label
                htmlFor={inp.name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {inp.label}
              </label>
              {inp.type === 'text' ||
              inp.type === 'email' ||
              inp.type === 'url' ||
              inp.type === 'tel' ? (
                <input
                  id={inp.name}
                  type={inp.type}
                  name={inp.name}
                  required={inp.required}
                  placeholder={inp.placeHolder}
                  className="form_input"
                />
              ) : inp.type === 'select' ? (
                <select
                  id={inp.name}
                  name={inp.name}
                  required={inp.required}
                  placeholder={inp.placeHolder}
                  className="form_input"
                >
                  {inp.options?.map((option, i) => (
                    <option key={i} value={option} className="form_input">
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <textarea
                  id={inp.name}
                  name={inp.name}
                  required={inp.required}
                  placeholder={inp.placeHolder}
                  className="form_input"
                ></textarea>
              )}
            </div>
          ))}
          <Button
            text={isLoading ? 'Submitting ...' : 'Submit Application'}
            type="submit"
          />
        </form>
        <Modal
          isOpen={isModalOpen}
          message={message}
          onClose={setIsModalOpen}
        />
      </div>
    </section>
  );
};

export default DesignForm;
