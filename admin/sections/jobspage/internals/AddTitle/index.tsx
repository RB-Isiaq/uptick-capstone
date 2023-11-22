'use client';

import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/Button';
import TitleAndOptions from '@/components/TitleAndOptions';
import { jobCategory, jobType, jobLocation } from './constants';
import {
  JobState,
  setCategory,
  setCompany,
  setDeadline,
  setDescription,
  setLocation,
  setStep,
  setTitle,
  setType,
} from '@/store/JobReducer';

const AddTitle = () => {
  const dispatch = useDispatch();
  const {
    step,
    title,
    company,
    deadline,
    description,
    type,
    category,
    location,
  } = useSelector((state: JobState) => state.jobApplication);

  return (
    <div className="flex flex-col gap-[30px] font-raleway">
      <div className=" flex flex-col">
        <label htmlFor="title" className="text-black text-lg font-medium">
          Job Title
        </label>
        <input
          type="text"
          id="title"
          className="border-0 outline-0 border-b border-black text-black  bg-inherit"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
      </div>
      <div className=" flex gap-[37px] items-center">
        <label htmlFor="company" className="text-black text-lg font-medium">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="border-0 outline-0 border-b border-black text-black py-3"
          value={company}
          onChange={(e) => dispatch(setCompany(e.target.value))}
        />
      </div>
      <div className=" flex gap-[37px] items-center">
        <label htmlFor="deadline" className="text-black text-lg font-medium">
          Deadline
        </label>
        <input
          type="text"
          id="deadline"
          className="border-0 outline-0 border-b border-black text-black py-3"
          value={deadline}
          onChange={(e) => dispatch(setDeadline(e.target.value))}
        />
      </div>
      <div className="bg-[#F7F7F7] py-[16px] px-[27px] flex flex-col gap-3">
        <label htmlFor="jobDesc" className="text-black text-lg font-medium">
          Add Job Description
        </label>
        <input
          type="text"
          id="jobDesc"
          placeholder="Description"
          className="border-0 outline-0 border-b border-black text-black py-3 bg-inherit"
          value={description}
          onChange={(e) => dispatch(setDescription(e.target.value))}
        />
      </div>
      <TitleAndOptions
        title={jobType.title}
        options={jobType.options}
        value={type}
        onChange={(e) => dispatch(setType(e.target.value))}
      />
      <TitleAndOptions
        title={jobCategory.title}
        options={jobCategory.options}
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      />
      <TitleAndOptions
        title={jobLocation.title}
        options={jobLocation.options}
        value={location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
      />

      <Button text="Save Changes" onClick={() => dispatch(setStep(step + 1))} />
    </div>
  );
};

export default AddTitle;
