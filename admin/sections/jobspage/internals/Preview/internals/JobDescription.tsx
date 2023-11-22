import { KUDA } from '@/public';
import Image from 'next/image';
import React from 'react';

const JobDescription = () => {
  return (
    <div className="flex flex-col gap-[15px] w-full max-w-[480px] mx-auto">
      <Image src={KUDA} alt="job logo" className="w-[109px] h-[88px]" />
      <div className="flex flex-col gap-[15px]"></div>
      <h1 className="text-black text-2xl font-bold leading-[160%]">
        Software Engineer (Backend)
      </h1>
      <p className="text-black text-xs font-bold">
        Deadline <span className="font-normal">18th Nov 2023</span>
      </p>
      <h2 className="text-black text-[17px] font-medium leading-[160%]">
        Job Description/ Requirements
      </h2>
      <p className="text-black text-xs leading-[160%]">
        Even if you don’t meet 100% of the qualifications below, please still
        consider applying. We believe in a holistic approach when evaluating
        talent for our team. Metabase is the easiest way for people to get
        insights from their data, from tiny startups who get up and running
        quickly to major corporations with tens of thousands of users.
        That&apos;s why people love us. We bring data tools with the elegance
        and simplicity of consumer products to the crufty world of enterprise
        business intelligence. We provide an opinionated open source starting
        point for how companies should measure, analyze and share their data,
        which is used by tens of thousands of companies. We’re looking for
        exceptional software engineers to join our team in doing the hard work
        that makes our users’ lives easy. We run on a mix of Clojure and
        JavaScript (and TypeScript), and the ideal candidate has shipped
        production code in one or more of these languages. You’ll be expected to
        ship major features end to end across our JavaScript and Clojure
        codebase, as well as deal with some of our trickier backend issues as
        they arise. Some familiarity with machine learning, compiler theory and
        modern big data infrastructures would be helpful. You should have strong
        product sensibilities and deeply care about the end user experience. We
        are hiring for multiple backend software engineer positions. About You
        Experience in Clojure (or a strong desire to learn) Track record of
        shipping products of significant complexity Solid CS background
        (acquired through either a CS program or shipping software in a
        production setting) Able to make good technical judgements and back them
        up articulately Nice to have: Experience with JDBC and database
        integrations Nice to have: Experience and knowledge of the Java
        ecosystem and JVM tuning Nice to have: history of open source
        contributions Nice to have: experience in JavaScript / Typescript (our
        frontend is in JS and TS) We&apos;re a global team (50% outside the US),
        fully distributed (from Thailand to California), who get things done
        asynchronously, with plenty of uninterrupted time, supporting each other
        to do the best work of our careers. We offer flexibility (define your
        own schedule and work from wherever you want), autonomy, and an
        environment that fosters growth, learning, and development. We&apos;re
        relentlessly user-focused and believe in building long-term value, not
        short-term hacks. And we raised a $30M Series B to take our approach to
        the next level for years to come.
      </p>
    </div>
  );
};

export default JobDescription;
