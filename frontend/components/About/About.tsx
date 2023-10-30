import { ABOUT, LETTER } from '@/public';
import React from 'react';
import { AboutCard } from './AboutCard';

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E7E7E7] py-[139px] xl:px-[100px] md:px-10">
      <h1 className="font-poppins text-center text-[55px] text-uptickBlack font-semibold">
        About Uptick Talent
      </h1>
      <AboutCard
        image={ABOUT}
        title="Our Journey and Impact"
        description="      Learn about our story, values, and the impact we\'ve made in nurturing talent and fostering innovation across Africa"
        btn=" About Us"
      />

      <h1 className="font-poppins text-center text-[38px] text-uptickBlack font-semibold">
        Stay Updated with Uptick Talent
      </h1>
      <AboutCard
        image={LETTER}
        title="Subscribe to Our Newsletter"
        description="Stay in the loop with the latest industry insights, success stories, and program updates. Subscribe to our newsletter today!"
        btn="Subscribe"
        reverse={true}
      />
    </div>
  );
};
