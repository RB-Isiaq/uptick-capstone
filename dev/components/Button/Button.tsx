import React from 'react';

interface Button {
  text: string;
  secondary?: boolean;
  plain?: boolean;
  black?: boolean;
  tertiary?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  isLoading?: boolean;
}
export const Button = ({
  text,
  secondary,
  plain,
  black,
  tertiary,
  type,
  onClick,
  isLoading,
  ...props
}: Button) => {
  return (
    <button
      className={`flex items-center justify-center px-5 md:px-2 lg:px-5 py-[18px] font-raleway  ${
        secondary
          ? 'bg-[inherit] text-white border  border-[rgba(255,255,255,0.30)]'
          : plain
          ? 'bg-white text-[#2F2F2F]'
          : black
          ? 'text-white bg-black'
          : tertiary
          ? 'text-[#477BFF] bg-inherit'
          : 'bg-uptickDarkBlue text-white'
      } font-semibold tracking-[1.25px] leading-[100%] rounded-lg ${
        isLoading ? 'animate-bounce' : ''
      }`}
      type={type || 'button'}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};
