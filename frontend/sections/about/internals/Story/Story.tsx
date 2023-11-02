import Header from '@/components/Header';
import { HeadText, SubText } from './constants';

export const Story = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[64px] bg-[#E7E7E7] py-[66px]  px-3 xl:px-[100px] md:px-10">
      <Header title={HeadText} />
      <p className="font-poppins text-[18px] leading-[32px] text-uptickBlack opacity-80 text-center w-full max-w-[747px] px-5">
        {SubText}
      </p>
    </div>
  );
};
