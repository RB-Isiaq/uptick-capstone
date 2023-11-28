/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from '@/components/Button';
type jobDetails = {
  thumbnail: string | StaticImageData;
  title: string;
  deadline: string;
  description: string;
};

interface JobDetails {
  details: jobDetails;
}

const JobDetails = ({ details }: JobDetails) => {
  const paragraphs = details.description.split(/\n/);
  return (
    <div className="flex flex-col gap-[15px] lg:gap-[30px] w-full max-w-[741px] mx-auto py-10">
      <Image
        src={details.thumbnail}
        alt="job logo"
        width={225}
        height={181}
        className="w-[225px] h-[181px]"
      />
      <h1 className="text-black text-2xl lg:text-[48px] font-bold leading-[160%]">
        {details.title}
      </h1>
      <p className="text-black font-bold">
        Deadline <span className="ml-2 font-normal">{details.deadline}</span>
      </p>
      <h2 className="text-black md:text-[32px] font-medium leading-[160%]">
        Job Description/ Requirements
      </h2>
      <div className="w-full flex flex-col gap-1">
        {paragraphs?.map((paragraph, i) => (
          <p className="text-black  leading-[160%]" key={i}>
            {paragraph}
          </p>
        ))}
        <p className="text-black  leading-[160%]">
          Even if you don’t meet 100% of the qualifications below, please still
          consider applying. We believe in a holistic approach when evaluating
          talent for our team. Metabase is the easiest way for people to get
          insights from their data, from tiny startups who get up and running
          quickly to major corporations with tens of thousands of users. That's
          why people love us. We bring data tools with the elegance and
          simplicity of consumer products to the crufty world of enterprise
          business intelligence. We provide an opinionated open source starting
          point for how companies should measure, analyze and share their data,
          which is used by tens of thousands of companies. We’re looking for
          exceptional software engineers to join our team in doing the hard work
          that makes our users’ lives easy. We run on a mix of Clojure and
          JavaScript (and TypeScript), and the ideal candidate has shipped
          production code in one or more of these languages. You’ll be expected
          to ship major features end to end across our JavaScript and Clojure
          codebase, as well as deal with some of our trickier backend issues as
          they arise. Some familiarity with machine learning, compiler theory
          and modern big data infrastructures would be helpful. You should have
          strong product sensibilities and deeply care about the end user
          experience. We are hiring for multiple backend software engineer
          positions. About You Experience in Clojure (or a strong desire to
          learn) Track record of shipping products of significant complexity
          Solid CS background (acquired through either a CS program or shipping
          software in a production setting) Able to make good technical
          judgements and back them up articulately Nice to have: Experience with
          JDBC and database integrations Nice to have: Experience and knowledge
          of the Java ecosystem and JVM tuning Nice to have: history of open
          source contributions Nice to have: experience in JavaScript /
          Typescript (our frontend is in JS and TS) We're a global team (50%
          outside the US), fully distributed (from Thailand to California), who
          get things done asynchronously, with plenty of uninterrupted time,
          supporting each other to do the best work of our careers. We offer
          flexibility (define your own schedule and work from wherever you
          want), autonomy, and an environment that fosters growth, learning, and
          development. We're relentlessly user-focused and believe in building
          long-term value, not short-term hacks. And we raised a $30M Series B
          to take our approach to the next level for years to come.
        </p>
      </div>
      <div>
        <Button text="Apply For This Job" />
      </div>
    </div>
  );
};

export default JobDetails;
