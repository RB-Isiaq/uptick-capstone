import { TechCard } from '@/components/Cards/TechCard';
import { application1, application2, help, venture } from './constants';

export const Application = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#070C19]">
        <div className="py-[20px] md:py-[111px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 ">
          <TechCard
            image={application1.image}
            title={application1.title}
            desc={application1.desc}
            desc2={application1.desc2}
            btnText={application1.btnText}
            normal
            reverse
          />
        </div>
      </section>
      <section className="bg-[#15254C] font-raleway">
        <div className="py-[60px] md:py-[111px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col w-full max-w-[570px]">
            <h1 className="text-white text-center text-[32px] md:text-[48px]">
              {venture.title}
            </h1>
            <span className="text-white text-lg ">{venture.subTitle}</span>
            <h2 className="my-[30px] md:my-[45px] text-white  text-[26px] md:text-[32px]">
              {venture.title2}
            </h2>
            <p className="text-white text-lg leading-[160%] w-full max-w-[516px]">
              {venture.desc}
            </p>
          </div>
          <div className="w-full max-w-[692px] bg-[#F5F5F4] rounded-2xl  border border-[1px,solid,#0F6F58] flex flex-col gap-[45px] p-5 md:p-[50px]">
            <h1 className="text-[#000] text-[32px] md:text-[48px] font-bold leading-[160%]">
              {help.title}
            </h1>
            <div className="flex flex-col gap-5 w-full max-w-[592px]">
              {help.how.map((item) => (
                <p className="text-lg text-[#000] leading-[160%]" key={item.id}>
                  <span className="font-bold mr-2">{item.title}</span>
                  {item.desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#070C19]">
        <div className="py-[20px] md:py-[111px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 ">
          <TechCard
            image={application2.image}
            title={application2.title}
            desc={application2.desc}
            desc2={application2.desc2}
            btnText={application2.btnText}
            normal
            reverse
          />
        </div>
      </section>
    </>
  );
};
