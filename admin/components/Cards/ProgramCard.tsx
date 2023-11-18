import { Menu } from '@/public';
import Image from 'next/image';

interface IProgramCard {
  title: string;
  number: string | number;
}

const ProgramCard = ({ title, number }: IProgramCard) => {
  return (
    <div className="bg-white flex justify-between gap-2 py-7 px-6">
      <h1 className=" font-semibold">{title}</h1>
      <h1 className=" font-semibold">{number}</h1>
      <Image src={Menu} alt="menu" />
    </div>
  );
};

export default ProgramCard;
