'use client';

import React from 'react';
import { btn, detailsInput, links } from './constants';
import Button from '../Button';
import { useSearchParams } from 'next/navigation';

const Form = () => {
  const params = useSearchParams();
  const title = params.get('title');
  const desc = params.get('desc');
  const type = params.get('type');
  return (
    <div className="w-full flex flex-col justify-between gap-4   px-3 py-[60px] lg:py-[80px] md:px-10 xl:px-[170px]  max-w-[1440px] mx-auto font-raleway">
      <h1 className="text-black font-bold text-[32px] md:text-[48px] mb-[10px] md:mb-[35px] leading-[160%]">
        {title}
      </h1>
      <h2 className="text-black font-bold text-[18px] md:text-[24px] mb-[10px] md:mb-[51px] leading-[160%] max-w-[533px]">
        {desc !== 'undefined' ? desc : type}
      </h2>

      <form action="">
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
              className="w-full max-w-[741px] py-[18px] px-5 flex-shrink-0 rounded-lg border border-[1px,solid,#B3B3B3] bg-[#E6E6E6]"
            />
          </div>
        ))}
        <div className="flex flex-col lg:flex-row  w-full justify-between  gap-4 mt-[60px] mb-[30px]">
          <label
            htmlFor="textarea"
            className="text-black text-lg md:text-[24px] leading-[160%]"
          >
            Additional Information
          </label>
          <textarea
            id="textarea"
            name="textarea"
            rows={4}
            cols={30}
            className="w-full max-w-[741px] py-[18px] px-5 flex-shrink-0 rounded-lg border border-[1px,solid,#B3B3B3] bg-[#E6E6E6]"
          />
        </div>
        <div className="w-full flex justify-center">
          <Button text={btn.label} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
