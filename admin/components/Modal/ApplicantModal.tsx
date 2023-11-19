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
    <div className="fixed inset-0 flex items-center justify-center z-50 font-raleway">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative z-50 w-[820px] bg-white rounded-lg shadow-lg p-[50px]">
        <div className="absolute top-0 right-0">
          <Image src={Close} alt="close" onClick={() => onClose(!isOpen)} />
        </div>
        <div className="w-full flex flex-col gap-[14px]">
          {applicantDetails.map((details) => (
            <div key={details.id}>
              <p className="text-lg text-black">{details.label}</p>
              <p className="text-lg text-[#5988FF]">{details.placeHolder}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantModal;
