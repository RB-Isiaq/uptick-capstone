import React, { ChangeEvent, useRef } from 'react';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setThumbnail } from '@/store/BlogReducer';
import Image from 'next/image';
import { BlogState } from '@/store/BlogReducer';

const AddThumbnail = () => {
  const dispatch = useDispatch();
  const { thumbnail, step } = useSelector((state: BlogState) => state.blogs);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      dispatch(setThumbnail(URL.createObjectURL(file)));
    }
  };

  const handleBrowseClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className=" flex flex-col justify-center  gap-[53px] w-full h-full">
      <div className="relative bg-[#F7F7F7]  rounded-lg w-full max-w-[641px] h-[279px] mx-auto p-3">
        <input
          type="file"
          name="thumbnail"
          accept="image/*"
          required
          onChange={handleFileChange}
          ref={inputRef}
          className="hidden"
        />
        {thumbnail && (
          <Image
            src={thumbnail}
            alt="Thumbnail Preview"
            width={641}
            height={279}
            className="w-full h-full object-contain"
          />
        )}

        <div className="absolute top-[168px] left-0 w-full flex justify-center items-center ">
          <Button text="Browse" onClick={handleBrowseClick} />
        </div>
      </div>
      <Button text="Save Changes" onClick={() => dispatch(setStep(step + 1))} />
    </div>
  );
};

export default AddThumbnail;
