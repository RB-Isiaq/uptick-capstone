import Image from 'next/image';
import { applicantDetails } from './constants';
import { Close } from '@/public';

interface ApplicantModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApplicantModal: React.FC<ApplicantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute w-full top-0 left-0 min-h-screen flex items-center justify-center z-50 font-raleway bg-transparent backdrop-blur-lg py-20">
      <div className="relative z-[60] w-full max-w-[820px] bg-white rounded-lg shadow-lg p-[50px]">
        <div className="absolute top-10 right-10">
          <Image
            src={Close}
            alt="close"
            onClick={() => onClose(!isOpen)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-[14px]">
          {applicantDetails.map((details) => (
            <div key={details.id}>
              <p className="text-lg text-black">{details.label}</p>
              <p className="text-lg text-[#5988FF]">{details.placeHolder}</p>
            </div>
          ))}
        </div>

        <form action="" className="flex gap-9 items-center mt-[35px]">
          <div className="flex flex-row-reverse gap-2 items-center">
            <label
              htmlFor="accept"
              className="text-[#1A1A1A] text-2xl font-semibold tracking-[1.837px]"
            >
              Accept
            </label>
            <input type="radio" name="status" id="accept" defaultChecked />
          </div>
          <div className="flex flex-row-reverse gap-2 items-center">
            <label
              htmlFor="reject"
              className="text-[#1A1A1A] text-2xl font-semibold tracking-[1.837px]"
            >
              Reject
            </label>
            <input type="radio" name="status" id="reject" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantModal;
