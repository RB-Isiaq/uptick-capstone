import Image from 'next/image';
import { ACHIEVEMENTS } from './constants';
const Achievments = () => {
  return (
    <div>
      <div>
        <h1 className=" text-4xl lg:text-6xl font-[500] text-white">
          Our Achievements
        </h1>
        <p className="text-white text-lg mt-4 leading-[160%]">
          Our journey has been marked by significant milestones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {ACHIEVEMENTS.map((item, index) => (
          <div
            key={index}
            className="bg-upBlack rounded-2xl flex flex-col px-8 py-10 border border-upDarkBlue text-white"
          >
            <Image
              src={item.image}
              width={1500}
              height={1500}
              alt="achievment"
            />
            <div className="mt-6 flex flex-col gap-4">
              <h1 className="text-2xl font-semi bold ">{item.title}</h1>
              <p className="text-uptickGray text-lg ">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievments;
