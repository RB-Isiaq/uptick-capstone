/* eslint-disable react/no-unescaped-entities */
import { SINGLE_BLOG } from '@/public';
import Image from 'next/image';
import React from 'react';

const BlogDetails = ({ id }: { id: string | number }) => {
  console.log(id);

  return (
    <section>
      <div className="flex flex-col justify-center items-center py-[40px] lg:py-[100px] px-3 xl:px-[60px] md:px-10 max-w-[854px] mx-auto gap-[28px]  lg:gap-[37px] overflow-hidden">
        <div className="w-full  flex flex-col ">
          <h3 className="text-lg">
            Written by <span className="font-bold">Joseph Ojo</span>
          </h3>
          <h1 className="font-raleway  text-[28px] md:text-[48px] font-bold">
            Bolt Kenya suspends 5% booking fee
          </h1>
        </div>
        <Image src={SINGLE_BLOG} alt="blog-icon" />
        <div className="flex flex-col gap-3">
          <p className="leading-[150%]">
            Two weeks ago, Bolt announced it would remain in Kenya despite the
            National Transport and Safety Authority's (NTSA) refusal to renew
            its licence.{' '}
          </p>

          <p className="leading-[150%]">
            Why did the Authority refuse to do so? The NTSA alleged that the
            company broke transportation laws — charging an unauthorised 5%
            booking fee on top of the 18% commission that the NTSA has
            established.
          </p>

          <p className="leading-[150%]">
            Here’s what’s new: Yesterday, Bolt Kenya disclosed it would suspend
            its 5% booking fee until further information from the NTSA is
            received, while it reiterated that it still operates in Kenya.
          </p>

          <p className="leading-[150%]">
            Bolt contends that Section 32(4) of the NTSA Act, which allows
            operations to continue until the licence application process is
            officially determined, makes the current licence legally valid.
          </p>

          <p className="leading-[150%]">
            On October 28, 2022, the Transport Network Company granted the
            mobility startup a licence.{' '}
          </p>

          <p className="leading-[150%]">
            So, the renewal procedure, according to a letter from NTSA to Bolt,
            should have been completed yesterday, Monday, October 30, 2023.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
