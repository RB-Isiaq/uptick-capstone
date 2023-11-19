import Image from 'next/image';

import { Add } from '@/public';
interface Button {
  text: string;
  type?: 'button' | 'reset' | 'submit';
  icon?: boolean;
}
export const Button = ({ text, type, icon, ...props }: Button) => {
  return (
    <button
      className="flex justify-center items-center px-5 py-[14px] gap-[11px] rounded-lg bg-[#477BFF] text-white"
      type={type || 'button'}
      {...props}
    >
      {icon && <Image src={Add} alt="add" />}

      {text}
    </button>
  );
};
