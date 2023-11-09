import { VALUES } from './constants';
import Image from 'next/image';
const AboutValues = () => {
  return (
    <div className="bg-upLightBlue px-10 py-20 lg:px-32">
      <div className="flex flex-col gap-6 items-center justify-center text-center mb-[3rem]">
        <h2 className="text-4xl lg:text-6xl font-medium">Our Values</h2>
        <p className="text-xl leading-[160%]">
          Our core values are the driving force behind everything we do
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALUES.map((value, index) => (
          <div
            key={index}
            className="bg-black p-[1.86rem] rounded-2xl flex flex-col gap-[0.94rem]"
          >
            <div>
              <Image
                src={value.icon}
                alt={value.title}
                // className="w-full"
                width={39}
                height={39}
              />
            </div>
            <div className="flex flex-col gap-[0.94rem]">
              <h3 className="text-[#7ea3ff] text-2xl font-semibold">
                {value.title}
              </h3>
              <p className="text-uptickGray text-xl leading-[160%]">
                {value.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutValues;
