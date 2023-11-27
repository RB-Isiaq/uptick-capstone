import React from 'react';

interface Button {
  text: string;
  secondary?: boolean;
  plain?: boolean;
}
export const Button = ({ text, secondary, plain, ...props }: Button) => {
  return (
    <button
      className={`flex items-center justify-center px-5 py-[18px] font-raleway  ${
        secondary
          ? 'bg-[inherit] text-white border border-[1px,solid,rgba(255,255,255,0.30)]'
          : plain
          ? 'bg-white text-[#2F2F2F]'
          : 'bg-uptickDarkBlue text-white'
      } font-semibold tracking-[1.25px] leading-4 rounded-lg `}
      {...props}
    >
      {text}
    </button>
  );
};
