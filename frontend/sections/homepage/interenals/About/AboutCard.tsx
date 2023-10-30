import Image from 'next/image';
import { StaticImageData } from 'next/image';

type AboutCard = {
  image: StaticImageData | string;
  title: string;
  description: string;
  btn: string;
  reverse?: boolean;
};
export const AboutCard = ({
  image,
  title,
  description,
  btn,
  reverse,
}: AboutCard) => {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-between items-center my-[60px] md:my-[100px] gap-3`}
    >
      <Image
        src={image}
        alt="about"
        width={500}
        height={500}
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
      />
      <div className="flex flex-col gap-6 md:gap-[63px] w-[447px] max-w-full">
        <h1 className="font-poppins text-uptickBlack font-semibold text-[26px] md:text-[36px]">
          {title}
        </h1>
        <p className="font-poppins text-uptickBlack text-[18px]">
          {description}
        </p>
        <div className="w-full flex justify-between items-center gap-2">
          {reverse ? (
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full py-[19px] px-[32px] rounded-[7px] border border-[1px,solid,#808080] bg-[white]"
            />
          ) : null}
          <button className="w-[135px] flex justify-center items-center py-[19px] px-[6px] rounded-md bg-[#1E1E1E] text-[#fff] font-poppins font-semibold">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
