import { GO, QUOTE } from '@/public';
import Image from 'next/image';
export const TestimonialCard = ({
  content,
  name,
}: {
  content: string;
  name: string;
}) => {
  return (
    <div className="w-[330px] md:w-[730px] h-[402px] p-4 md:p-[50px] bg-[#070C19] border border-[1px,solid,#1C3166] rounded-2xl flex flex-col gap-6 justify-between">
      <p className="text-white text-[18px] ">{content}</p>
      <div className="self-start flex">
        <p className="text-[#91B0FF] text-[18px] font-bold">{name}</p>
        <Image src={GO} alt="go" />
      </div>
      <Image className="self-end" src={QUOTE} alt="quote" />
    </div>
  );
};
