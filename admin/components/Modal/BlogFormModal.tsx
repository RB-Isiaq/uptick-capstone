'use client';

import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { formTabs } from './constants';
import { Close } from '@/public';
import { setStep } from '@/store/BlogReducer';
import AddThumbnail from '@/sections/blogspage/internals/AddThumbnail';
import AddTitle from '@/sections/blogspage/internals/AddTitle';
import Preview from '@/sections/blogspage/internals/Preview';
import { BlogState } from '@/store/BlogReducer';

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogFormModal: React.FC<BlogFormModalProps> = ({ isOpen, onClose }) => {
  const { step } = useSelector((state: BlogState) => state.blogs);
  const dispatch = useDispatch();

  const Form = () => {
    switch (step) {
      case 1:
        return <AddThumbnail />;
      case 2:
        return <AddTitle />;
      case 3:
        return <Preview />;

      default:
        return <AddThumbnail />;
    }
  };

  if (!isOpen) return null;
  return (
    <div className="absolute w-full top-0 left-0 min-h-screen flex items-center justify-center z-50 font-raleway bg-transparent backdrop-blur-lg py-20">
      <div className="relative z-[60] w-full max-w-[800px] bg-white rounded-lg shadow-lg px-[41px] py-[48px]">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-black text-2xl font-medium">Edit</h1>
          <Image
            src={Close}
            alt="close"
            onClick={() => onClose(!isOpen)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full flex gap-[32px] my-[60px]">
          {formTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => dispatch(setStep(tab.id))}
              className={`p-[10px] text-black  font-medium text-lg flex justify-center items-center gap-[10px] ${
                step === tab.id
                  ? 'y-center items-center gap-[10px] border-b border-[#477BFF] bg-[#F7F7F7]'
                  : ''
              }`}
            >
              {tab.label} {tab.icon ? <Image src={tab.icon} alt="eye" /> : null}
            </button>
          ))}
        </div>
        <Form />
      </div>
    </div>
  );
};

export default BlogFormModal;
