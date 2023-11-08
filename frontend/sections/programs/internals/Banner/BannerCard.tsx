import Image, { StaticImageData } from 'next/image';

type BannerProp = {
  id: number;
  title: string;
  desc: string;
  bg: string | StaticImageData;
};
const BannerCard = ({ content }: { content: BannerProp }) => {
  return (
    <div className="relative w-full flex flex-col gap-6 md:gap-10 justify-center items-center py-6  bg-beginner md:h-[500px] transition-all">
      <h1 className="text-[white] text-center font-poppins text-[26px] md:text-[58px] font-semibold leading-[140%]">
        {content.title}
      </h1>
      <p className="text-[white] text-center font-poppins text-lg md:text-[24px] md:leading-[37px] opacity-80 w-full max-w-[600px] px-2">
        {content.desc}
      </p>
      <Image
        src={content.bg}
        alt="background"
        width={1440}
        height={500}
        className="h-full w-full absolute top-0 left-0 -z-[1] "
      />
    </div>
  );
};

export default BannerCard;
