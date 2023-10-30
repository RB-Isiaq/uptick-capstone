'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { navLinks } from './constants';
import Link from 'next/link';
import { LOGO } from '@/public';
import Hambuger from '../Hambuger';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false },
);
const AnimatePresenceDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false },
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <nav className="sticky top-0 left-0 z-10 bg-inherit w-full flex justify-between gap-4 items-center  px-3 py-[22px] xl:px-[100px] md:px-10 max-w-[1440px] mx-auto shadow-sm bg-[white]">
        <Image src={LOGO} alt="logo" />
        <div className="hidden  md:flex justify-between gap-4 items-center w-full max-w-[753px]">
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
        <button
          type="button"
          className="md:hidden relative z-[200] px-2 cursor-pointer"
          onClick={() => setToggleMenu((prev) => !prev)}
          title="menu"
        >
          <Hambuger isOpen={toggleMenu} />
        </button>
      </nav>
      <AnimatePresenceDiv>
        {toggleMenu && (
          <MotionDiv
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ translateX: -100, opacity: 0 }}
            className={`md:hidden flex-col items-start h[100vh]  px-6 w-full max-w-[280px] sm:max-w-[300px] left-0 bg-[white] shadow-xl  fixed h-[100vh] z-[200] top-0 mt-[100px]
      `}
          >
            <div className="md:hidden flex flex-col mt-[2rem] gap-7 justify-between">
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
          </MotionDiv>
        )}
      </AnimatePresenceDiv>
    </>
  );
};
