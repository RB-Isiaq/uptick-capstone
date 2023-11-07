import React from 'react';
import {
  Subscribe,
  copyright,
  desc,
  footerLinks,
  privacy,
  socialLinks,
} from './constants';
import Link from 'next/link';
import Image from 'next/image';
import { LOGO } from '@/public';

export const Footer = () => {
  return (
    <section className="bg-[#121212]">
      <footer className="w-full max-w-[1440px] flex flex-col justify-center gap-[102px] items-center  border-[1px,solid,rgba(82,82,82,0.17)] py-[90px] px-3 xl:px-[60px] md:px-10 mx-auto">
        <div className="w-full flex flex-col  md:flex-row justify-between gap-4">
          <div className="w-full max-w-[440px] flex flex-col justify-between h-[255px]">
            <Image src={LOGO} alt="uptick" />
            <p className="font-raleway text-white text-[18px] font-medium mt-[60px]">
              {desc}
            </p>
            <form action="" className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-4 rounded-[8px,0px,0px,8p]  bg-[#e6e6e6] "
              />
              <button
                type="submit"
                className="text-white  bg-[#477BFF] p-3  rounded-[0px,8px,8px,0px]"
              >
                {Subscribe}
              </button>
            </form>
          </div>

          <div className="w-full max-w-[660px] flex flex-wrap justify-between gap-2">
            {footerLinks.map((link) => (
              <div
                key={link.id}
                className="flex flex-col h-[256px] gap-[30px] "
              >
                <h1 className="font-raleway text-white text-[18px] font-bold">
                  {link.title}
                </h1>
                <ul className="flex flex-col gap-2">
                  {link.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.path}
                        className="flex items-center gap-3"
                      >
                        {link.icon ? (
                          <Image src={link.icon} alt={link.label} />
                        ) : null}

                        <p className="font-raleway text-[#fff] text-[14px] max-w-[233px]">
                          {link.label}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <p className="font-raleway text-[#666] font-medium text-center">
            {copyright}
          </p>
          <ul className="flex gap-4 items-center justify-between h-[48px] w-[240px]">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.path}>
                  <Image src={link.icon} alt={link.label} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-raleway text-[#666] font-medium text-center">
            {privacy}
          </p>
        </div>
      </footer>
    </section>
  );
};