'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { btnText, navLinks } from './constants';
import Link from 'next/link';
import { LOGO } from '@/public';
import Hambuger from '../Hambuger';
import dynamic from 'next/dynamic';
import Button from '../Button';

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
      <section className="bg-[#070C19] sticky top-0 left-0 z-10">
        <nav
          className={` w-full flex justify-between gap-4 items-center  px-3 py-6 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto shadow-sm`}
        >
          <Link href="/">
            <Image src={LOGO} alt="logo" />
          </Link>
          <div className="hidden  md:flex justify-between gap-4 items-center w-full max-w-[484px]">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="font-medium font-raleway  text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Link href="/#programs">
              <Button text={btnText} />
            </Link>
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
      </section>
      <AnimatePresenceDiv>
        {toggleMenu && (
          <MotionDiv
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ translateX: -100, opacity: 0 }}
            className={`md:hidden flex-col items-start h[100vh]  px-6 w-full max-w-[280px] sm:max-w-[300px] left-0 bg-[#070C19] shadow-xl  fixed h-[100vh] z-[200] top-0 mt-[80px]
      `}
          >
            <div className="md:hidden flex flex-col mt-[2rem] gap-7 justify-between">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="font-medium font-raleway  text-white"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#programs"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                <Button text={btnText} />
              </Link>
            </div>
          </MotionDiv>
        )}
      </AnimatePresenceDiv>
    </>
  );
};
