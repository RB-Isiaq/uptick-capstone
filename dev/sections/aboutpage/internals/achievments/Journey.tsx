import Button from '@/components/Button';
import Image from 'next/image';

const Journey = () => {
  return (
    <div className="gridCenter lg:grid-cols-2 gap-12 border border-x-0 border-uptickGray px-10 md:px-14 lg:px-32 pt-8">
      <div className="flex flex-col gap-8">
        <h1 className=" text-4xl lg:text-6xl font-bold text-white">
          Join Us On This Journey
        </h1>
        <div>
          <p className="text-white text-lg mt-4 leading-[160%]">
            At Uptick Talent, we invite you to be a part of our story. Whether
            you&apos;re a student looking to embark on a transformative
            educational journey, an entrepreneur seeking guidance and
            mentorship, or a partner organization interested in our talent
            placement services, we are here to welcome you into our vibrant
            community.
          </p>
          <p className="text-white text-lg mt-4 leading-[160%]">
            Ready to embark on a journey of innovation and growth? Explore our
            programs, meet our mentors, and join us in shaping the future of
            technology and business.
          </p>
        </div>
        <div>
          <Button text="Explore Our Programmes" />
        </div>
      </div>
      <div>
        <Image src="/journey.png" alt="" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Journey;
