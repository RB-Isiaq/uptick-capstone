import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Card = {
  path: string | StaticImageData;
  name: string;
  role: string;
};
const Card = ({ path, name, role }: Card) => {
  return (
    <div className="w-[285px]  bg-[white] flex flex-col justify-center items-center">
      <Image src={path} alt={name} />
      <div className="w-full h-[128px] flex flex-col  justify-center items-center gap-[17px] bg-[#E7E7E7] shadow-lg rounded-[0px,0px,4px,4px]">
        <h1 className="text-uptickBlack font-poppins text-xl font-semibold text-center">
          {name}
        </h1>
        <h2 className="text-uptickBlack font-poppins text-center">{role}</h2>
      </div>
    </div>
  );
};

export default Card;
