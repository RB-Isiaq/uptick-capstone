import { mapHero } from './constants';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { P1, P2, P3, P4, P5, P6, P7 } from '@/public';

export const Hero = () => {
  return (
    <section className="  mt-[-120px] pt-[120px]">
      <div className="relative  w-full max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-[46px] justify-center items-center pt-[140px] pb-[240px]  ">
        <h1 className="text-black text-center font-ralewaay text-[26px] md:text-[72px] font-bold leading-normal ">
          {mapHero.title}
        </h1>
        <p
          className={`text-black text-center font-raleway text-lg leading-[160%]   w-full max-w-[651px] px-2 md:px-0`}
        >
          {mapHero.desc}
        </p>
        <Link href={mapHero.path} className="">
          <Button text={mapHero.btn} black />
        </Link>
        <Image
          src={mapHero.bg}
          alt="background"
          className="  absolute top-40 md:top-0 left-0 z-[-1]"
        />
        <Image
          src={P1}
          alt="background"
          className="  absolute top-20 left-0 z-[-1]"
        />
        <Image
          src={P2}
          alt="background"
          className="  absolute top-8 right-[410px] z-[-1]"
        />
        <Image
          src={P3}
          alt="background"
          className="  absolute top-20 right-10 z-[-1]"
        />
        <Image
          src={P4}
          alt="background"
          className="  hidden  absolute md:block top-60 left-40 z-[-1]"
        />
        <Image
          src={P5}
          alt="background"
          className="  absolute bottom-12 left-[250px] z-[-1]"
        />
        <Image
          src={P6}
          alt="background"
          className="  absolute bottom-20 left-100 z-[-1]"
        />
        <Image
          src={P7}
          alt="background"
          className="  absolute bottom-10 right-60 z-[-1]"
        />
      </div>
    </section>
  );
};
