import Image, { StaticImageData } from 'next/image';
import Button from '../Button';

type Track = {
  id: number;
  track: string;
};

interface TechCardProps {
  image: string | StaticImageData;
  title: string;
  profession?: string;
  desc: string;
  desc2?: string;
  tracks?: Track[];
  btnText: string;
  reverse: boolean;
  normal?: boolean;
}

export const TechCard = ({
  image,
  title,
  profession,
  desc,
  desc2,
  tracks,
  btnText,
  reverse,
  normal,
}: TechCardProps) => {
  return (
    <div
      className={`w-full flex flex-col lg:${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } justify-between items-center gap-4 py-[50px] px-3 font-raleway`}
    >
      <Image src={image} alt="beginner" />
      <div className="flex flex-col gap-[16px] md:gap-[30px] w-full max-w-[586px]">
        <h1
          className={`text-[#fff]  text-3xl md:text-[48px] leading-normal  font-${
            normal ? 'normal' : 'bold'
          } `}
        >
          {title}
        </h1>
        <h1 className="text-[#fff] text-2xl  font-medium w-full max-w-[350px]">
          {profession}
        </h1>
        <p className="text-[#fff]  text-lg pr-2">{desc}</p>
        <div className="flex gap-3 flex-wrap w-full max-w-[450px]">
          {tracks?.map((track) => (
            <Button key={track.id} text={track.track} plain />
          ))}
        </div>
        <p className="text-[#fff]  text-lg pr-2"> {desc2}</p>
        <div>
          <Button text={btnText} />
        </div>
      </div>
    </div>
  );
};
