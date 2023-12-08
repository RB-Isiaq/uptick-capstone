'use client';

import { useState } from 'react';
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
  const [jobTitle, setJobTitle] = useState(title);
  const [jobCompany, setJobCompany] = useState(company);
  const [jobDeadline, setJobDeadline] = useState(deadline);
  const [jobDesc, setJobDesc] = useState(description);
  const [jType, setJType] = useState(type);
  const [jCategory, setJCategory] = useState(category);
  const [jLocation, setJLocation] = useState(location);

  const handleDispatch = () => {
    dispatch(setTitle(jobTitle));
    dispatch(setCompany(jobCompany));
    dispatch(setDeadline(jobDeadline));
    dispatch(setDescription(jobDesc));
    dispatch(setType(jType));
    dispatch(setCategory(jCategory));
    dispatch(setLocation(jLocation));
    dispatch(setStep(step + 1));
  };

  return (
    <div className="flex flex-col gap-[30px] font-raleway">
      <div className=" flex flex-col">
        <label htmlFor="title" className="text-black text-lg font-medium">
          Job Title
        </label>
        <input
          type="text"
          id="title"
          className="border-0 outline-0 border-b border-black text-black  bg-inherit pt-3 pb-1"
          defaultValue={title}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className=" flex gap-[37px] items-center">
        <label htmlFor="company" className="text-black text-lg font-medium">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="border-0 outline-0 border-b border-black text-black pt-3 pb-1"
          defaultValue={company}
          onChange={(e) => setJobCompany(e.target.value)}
        />
      </div>
      <div className=" flex gap-[37px] items-center">
        <label htmlFor="deadline" className="text-black text-lg font-medium">
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          className="border-0 outline-0 border-b border-black text-black pt-3 pb-1"
          defaultValue={deadline.toString()}
          onChange={(e) => setJobDeadline(e.target.value)}
        />
      </div>
      <div className="bg-[#F7F7F7] py-[16px] px-3 md:px-[27px] flex flex-col gap-3">
        <label htmlFor="jobDesc" className="text-black text-lg font-medium">
          Add Job Description
        </label>
        <textarea
          id="jobDesc"
          placeholder="Description"
          className="border-0 outline-0 border-b border-black text-black pt-3 pb-1 bg-inherit"
          rows={10}
          defaultValue={description}
          onChange={(e) => setJobDesc(e.target.value)}
        />
      </div>
      <TitleAndOptions
        title={jobType.title}
        options={jobType.options}
        name={jobType.name}
        value={type}
        dValue={jType}
        onChange={setJType}
      />
      <TitleAndOptions
        title={jobCategory.title}
        options={jobCategory.options}
        name={jobCategory.name}
        value={category}
        dValue={jCategory}
        onChange={setJCategory}
      />
      <TitleAndOptions
        title={jobLocation.title}
        options={jobLocation.options}
        name={jobLocation.name}
        value={location}
        dValue={jLocation}
        onChange={setJLocation}
      />

      <Button text="Save Changes" onClick={handleDispatch} />
    </div>
  );
};

export default AddTitle;
