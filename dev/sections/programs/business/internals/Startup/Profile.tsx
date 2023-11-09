import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ProfileProps = {
  name: string;
  image: string | StaticImageData;
  title: string;
};
const Profile = ({ name, image, title }: ProfileProps) => {
  return (
    <div className="relative font-raleway w-[300px] ">
      <Image width={201} height={201} src={image} alt="partner" />
      <div className="absolute bottom-0 right-0 bg-[#EDF2FF]  p-2 rounded-lg flex flex-col gap-1 ">
        <h1 className="font-bold text-[#070C19]">{name}</h1>
        <p className="text-sm text-[#070C19]">{title}</p>
      </div>
    </div>
  );
};

export default Profile;
