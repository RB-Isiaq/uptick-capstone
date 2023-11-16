import React from 'react';

interface Button {
  text: string;
  secondary?: boolean;
  plain?: boolean;
  type?: 'button' | 'reset' | 'submit';
}
export const Button = ({ text, secondary, plain, type, ...props }: Button) => {
  return (
    <button
      className={`flex items-center justify-center px-5 py-[18px] font-raleway  ${
        secondary
          ? 'bg-[inherit] text-white border  border-[rgba(255,255,255,0.30)]'
          : plain
          ? 'bg-white text-[#2F2F2F]'
          : 'bg-uptickDarkBlue text-white'
      } font-semibold tracking-[1.25px] leading-[150%] rounded-lg`}
      type={type || 'button'}
      {...props}
    >
      {text}
    </button>
  );
};
