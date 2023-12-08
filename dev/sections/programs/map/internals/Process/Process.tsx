import Header from '@/components/Header';
import { DOWN_ICON, MAP_EVALUATION, MAP_MATCHING, MAP_SUPPORT } from '@/public';
import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <section className="bg-[#000]  waves-bg">
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col bg-black py-[60px] lg:pt-[85px] lg:pb-[153px]">
        <div className="flex justify-center">
          <Header title="Our Process" />
        </div>
        <div className="w-full flex flex-col gap-[35px] md:gap-4 waves-bg  mt-[80px] lg:mt-[283px] px-2 z-[2]">
          <div className="self-center lg:self-end w-full max-w-[536px] h-max lg:h-[609px] p-6 lg:p-[56px] flex flex-col  gap-[15px] rounded-2xl border border-[#4D4D4D] bg-[#EDF2FF]">
            <Image src={MAP_EVALUATION} alt="evaluation" className="w-full" />
            <h1 className="text-2xl font-semibold">Talent Evaluation</h1>
            <p>
              We rigorously assess the skills, experience, and cultural fit of
              our candidates.
            </p>
          </div>
          <div className="self-center lg:self-start w-full max-w-[536px] h-max lg:h-[609px] p-6 lg:p-[56px] flex flex-col  gap-[15px] rounded-2xl border border-[#4D4D4D] bg-[#EDF2FF]">
            <Image src={MAP_MATCHING} alt="evaluation" className="w-full" />
            <h1 className="text-2xl font-semibold">Matching</h1>
            <p>
              We work closely with you to understand your needs and match you
              with the right talent.
            </p>
          </div>
          <div className="self-center lg:self-end w-full max-w-[536px] h-max lg:h-[609px] p-6 lg:p-[56px] flex flex-col  gap-[15px] rounded-2xl border border-[#4D4D4D] bg-[#EDF2FF]">
            <Image src={MAP_SUPPORT} alt="evaluation" className="w-full" />
            <h1 className="text-2xl font-semibold">Support</h1>
            <p>
              Our team provides support throughout the onboarding process to
              ensure a smooth integration into your organization.
            </p>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center self-center gap-[34px] top-[120px] lg:top-[205px] z-[1]">
          <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
            <Image src={DOWN_ICON} alt="down arrow" />
          </div>
          <div className="w-[1px] h-[362px] bg-[#828282]" />
          <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
            <p className="text-white">1</p>
          </div>
          <div className="w-[1px] h-[528px] bg-[#828282]" />
          <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
            <p className="text-white">2</p>
          </div>
          <div className="hidden lg:block w-[1px] h-[528px] bg-[#828282]" />
          <div className="hidden w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full lg:flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
            <p className="text-white">3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
