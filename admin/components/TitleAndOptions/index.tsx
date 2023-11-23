import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Option = {
  id: number;
  label: string;
};
interface TitleAndOptionsProps {
  title: string;
  options: Option[];
  value: string;
  dValue: string;
  name: string;
  onChange: Dispatch<SetStateAction<string>>;
}
const TitleAndOptions = ({
  title,
  options,
  value,
  dValue,
  name,
  onChange,
}: TitleAndOptionsProps) => {
  return (
    <div className="bg-[#F7F7F7] py-[16px] px-[27px] flex flex-col gap-3">
      <label htmlFor={title} className="text-black">
        {title}
      </label>
      <input
        type="text"
        id={title}
        className="border-0 outline-0 border-b border-black text-black bg-inherit"
        defaultValue={dValue || value}
      />
      <div>
        {options.map((option) => (
          <div
            key={option.id}
            className="flex flex-row-reverse gap-2 items-center w-max"
          >
            <label
              htmlFor={option.label}
              className="text-[#7D7D7D] text-sm font-medium leading-[24px]"
            >
              {option.label}
            </label>
            <input
              type="radio"
              name={name}
              id={option.label}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
              }
              defaultChecked={value === option.label}
              value={option.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleAndOptions;
