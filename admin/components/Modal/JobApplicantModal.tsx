import Image from 'next/image';
import { jobApplicantDetails } from './constants';
import { Close } from '@/public';
import { JobApplicantDetails } from '@/interfaces';
import { FormEvent } from 'react';
import { updateData } from '@/Services/ApiCalls';
import { useMutation } from '@tanstack/react-query';

interface JobApplicantModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  appDetails: JobApplicantDetails[];
  applicantId: string;
}

const JobApplicantModal: React.FC<JobApplicantModalProps> = ({
  isOpen,
  onClose,
  appDetails,
  applicantId,
}) => {
  const details = appDetails.filter(
    (applicant) => applicant.applicantId === applicantId,
  );
  const applicantDetails: JobApplicantDetails = details[0];

  const { mutate, error, isPending, isSuccess } = useMutation({
    mutationFn: async (formData: JobApplicantDetails) => {
      const data = await updateData(
        `jobApplicant/${applicantId}/job`,
        formData,
      );
      return data;
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    const updatedApplicantData: JobApplicantDetails = {
      ...applicantDetails,
      status: String(formObject.status),
    };
    mutate(updatedApplicantData);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute w-full top-0 left-0 min-h-screen flex items-center justify-center z-50 font-raleway bg-transparent backdrop-blur-lg py-20">
      <div className="relative z-[60] w-full max-w-[820px] bg-white rounded-lg shadow-lg px-5 py-10 md:p-[50px]">
        <div className="absolute top-10 right-10">
          <Image
            src={Close}
            alt="close"
            onClick={() => onClose(!isOpen)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-[14px]">
          {jobApplicantDetails.map((detail) =>
            applicantDetails[detail.key as keyof JobApplicantDetails] ? (
              <div key={detail.id} className="w-full overflow-hidden">
                <p className="text-lg text-black">{detail.label}</p>
                <p className="w-full text-lg text-[#5988FF]">
                  {applicantDetails[detail.key as keyof JobApplicantDetails]}
                </p>
              </div>
            ) : null,
          )}
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex gap-4 md:gap-9 items-center mt-[35px]"
        >
          <div className="flex flex-row-reverse gap-2 items-center">
            <label
              htmlFor="accept"
              className="text-[#1A1A1A]  text-lg md:text-2xl font-semibold tracking-[1.837px]"
            >
              Accept
            </label>
            <input
              type="radio"
              name="status"
              id="accept"
              value="Accepted"
              defaultChecked
            />
          </div>
          <div className="flex flex-row-reverse gap-2 items-center">
            <label
              htmlFor="reject"
              className="text-[#1A1A1A]  text-lg md:text-2xl font-semibold tracking-[1.837px]"
            >
              Reject
            </label>
            <input type="radio" name="status" id="reject" value="Rejected" />
          </div>
          {isPending ? (
            <p className="text-black  text-lg md:text-2xl">Updating ...</p>
          ) : error ? (
            <p className="text-red-400  text-lg md:text-2xl">
              Something went wrong
            </p>
          ) : isSuccess ? (
            <p className="text-green-400  text-lg md:text-2xl">Updated</p>
          ) : (
            ''
          )}
          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicantModal;
