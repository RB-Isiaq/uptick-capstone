'use client';
import Image, { StaticImageData } from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { UUID } from 'crypto';
import { usePathname } from 'next/navigation';
import Modal from '../Modal/Modal';
import { useCallback, useEffect, useState } from 'react';
import { getData } from '@/Services/ApiCalls';

type Track = {
  id: number;
  track: string;
};

interface TechCardProps {
  programId: number | UUID | string;
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
  programId,
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
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');
  const pathname = usePathname();
  const path = pathname.split('/')[2];

  const getProgram = useCallback(async () => {
    const data = await getData(`programs/${programId}`);
    if (data) setStatus(data.status);
  }, [programId]);

  useEffect(() => {
    getProgram();
  }, [getProgram]);
  console.log(title);

  return (
    <div
      className={`w-full flex flex-col lg:${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } justify-between items-center gap-4 py-[50px] px-3 font-raleway z-[2]`}
    >
      <Image src={image} alt="beginner" className="w-full lg:max-w-[586px]" />
      <div className="flex flex-col gap-[16px] md:gap-[24px] w-full lg:max-w-[586px]">
        <h1
          className={`text-[#fff]  text-3xl md:text-[48px] leading-normal  font-${
            normal ? 'normal' : 'bold'
          } ${title === 'Software Engineering' ? 'lg:w-[278px]' : 'w-full'}`}
        >
          {title}
        </h1>
        <h1 className="text-[#fff] text-2xl  font-medium w-full max-w-[350px]">
          {profession}
        </h1>
        <p className="text-[#fff]  text-lg pr-2">{desc}</p>
        <div
          className={`flex gap-3 flex-wrap w-full max-w-[438px] ${
            title === 'Non-Technical Programs'
              ? 'max-w-[545px]'
              : title === 'Design' || title === 'AI & Data'
              ? 'max-w-[440px]'
              : 'max-w-[250px]'
          }`}
        >
          {tracks?.map((track) => (
            <Button key={track.id} text={track.track} plain />
          ))}
        </div>
        <p className="text-[#fff]  text-lg pr-2"> {desc2}</p>
        <div>
          {path === 'tech' && status === 'open' ? (
            <Link href={`${path}/${programId}`}>
              <Button text={btnText} />
            </Link>
          ) : (
            <>
              <Button
                text={btnText}
                onClick={() => setShowModal((prev) => !prev)}
              />
              <Modal
                isOpen={showModal}
                message={
                  'Application is currently closed. \nPlease check back later'
                }
                onClose={setShowModal}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
