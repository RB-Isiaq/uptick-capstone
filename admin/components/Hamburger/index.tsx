import React, { FC, MouseEventHandler } from 'react';

interface HamburgerProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Hamburger: FC<HamburgerProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-4 absolute top-[100px] left-[220px]"
    >
      <div className="w-6 h-6 relative">
        <div className="absolute left-0 top-0 w-full h-1 bg-[#14141E] transform rotate-45 origin-top rounded-r-3xl"></div>
        <div className="absolute left-0 top-[10px] w-5 h-1 bg-[#14141E] rounded-r-3xl"></div>
        <div className="absolute left-0 bottom-0 w-full h-1 bg-[#14141E] transform -rotate-45 origin-bottom rounded-r-3xl"></div>
      </div>
    </button>
  );
};

export default Hamburger;
