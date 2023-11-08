import Image, { StaticImageData } from 'next/image';
import Button from '../Button';

type ProgramProps = {
  id: number;
  title: string;
  desc: string;
  bg: string | StaticImageData;
};
const ProgramHero = ({ content }: { content: ProgramProps }) => {
  return (
    <section className="relative bg_program">
      <div className=" w-full max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-[46px] justify-center items-center py-[140px]   ">
        <h1 className="text-[white] text-center font-ralewaay text-[26px] md:text-[72px] font-bold leading-normal">
          {content.title}
        </h1>
        <p
          className={`text-[white] text-center font-raleway text-lg leading-[160%]  w-full ${
            content.id === 1 ? 'max-w-[476px]' : 'max-w-[728px]'
          } px-2 md:px-0`}
        >
          {content.desc}
        </p>
        <Button text="Learn More" />
        <Image
          src={content.bg}
          alt="background"
          width={1440}
          height={500}
          className="h-full w-full absolute top-0 right-0 -z-[1] "
        />
      </div>
    </section>
  );
};

export default ProgramHero;
