import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Button from '../Button';

export type ContentCardType = {
  image: StaticImageData | string;
  title: string;
  description: string;
  btn1?: string;
  btn2?: string;
  reverse?: boolean;
};
export const ContentCard = ({
  image,
  title,
  description,
  btn1,
  btn2,
  reverse,
}: ContentCardType) => {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } justify-between items-center  gap-3 `}
    >
      <div className="flex flex-col gap-6 md:gap-[38px] w-[604px] max-w-full">
        <h1 className="font-raleway text-white font-bold text-[26px] md:text-[60px] leading-normal ">
          {title}
        </h1>
        <p className="font-raleway text-white text-[18px] w-full max-w-[401px]">
          {description}
        </p>
        <div className="w-full flex  items-center gap-[26px]">
          {btn1 ? <Button text={btn1} /> : null}
          {btn2 ? <Button text={btn2} /> : null}
        </div>
      </div>
      <Image
        src={image}
        alt="about"
        width={682}
        height={665}
        className="w-[300px] h-[300px] md:w-[682px] md:h-[665px] object-contain "
      />
    </div>
  );
};
