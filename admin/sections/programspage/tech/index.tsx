import Button from '@/components/Button';
import { Menu } from '@/public';
import Image from 'next/image';

const TalentTech = () => {
  return (
    <div className="bg-[#F7F9FF] px-8 py-[64px] pb-[100px] w-full">
      <div className="w-full  flex justify-between items-center mb-2">
        <h1 className="text-[#15254C] font-bold text-[24px]">Talent Tech</h1>

        <Button text="Add New" icon />
      </div>
      <div className="flex justify-between gap-2 py-7 px-6">
        <h1 className="text-lg font-semibold">Programs</h1>
        <h1 className="text-lg font-semibold">Number of applicants</h1>
        <div />
      </div>
      <div className="bg-white flex justify-between gap-2 py-7 px-6">
        <h1 className=" font-semibold">Programs</h1>
        <h1 className=" font-semibold">200</h1>
        <Image src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default TalentTech;
