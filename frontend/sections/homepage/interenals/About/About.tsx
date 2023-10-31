import { aboutUs } from './constants';
import ContentCard from '@/components/ContentCard/ContentCard';

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E7E7E7] py-[139px] px-3 xl:px-[100px] md:px-10">
      {aboutUs.map((about) => (
        <ContentCard
          key={about.id}
          headTitle={about.title}
          title={about.subTitle}
          description={about.text}
          image={about.image}
          btn1={about.btn}
          reverse={about.reverse}
          input={about.input}
        />
      ))}
    </div>
  );
};
