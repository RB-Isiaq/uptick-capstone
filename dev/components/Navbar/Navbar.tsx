'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { btnText, navLinks } from './constants';
import Link from 'next/link';
import { D_ICON, LOGO } from '@/public';
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

  const [navbarBackground, setNavbarBackground] =
    useState<string>('transparent');

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleScroll = () => {
        const scrollHeight = window.scrollY;
        const heroSectionHeight = 300;

        if (scrollHeight > heroSectionHeight) {
          setNavbarBackground('#070C19');
        } else {
          setNavbarBackground('transparent');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return (
    <>
      <header
        className={` bg-[${navbarBackground}] sticky top-0 left-0 z-10 backdrop-blur-xl `}
      >
        <nav
          className={` w-full flex justify-between gap-4 items-center  px-3 py-6 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto shadow-sm`}
        >
          <Link href="/">
            <Image src={LOGO} alt="logo" />
          </Link>
          <div className="hidden  md:flex justify-between gap-4 items-center w-full max-w-[484px]">
            <Link
              href={navLinks[0].href}
              className="font-medium font-raleway  text-white"
            >
              {navLinks[0].label}
            </Link>
            <div className="relative group">
              <button className=" flex gap-2 items-center focus:outline-none  ">
                <p className="font-medium font-raleway  text-white">Programs</p>
                <div className=" ">
                  <Image src={D_ICON} alt="drop_down" />
                </div>
              </button>
              <div className="absolute to-10 hidden bg-[#070C19] text-white group-hover:block w-full">
                <Link href="/programs/tech/">
                  <p className="block p-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                    Tech
                  </p>
                </Link>
                <Link href="/programs/business/">
                  <p className="block p-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                    Business
                  </p>
                </Link>
                <Link href="/programs/map/">
                  <p className="block p-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                    Map
                  </p>
                </Link>
                <Link href="/programs/beginners/">
                  <p className="block p-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                    Beginners
                  </p>
                </Link>
              </div>
            </div>
            <Link
              href={navLinks[2].href}
              className="font-medium font-raleway  text-white"
            >
              {navLinks[2].label}
            </Link>
            <Link
              href={navLinks[3].href}
              className="font-medium font-raleway  text-white"
            >
              {navLinks[3].label}
            </Link>
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
      </header>
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
              <Link
                href={navLinks[0].href}
                className="font-medium font-raleway  text-white"
              >
                {navLinks[0].label}
              </Link>
              <div className="relative group">
                <button className=" flex gap-2 items-center focus:outline-none  ">
                  <p className="font-medium font-raleway  text-white">
                    Programs
                  </p>
                  <div>
                    <Image src={D_ICON} alt="drop_down" />
                  </div>
                </button>
                <div className="absolute to-10 hidden bg-[#070C19] text-white group-hover:block group-hover:relative w-full">
                  <Link href="/programs/tech/">
                    <p className="block py-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                      Tech
                    </p>
                  </Link>
                  <Link href="/programs/business/">
                    <p className="block py-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                      Business
                    </p>
                  </Link>
                  <Link href="/programs/map/">
                    <p className="block py-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                      Map
                    </p>
                  </Link>
                  <Link href="/programs/beginners/">
                    <p className="block py-2 text-sm font-medium leading-[24px] hover:bg-inherit text-[#9A99A0] hover:text-white">
                      Beginners
                    </p>
                  </Link>
                </div>
              </div>
              <Link
                href={navLinks[2].href}
                className="font-medium font-raleway  text-white"
              >
                {navLinks[2].label}
              </Link>
              <Link
                href={navLinks[3].href}
                className="font-medium font-raleway  text-white"
              >
                {navLinks[3].label}
              </Link>
              <Link
                href="/#programs"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                <Button text={'Explore Programmes'} />
              </Link>
            </div>
          </MotionDiv>
        )}
      </AnimatePresenceDiv>
    </>
  );
};
