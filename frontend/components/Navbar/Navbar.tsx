import Image from 'next/image';
import React from 'react';
import { navLinks } from './constants';
import Link from 'next/link';
import { LOGO } from '@/public';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-10 bg-inherit w-full flex justify-between gap-4 items-center  px-3 py-[22px] xl:px-[100px] md:px-10 max-w-[1440px] mx-auto shadow-sm bg-[white]">
      <Image src={LOGO} alt="logo" />
      <div className="hidden  sm:flex justify-between gap-4 items-center w-full max-w-[753px]">
        {navLinks.map((link, i) => (
          <Link
            key={link.id}
            href={link.href}
            className={
              i !== navLinks.length - 1
                ? 'font-inter text-[22px] text-[#1E1E1E]'
                : 'flex justify-center items-center py-4 px-[35px] rounded-md bg-[#1E1E1E] text-[#fff] font-poppins font-semibold'
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
