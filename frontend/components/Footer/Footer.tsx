import React from 'react';
import { copyright, desc, footerLinks, socialLinks, title } from './constants';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-[#E7E7E7] py-[90px] px-3 xl:px-[100px] md:px-10">
      <div className="w-full flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full max-w-[449px] flex flex-col justify-between h-[214px]">
          <h1 className="font-poppins text-uptickBlack text-[26px] md:text-[39px] font-semibold">
            {title}
          </h1>
          <p className="font-poppins text-uptickBlack text-[18px] opacity-80">
            {desc}
          </p>
          <ul className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.path}>
                  <Image src={link.icon} alt={link.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-[537px] flex flex-wrap justify-between gap-7">
          {footerLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col h-[216px] gap-7 w-[100px] md:w-max overflow-hidden"
            >
              <h1 className="font-poppins text-uptickBlack text-[18px] sm:text-[22px] font-medium">
                {link.title}
              </h1>
              <ul className="flex flex-col gap-7">
                {link.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="font-poppins text-[rgba(44,44,44,0.50)] text-[18px] sm:text-[16px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="font-poppins text-[rgba(44,44,44,0.50)] text-[14px] text-center mt-[36px]">
        {copyright}
      </p>
    </footer>
  );
};
