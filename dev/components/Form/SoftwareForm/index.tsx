'use client';

import React, { FormEvent, useState } from 'react';
import {
  remainingInputs,
  softwareInput,
  stackInput,
  techStack,
  title,
} from './constants';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button';
import { postData } from '@/Services/ApiCalls';

export interface IProgramId {
  programId: string;
}

const SoftwareForm = ({ programId }: IProgramId) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [stack, setStack] = useState('Frontend');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      setIsLoading(true);
      const result = await postData(
        `progApplicant/${programId}/apply-program`,
        formObject,
      );

      if (result.applicant) {
        setMessage(result.message);
        setIsModalOpen((prev) => !prev);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
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
          <h1 className="text-black text-[18px] md:text-[24px] mb-[10px] md:mb-[20px] leading-[160%]">
            SUBMIT YOUR APPLICATION
          </h1>
          {softwareInput.map((inp) => (
            <div
              key={inp.id}
              className="flex flex-col w-full justify-between gap-1 mb-5"
            >
              <label
                htmlFor={inp.name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {inp.label}
                {inp.required && (
                  <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                    *
                  </span>
                )}
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
                    <option
                      key={i}
                      value={option}
                      className="form_input py-10 my-4"
                    >
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
          <div className="flex flex-col w-full justify-between gap-1  mb-5">
            <label
              htmlFor={stackInput.name}
              className="text-black text-lg md:text-[24px] leading-[160%]"
            >
              {stackInput.label}
              {stackInput.required && (
                <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                  *
                </span>
              )}
            </label>
            <select
              id={stackInput.name}
              name={stackInput.name}
              required={stackInput.required}
              placeholder={stackInput.placeHolder}
              className="form_input"
              value={stack}
              onChange={(e) => setStack(e.currentTarget.value)}
            >
              {stackInput.options?.map((option, i) => (
                <option
                  key={i}
                  value={option}
                  className="form_input py-10 my-4"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
          {stack === 'Frontend' ? (
            <div className="flex flex-col w-full justify-between gap-1  mb-5">
              <label
                htmlFor={techStack[0].name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {techStack[0].label}
                {techStack[0].required && (
                  <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                    *
                  </span>
                )}
              </label>
              <select
                id={techStack[0].name}
                name={techStack[0].name}
                required={techStack[0].required}
                placeholder={techStack[0].placeHolder}
                className="form_input"
              >
                {techStack[0].options?.map((option, i) => (
                  <option
                    key={i}
                    value={option}
                    className="form_input py-10 my-4"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : stack === 'Backend' ? (
            <div className="flex flex-col w-full justify-between gap-1  mb-5">
              <label
                htmlFor={techStack[1].name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {techStack[1].label}
                {techStack[1].required && (
                  <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                    *
                  </span>
                )}
              </label>
              <select
                id={techStack[1].name}
                name={techStack[1].name}
                required={techStack[1].required}
                placeholder={techStack[1].placeHolder}
                className="form_input"
              >
                {techStack[1].options?.map((option, i) => (
                  <option
                    key={i}
                    value={option}
                    className="form_input py-10 my-4"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : stack === 'Mobile' ? (
            <div className="flex flex-col w-full justify-between gap-1  mb-5">
              <label
                htmlFor={techStack[2].name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {techStack[2].label}
                {techStack[2].required && (
                  <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                    *
                  </span>
                )}
              </label>
              <select
                id={techStack[2].name}
                name={techStack[2].name}
                required={techStack[2].required}
                placeholder={techStack[2].placeHolder}
                className="form_input"
              >
                {techStack[2].options?.map((option, i) => (
                  <option
                    key={i}
                    value={option}
                    className="form_input py-10 my-4"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : stack === 'Full Stack' || stack === 'Other...' ? (
            <div className="flex flex-col w-full justify-between gap-1  mb-5">
              <label
                htmlFor={techStack[3].name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {`${stack}? ${techStack[3].label.split('?')[1]}`}
                {techStack[3].required && (
                  <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                    *
                  </span>
                )}
              </label>
              <textarea
                id={techStack[3].name}
                name={techStack[3].name}
                required={techStack[3].required}
                placeholder={techStack[3].placeHolder}
                className="form_input"
              />
            </div>
          ) : null}
          {remainingInputs.map((inp) => (
            <div
              key={inp.id}
              className="flex flex-col w-full justify-between gap-1 mb-5"
            >
              <label
                htmlFor={inp.name}
                className="text-black text-lg md:text-[24px] leading-[160%]"
              >
                {inp.label}
                {inp.required && (
                  <span className="text-red-400 text-lg ml-1  -mt-4 inline">
                    *
                  </span>
                )}
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
                    <option
                      key={i}
                      value={option}
                      className="form_input py-10 my-4"
                    >
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

export default SoftwareForm;
