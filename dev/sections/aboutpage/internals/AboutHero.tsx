import Image from 'next/image';

const Header = () => {
  return (
    <div className="gridCenter  lg:grid-cols-2 gap-12 ">
      <div className="text-white flex flex-col gap-10">
        <h1 className="text-4xl lg:text-6xl font-bold">About Uptick Talent</h1>
        <p className="text-xl leading-[160%]">
          At Uptick Talent, we are on a relentless mission to cultivate the next
          generation of technology and business leaders. Our journey is
          characterized by innovation, mentorship, and a commitment to nurturing
          talent from all walks of life.
        </p>
      </div>
      <div>
        <Image
          src="/aboutHero.png"
          alt=""
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <div className="gridCenter lg:grid-cols-2 gap-12">
      <div className="order-2 lg:order-1">
        <Image
          src="/our-story.png"
          alt=""
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="text-white flex flex-col gap-10 lg:text-end order-1 lg:order-2">
        <h1 className="text-4xl lg:text-6xl font-bold">Our Story</h1>
        <p className="text-xl leading-[160%]  ">
          Uptick Talent was birthed to empower individuals with the knowledge
          and skills they need to thrive in today&apos;s fast-paced,
          ever-evolving world of technology and business. Since our inception,
          we have grown into a global community, serving as a launchpad for
          dreams and a bridge between aspirations and accomplishments.
        </p>
      </div>
    </div>
  );
};

const AboutHero = () => {
  return (
    <div className="about-bg min-h-screen bg-upBlack px-10 md:px-14 py-20 lg:px-32 flex flex-col gap-32 mt-[-120px] pt-[200px]">
      <Header />
      <Story />
    </div>
  );
};

export default AboutHero;
